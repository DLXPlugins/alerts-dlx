<?php
/**
 * Schema and sanitization for Alert Styles.
 *
 * @package AlertsDLX
 */

namespace DLXPlugins\AlertsDLX;

/**
 * Alert Style schema helper.
 */
class AlertStyleSchema {

	/**
	 * Supported block types for Alert Styles.
	 */
	const BLOCK_TYPES = array( 'bootstrap', 'chakra', 'material', 'shoelace' );

	/**
	 * Style JSON version.
	 */
	const VERSION = '1.0.0';

	/**
	 * Keys that must always come from the block instance.
	 *
	 * @return string[]
	 */
	public static function get_instance_keys() {
		return array(
			'uniqueId',
			'alertTitle',
			'alertDescription',
			'buttonText',
			'buttonUrl',
			'buttonTarget',
			'buttonRelNoFollow',
			'buttonRelSponsored',
			'isBlockEditorialOnly',
			'isBlockReadOnly',
			'hasCustomIcon',
			'alertStyleId',
			'alertGroup',
			'imageUrl',
		);
	}

	/**
	 * Icon keys owned by the style unless hasCustomIcon is true.
	 *
	 * @return string[]
	 */
	public static function get_icon_keys() {
		return array(
			'icon',
			'iconSource',
			'imageId',
		);
	}

	/**
	 * Shared style keys for all block types.
	 *
	 * @return string[]
	 */
	public static function get_shared_style_keys() {
		return array(
			'alertType',
			'variant',
			'mode',
			'align',
			'maximumWidth',
			'maximumWidthUnit',
			'baseFontSize',
			'iconVerticalAlignment',
			'colorPrimary',
			'colorBorder',
			'colorAccent',
			'colorAlt',
			'colorAltHover',
			'colorAltText',
			'colorAltTextHover',
			'colorBold',
			'colorLight',
			'iconEnabled',
			'titleEnabled',
			'descriptionEnabled',
			'buttonEnabled',
			'closeButtonEnabled',
			'closeButtonExpiration',
			'icon',
			'iconSource',
			'imageId',
		);
	}

	/**
	 * Theme-specific style keys.
	 *
	 * @param string $block_type Block type slug.
	 * @return string[]
	 */
	public static function get_theme_specific_keys( $block_type ) {
		switch ( $block_type ) {
			case 'shoelace':
				return array( 'iconAppearance' );
			case 'material':
				return array( 'enableDropShadow' );
			default:
				return array();
		}
	}

	/**
	 * Allowed style keys for a block type.
	 *
	 * @param string $block_type Block type slug.
	 * @return string[]
	 */
	public static function get_allowed_keys( $block_type ) {
		$block_type = self::normalize_block_type( $block_type );
		if ( ! $block_type ) {
			return array();
		}

		return array_values(
			array_unique(
				array_merge(
					self::get_shared_style_keys(),
					self::get_theme_specific_keys( $block_type )
				)
			)
		);
	}

	/**
	 * Normalize block type slug.
	 *
	 * @param string $block_type Block type slug.
	 * @return string|false
	 */
	public static function normalize_block_type( $block_type ) {
		$block_type = sanitize_key( $block_type );
		if ( in_array( $block_type, self::BLOCK_TYPES, true ) ) {
			return $block_type;
		}
		return false;
	}

	/**
	 * Field rules for a block type key.
	 *
	 * @param string $block_type Block type slug.
	 * @param string $key        Setting key.
	 * @return array|null
	 */
	public static function get_field_rules( $block_type, $key ) {
		$block_type = self::normalize_block_type( $block_type );
		if ( ! $block_type ) {
			return null;
		}

		$rules = array(
			'alertType'             => array(
				'type' => 'string',
				'enum' => self::get_alert_type_enum( $block_type ),
			),
			'variant'               => array(
				'type' => 'string',
				'enum' => self::get_variant_enum( $block_type ),
			),
			'mode'                  => array(
				'type' => 'string',
				'enum' => array( 'light', 'dark' ),
			),
			'align'                 => array(
				'type' => 'string',
				'enum' => array( 'left', 'center', 'right', 'wide', 'full', '' ),
			),
			'maximumWidth'          => array(
				'type' => 'string',
			),
			'maximumWidthUnit'      => array(
				'type' => 'string',
				'enum' => array( 'px', '%', 'rem', 'em', 'vw' ),
			),
			'baseFontSize'          => array(
				'type' => 'number',
			),
			'iconVerticalAlignment' => array(
				'type' => 'string',
				'enum' => array( 'top', 'centered' ),
			),
			'iconAppearance'        => array(
				'type' => 'string',
				'enum' => array( 'rounded' ),
			),
			'enableDropShadow'      => array(
				'type' => 'boolean',
			),
			'colorPrimary'          => array( 'type' => 'string' ),
			'colorBorder'           => array( 'type' => 'string' ),
			'colorAccent'           => array( 'type' => 'string' ),
			'colorAlt'              => array( 'type' => 'string' ),
			'colorAltHover'         => array( 'type' => 'string' ),
			'colorAltText'          => array( 'type' => 'string' ),
			'colorAltTextHover'     => array( 'type' => 'string' ),
			'colorBold'             => array( 'type' => 'string' ),
			'colorLight'            => array( 'type' => 'string' ),
			'iconEnabled'           => array( 'type' => 'boolean' ),
			'titleEnabled'          => array( 'type' => 'boolean' ),
			'descriptionEnabled'    => array( 'type' => 'boolean' ),
			'buttonEnabled'         => array( 'type' => 'boolean' ),
			'closeButtonEnabled'    => array( 'type' => 'boolean' ),
			'closeButtonExpiration' => array( 'type' => 'number' ),
			'icon'                  => array( 'type' => 'string' ),
			'iconSource'            => array(
				'type' => 'string',
				'enum' => array( 'icon', 'image' ),
			),
			'imageId'               => array( 'type' => 'number' ),
		);

		if ( ! isset( $rules[ $key ] ) ) {
			return null;
		}

		if ( ! in_array( $key, self::get_allowed_keys( $block_type ), true ) ) {
			return null;
		}

		return $rules[ $key ];
	}

