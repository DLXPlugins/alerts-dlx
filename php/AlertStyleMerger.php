<?php
/**
 * Merge Alert Style settings into block attributes at render time.
 *
 * @package AlertsDLX
 */

namespace DLXPlugins\AlertsDLX;

/**
 * Alert Style attribute merger.
 */
class AlertStyleMerger {

	/**
	 * Cache group for style settings.
	 */
	const CACHE_GROUP = 'alerts_dlx_alert_styles';

	/**
	 * Load and validate style settings for a style post ID.
	 *
	 * @param int $style_id Style post ID.
	 * @return array|null Array with settings and block_type, or null if invalid.
	 */
	public static function get_style_settings( $style_id ) {
		$style_id = absint( $style_id );
		if ( $style_id <= 0 ) {
			return null;
		}

		$cache_key = 'style_' . $style_id;
		$cached    = wp_cache_get( $cache_key, self::CACHE_GROUP );
		if ( false !== $cached ) {
			return $cached;
		}

		$post = get_post( $style_id );
		if ( ! $post || 'alerts_dlx_style' !== $post->post_type || 'publish' !== $post->post_status ) {
			wp_cache_set( $cache_key, null, self::CACHE_GROUP );
			return null;
		}

		$block_type = get_post_meta( $style_id, AlertStyles::META_BLOCK_TYPE, true );
		$block_type = AlertStyleSchema::normalize_block_type( $block_type );
		if ( ! $block_type ) {
			wp_cache_set( $cache_key, null, self::CACHE_GROUP );
			return null;
		}

		$settings = AlertStyleSchema::parse_style_envelope( $block_type, $post->post_content );
		if ( empty( $settings ) ) {
			wp_cache_set( $cache_key, null, self::CACHE_GROUP );
			return null;
		}

		$result = array(
			'id'         => $style_id,
			'title'      => $post->post_title,
			'block_type' => $block_type,
			'settings'   => $settings,
		);

		wp_cache_set( $cache_key, $result, self::CACHE_GROUP );
		return $result;
	}

	/**
	 * Clear cached style settings.
	 *
	 * @param int $style_id Style post ID.
	 */
	public static function clear_style_cache( $style_id ) {
		wp_cache_delete( 'style_' . absint( $style_id ), self::CACHE_GROUP );
	}

	/**
	 * Resolve image URL from image ID.
	 *
	 * @param int $image_id Attachment ID.
	 * @return string
	 */
	private static function resolve_image_url( $image_id ) {
		$image_id = absint( $image_id );
		if ( $image_id <= 0 ) {
			return '';
		}

		$url = wp_get_attachment_image_url( $image_id, 'full' );
		return $url ? esc_url_raw( $url ) : '';
	}

	/**
	 * Apply icon settings from a source array.
	 *
	 * @param array $attributes Target attributes.
	 * @param array $source     Source icon settings.
	 * @return array
	 */
	private static function apply_icon_settings( array $attributes, array $source ) {
		foreach ( AlertStyleSchema::get_icon_keys() as $key ) {
			if ( array_key_exists( $key, $source ) ) {
				$attributes[ $key ] = $source[ $key ];
			}
		}

		if ( ! empty( $attributes['imageId'] ) ) {
			$attributes['imageUrl'] = self::resolve_image_url( $attributes['imageId'] );
		} elseif ( isset( $attributes['iconSource'] ) && 'image' === $attributes['iconSource'] ) {
			$attributes['imageUrl'] = '';
		}

		return $attributes;
	}

	/**
	 * Merge style settings into block attributes.
	 *
	 * @param array $attributes Block attributes.
	 * @param array $settings   Style settings.
	 * @return array
	 */
	private static function merge_style_settings( array $attributes, array $settings ) {
		$block_type = AlertStyleSchema::normalize_block_type( $attributes['alertGroup'] ?? '' );
		if ( ! $block_type ) {
			return $attributes;
		}

		$allowed_keys    = AlertStyleSchema::get_allowed_keys( $block_type );
		$instance_keys   = AlertStyleSchema::get_instance_keys();
		$has_custom_icon = ! empty( $attributes['hasCustomIcon'] );
		$icon_keys       = AlertStyleSchema::get_icon_keys();

		foreach ( $allowed_keys as $key ) {
			if ( in_array( $key, $instance_keys, true ) ) {
				continue;
			}
			if ( in_array( $key, $icon_keys, true ) && $has_custom_icon ) {
				continue;
			}
			if ( array_key_exists( $key, $settings ) ) {
				$attributes[ $key ] = $settings[ $key ];
			}
		}

		if ( ! $has_custom_icon ) {
			$attributes = self::apply_icon_settings( $attributes, $settings );
		} elseif ( ! empty( $attributes['imageId'] ) && empty( $attributes['imageUrl'] ) ) {
			$attributes['imageUrl'] = self::resolve_image_url( $attributes['imageId'] );
		}

		return $attributes;
	}

	/**
	 * Resolve block attributes with linked Alert Style.
	 *
	 * @param array $attributes Block attributes.
	 * @return array
	 */
	public static function resolve_attributes( array $attributes ) {
		$style_id = absint( $attributes['alertStyleId'] ?? 0 );
		if ( $style_id <= 0 ) {
			return $attributes;
		}

		$style = self::get_style_settings( $style_id );
		if ( null === $style ) {
			return $attributes;
		}

		$alert_group = AlertStyleSchema::normalize_block_type( $attributes['alertGroup'] ?? '' );
		if ( ! $alert_group || $alert_group !== $style['block_type'] ) {
			return $attributes;
		}

		return self::merge_style_settings( $attributes, $style['settings'] );
	}

	/**
	 * Get attributes for unlinking a block from its Alert Style.
	 *
	 * @param array $attributes Block attributes.
	 * @return array
	 */
	public static function get_detach_attributes( array $attributes ) {
		$resolved                 = self::resolve_attributes( $attributes );
		$resolved['alertStyleId'] = 0;
		return $resolved;
	}
}