	/**
	 * Alert type enum per block type.
	 *
	 * @param string $block_type Block type slug.
	 * @return string[]
	 */
	private static function get_alert_type_enum( $block_type ) {
		switch ( $block_type ) {
			case 'bootstrap':
				return array( 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'custom' );
			case 'shoelace':
				return array( 'primary', 'success', 'neutral', 'warning', 'danger', 'custom' );
			case 'chakra':
			case 'material':
				return array( 'success', 'info', 'warning', 'error', 'custom' );
			default:
				return array();
		}
	}

	/**
	 * Variant enum per block type.
	 *
	 * @param string $block_type Block type slug.
	 * @return string[]
	 */
	private static function get_variant_enum( $block_type ) {
		switch ( $block_type ) {
			case 'bootstrap':
				return array( 'default', 'centered' );
			case 'chakra':
				return array( 'subtle', 'solid', 'left-accent', 'top-accent', 'centered' );
			case 'material':
				return array( 'default', 'outlined', 'filled', 'centered' );
			case 'shoelace':
				return array( 'default', 'left-accent', 'top-accent', 'centered', 'solid' );
			default:
				return array();
		}
	}

	/**
	 * Sanitize icon settings.
	 *
	 * @param array $settings Settings array.
	 * @return array
	 */
	public static function sanitize_icon_settings( array $settings ) {
		$sanitized = array();

		if ( isset( $settings['iconSource'] ) ) {
			$icon_source             = sanitize_key( $settings['iconSource'] );
			$sanitized['iconSource'] = in_array( $icon_source, array( 'icon', 'image' ), true ) ? $icon_source : 'icon';
		}

		if ( isset( $settings['icon'] ) && ( ! isset( $sanitized['iconSource'] ) || 'icon' === $sanitized['iconSource'] ) ) {
			$icon = self::sanitize_svg_icon( $settings['icon'] );
			if ( ! empty( $icon ) ) {
				$sanitized['icon'] = $icon;
			}
		}

		if ( isset( $settings['imageId'] ) ) {
			$image_id = absint( $settings['imageId'] );
			if ( $image_id > 0 ) {
				$attachment = get_post( $image_id );
				if ( $attachment && 'attachment' === $attachment->post_type && wp_attachment_is_image( $image_id ) ) {
					$sanitized['imageId'] = $image_id;
				}
			} else {
				$sanitized['imageId'] = 0;
			}
		}

		return $sanitized;
	}

	/**
	 * KSES-sanitize an SVG icon string.
	 *
	 * @param mixed $icon Raw icon value.
	 * @return string
	 */
	private static function sanitize_svg_icon( $icon ) {
		$icon = wp_kses( wp_unslash( (string) $icon ), Functions::get_kses_allowed_html() );
		return ! empty( $icon ) ? $icon : '';
	}

	/**
	 * Sanitize a single setting value.
	 *
	 * @param string $block_type Block type slug.
	 * @param string $key        Setting key.
	 * @param mixed  $value      Raw value.
	 * @return mixed|null
	 */
	private static function sanitize_field_value( $block_type, $key, $value ) {
		$rules = self::get_field_rules( $block_type, $key );
		if ( null === $rules ) {
			return null;
		}

		if ( in_array( $key, self::get_icon_keys(), true ) ) {
			$icon_settings = self::sanitize_icon_settings( array( $key => $value ) );
			return $icon_settings[ $key ] ?? null;
		}

		switch ( $rules['type'] ) {
			case 'boolean':
				return filter_var( $value, FILTER_VALIDATE_BOOLEAN );
			case 'number':
				return is_numeric( $value ) ? (float) $value : null;
			case 'string':
				if ( isset( $rules['enum'] ) ) {
					$value = sanitize_key( $value );
					return in_array( $value, $rules['enum'], true ) ? $value : null;
				}
				if ( 0 === strpos( $key, 'color' ) ) {
					return sanitize_text_field( (string) $value );
				}
				if ( 'maximumWidth' === $key ) {
					return sanitize_text_field( (string) $value );
				}
				return sanitize_text_field( (string) $value );
		}

		return null;
	}

	/**
	 * Sanitize style settings for a block type.
	 *
	 * @param string $block_type Block type slug.
	 * @param array  $settings   Raw settings.
	 * @return array
	 */
	public static function sanitize_settings( $block_type, array $settings ) {
		$block_type = self::normalize_block_type( $block_type );
		if ( ! $block_type || empty( $settings ) ) {
			return array();
		}

		$sanitized = array();
		foreach ( self::get_allowed_keys( $block_type ) as $key ) {
			if ( ! array_key_exists( $key, $settings ) ) {
				continue;
			}
			$value = self::sanitize_field_value( $block_type, $key, $settings[ $key ] );
			if ( null !== $value ) {
				$sanitized[ $key ] = $value;
			}
		}

		$icon_settings = self::sanitize_icon_settings( $settings );
		foreach ( $icon_settings as $key => $value ) {
			if ( in_array( $key, self::get_allowed_keys( $block_type ), true ) ) {
				$sanitized[ $key ] = $value;
			}
		}

		return $sanitized;
	}

	/**
	 * Extract saveable style settings from block attributes.
	 *
	 * @param string $block_type Block type slug.
	 * @param array  $attributes Block attributes.
	 * @return array
	 */
	public static function extract_style_settings_from_attributes( $block_type, array $attributes ) {
		$block_type = self::normalize_block_type( $block_type );
		if ( ! $block_type ) {
			return array();
		}

		$extracted = array();
		foreach ( self::get_allowed_keys( $block_type ) as $key ) {
			if ( array_key_exists( $key, $attributes ) ) {
				$extracted[ $key ] = $attributes[ $key ];
			}
		}

		return self::sanitize_settings( $block_type, $extracted );
	}

	/**
	 * Build style envelope for post_content storage.
	 *
	 * @param string $block_type Block type slug.
	 * @param array  $settings   Style settings.
	 * @return array
	 */
	public static function build_style_envelope( $block_type, array $settings ) {
		return array(
			'version'  => self::VERSION,
			'settings' => self::sanitize_settings( $block_type, $settings ),
		);
	}

	/**
	 * Decode a JSON string that may be slash-escaped by WordPress.
	 *
	 * WordPress may slash-escape JSON once (POST) or twice (post_content save hooks).
	 * Try progressively unslashed candidates until json_decode succeeds.
	 *
	 * @param string $json JSON string.
	 * @return array|null
	 */
	public static function decode_json_string( $json ) {
		if ( ! is_string( $json ) || '' === $json ) {
			return null;
		}

		$candidates   = array();
		$candidates[] = $json;

		$unslashed = wp_unslash( $json );
		if ( $unslashed !== $json ) {
			$candidates[] = $unslashed;
		}

		$twice = wp_unslash( $unslashed );
		if ( $twice !== $unslashed ) {
			$candidates[] = $twice;
		}

		$candidates = array_unique( $candidates );

		foreach ( $candidates as $candidate ) {
			$decoded = json_decode( $candidate, true );
			if ( JSON_ERROR_NONE === json_last_error() && is_array( $decoded ) ) {
				return $decoded;
			}
		}

		return null;
	}

	/**
	 * Encode a style envelope for post_content storage.
	 *
	 * @param string $block_type Block type slug.
	 * @param array  $settings   Style settings.
	 * @return string
	 */
	public static function encode_style_post_content( $block_type, array $settings ) {
		$envelope = self::build_style_envelope( $block_type, $settings );
		if ( isset( $envelope['settings']['icon'] ) ) {
			$envelope['settings']['icon'] = addslashes( $envelope['settings']['icon'] );
		}
		return wp_json_encode( $envelope );
	}

	/**
	 * Parse style envelope from post content.
	 *
	 * @param string $block_type   Block type slug.
	 * @param string $post_content Post content JSON.
	 * @return array
	 */
	public static function parse_style_envelope( $block_type, $post_content ) {
		$block_type = self::normalize_block_type( $block_type );
		if ( ! $block_type || empty( $post_content ) ) {
			return array();
		}

		$data = self::decode_json_string( $post_content );
		if ( ! is_array( $data ) || ! isset( $data['settings'] ) || ! is_array( $data['settings'] ) ) {
			return array();
		}

		return self::sanitize_settings( $block_type, $data['settings'] );
	}
}
