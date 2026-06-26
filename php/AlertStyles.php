<?php
/**
 * Alert Styles custom post type and AJAX handlers.
 *
 * @package AlertsDLX
 */

namespace DLXPlugins\AlertsDLX;

/**
 * Alert Styles registration and CRUD.
 */
class AlertStyles {

	/**
	 * CPT slug.
	 */
	const POST_TYPE = 'alerts_dlx_style';

	/**
	 * Post meta key for block type.
	 */
	const META_BLOCK_TYPE = '_alerts_dlx_block_type';

	/**
	 * Main class runner.
	 *
	 * @return AlertStyles
	 */
	public static function run() {
		$self = new self();
		add_action( 'init', array( $self, 'register_post_type' ) );
		add_action( 'init', array( $self, 'register_post_meta' ) );
		add_action( 'save_post_' . self::POST_TYPE, array( $self, 'sanitize_on_save' ), 10, 2 );
		add_action( 'wp_ajax_alerts_dlx_load_alert_styles', array( $self, 'ajax_load_alert_styles' ) );
		add_action( 'wp_ajax_alerts_dlx_save_alert_style', array( $self, 'ajax_save_alert_style' ) );
		add_action( 'wp_ajax_alerts_dlx_update_alert_style', array( $self, 'ajax_update_alert_style' ) );
		add_action( 'wp_ajax_alerts_dlx_rename_alert_style', array( $self, 'ajax_rename_alert_style' ) );
		add_action( 'wp_ajax_alerts_dlx_delete_alert_style', array( $self, 'ajax_delete_alert_style' ) );
		add_action( 'wp_ajax_alerts_dlx_get_alert_style', array( $self, 'ajax_get_alert_style' ) );
		return $self;
	}

	/**
	 * Register the Alert Styles post type.
	 */
	public function register_post_type() {
		register_post_type(
			self::POST_TYPE,
			array(
				'public'              => false,
				'show_ui'             => false,
				'show_in_rest'        => false,
				'can_export'          => true,
				'exclude_from_search' => true,
				'publicly_queryable'  => false,
				'capability_type'     => 'post',
				'supports'            => array( 'title' ),
				'labels'              => array(
					'name'          => __( 'Alert Styles', 'alerts-dlx' ),
					'singular_name' => __( 'Alert Style', 'alerts-dlx' ),
				),
			)
		);
	}

	/**
	 * Register post meta for export support.
	 */
	public function register_post_meta() {
		register_post_meta(
			self::POST_TYPE,
			self::META_BLOCK_TYPE,
			array(
				'type'              => 'string',
				'single'            => true,
				'show_in_rest'      => false,
				'sanitize_callback' => function ( $value ) {
					$block_type = AlertStyleSchema::normalize_block_type( $value );
					return $block_type ? $block_type : '';
				},
				'auth_callback'     => function () {
					return current_user_can( 'edit_others_posts' );
				},
			)
		);
	}

	/**
	 * Re-sanitize style content on save (including import).
	 *
	 * @param int     $post_id Post ID.
	 * @param WP_Post $post    Post object.
	 */
	public function sanitize_on_save( $post_id, $post ) {
		if ( wp_is_post_revision( $post_id ) || ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) ) {
			return;
		}

		$block_type = get_post_meta( $post_id, self::META_BLOCK_TYPE, true );
		$block_type = AlertStyleSchema::normalize_block_type( $block_type );
		if ( ! $block_type ) {
			return;
		}

		$settings = AlertStyleSchema::parse_style_envelope( $block_type, $post->post_content );
		if ( empty( $settings ) ) {
			return;
		}

		remove_action( 'save_post_' . self::POST_TYPE, array( $this, 'sanitize_on_save' ), 10 );
		wp_update_post(
			array(
				'ID'           => $post_id,
				'post_content' => AlertStyleSchema::encode_style_post_content( $block_type, $settings ),
			)
		);
		add_action( 'save_post_' . self::POST_TYPE, array( $this, 'sanitize_on_save' ), 10, 2 );

		AlertStyleMerger::clear_style_cache( $post_id );
	}

	/**
	 * Verify manage capability and nonce.
	 *
	 * @param string $nonce_action Nonce action.
	 * @return bool
	 */
	private function verify_manage_request( $nonce_action ) {
		if ( ! current_user_can( 'edit_others_posts' ) ) {
			return false;
		}
		return (bool) wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), $nonce_action );
	}

	/**
	 * Decode settings from POST.
	 *
	 * @return array|null
	 */
	private function get_settings_from_post() {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing -- Verified by caller.
		if ( ! isset( $_POST['settings'] ) || ! is_string( $_POST['settings'] ) ) {
			return null;
		}

		$decoded = AlertStyleSchema::decode_json_string( $_POST['settings'] );
		if ( ! is_array( $decoded ) ) {
			return null;
		}

		return $decoded;
	}

	/**
	 * Format a style post for JSON response.
	 *
	 * @param \WP_Post $post Style post.
	 * @return array|null
	 */
	private function format_style_post( $post ) {
		if ( ! $post || self::POST_TYPE !== $post->post_type ) {
			return null;
		}

		$block_type = get_post_meta( $post->ID, self::META_BLOCK_TYPE, true );
		$block_type = AlertStyleSchema::normalize_block_type( $block_type );
		if ( ! $block_type ) {
			return null;
		}

		$settings = AlertStyleSchema::parse_style_envelope( $block_type, $post->post_content );
		if ( empty( $settings ) ) {
			return null;
		}

		if ( ! empty( $settings['imageId'] ) ) {
			$image_url = wp_get_attachment_image_url( absint( $settings['imageId'] ), 'full' );
			if ( $image_url ) {
				$settings['imageUrl'] = esc_url_raw( $image_url );
			}
		}

		return array(
			'id'           => $post->ID,
			'title'        => $post->post_title,
			'slug'         => $post->post_name,
			'block_type'   => $block_type,
			'settings'     => $settings,
			'delete_nonce' => wp_create_nonce( 'alerts_dlx_delete_alert_style_' . $post->ID ),
			'update_nonce' => wp_create_nonce( 'alerts_dlx_update_alert_style_' . $post->ID ),
			'rename_nonce' => wp_create_nonce( 'alerts_dlx_rename_alert_style_' . $post->ID ),
		);
	}

	/**
	 * Query styles for a block type.
	 *
	 * @param string $block_type Block type slug.
	 * @return array
	 */
	public static function return_styles_for_block_type( $block_type ) {
		$block_type = AlertStyleSchema::normalize_block_type( $block_type );
		if ( ! $block_type ) {
			return array();
		}

		$posts = get_posts(
			array(
				'post_type'      => self::POST_TYPE,
				'post_status'    => 'publish',
				'posts_per_page' => 100,
				'order'          => 'ASC',
				'orderby'        => 'title',
				'meta_query'     => array(
					array(
						'key'   => self::META_BLOCK_TYPE,
						'value' => $block_type,
					),
				),
			)
		);

		$self   = new self();
		$return = array();
		foreach ( $posts as $post ) {
			$formatted = $self->format_style_post( $post );
			if ( null !== $formatted ) {
				$return[] = $formatted;
			}
		}

		return $return;
	}

	/**
	 * AJAX: Load Alert Styles for a block type.
	 */
	public function ajax_load_alert_styles() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), 'alerts_dlx_load_alert_styles' ) ) {
			wp_send_json_error( array( 'message' => __( 'Invalid nonce.', 'alerts-dlx' ) ) );
		}

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized.', 'alerts-dlx' ) ) );
		}

		$block_type = AlertStyleSchema::normalize_block_type( filter_input( INPUT_POST, 'block_type', FILTER_DEFAULT ) );
		if ( ! $block_type ) {
			wp_send_json_error( array( 'message' => __( 'Invalid block type.', 'alerts-dlx' ) ) );
		}

		wp_send_json_success(
			array(
				'styles' => self::return_styles_for_block_type( $block_type ),
			)
		);
	}

	/**
	 * AJAX: Save a new Alert Style.
	 */
	public function ajax_save_alert_style() {
		if ( ! $this->verify_manage_request( 'alerts_dlx_save_alert_style' ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized.', 'alerts-dlx' ) ) );
		}

		$block_type = AlertStyleSchema::normalize_block_type( filter_input( INPUT_POST, 'block_type', FILTER_DEFAULT ) );
		if ( ! $block_type ) {
			wp_send_json_error( array( 'message' => __( 'Invalid block type.', 'alerts-dlx' ) ) );
		}

		$title = sanitize_text_field( filter_input( INPUT_POST, 'title', FILTER_DEFAULT ) );
		if ( empty( $title ) ) {
			wp_send_json_error( array( 'message' => __( 'Style title is required.', 'alerts-dlx' ) ) );
		}

		$raw_settings = $this->get_settings_from_post();
		if ( null === $raw_settings ) {
			wp_send_json_error( array( 'message' => __( 'Invalid settings.', 'alerts-dlx' ) ) );
		}

		$settings = AlertStyleSchema::sanitize_settings( $block_type, $raw_settings );
		if ( empty( $settings ) ) {
			wp_send_json_error( array( 'message' => __( 'No valid settings to save.', 'alerts-dlx' ) ) );
		}

		$post_id = wp_insert_post(
			array(
				'post_title'   => $title,
				'post_name'    => sanitize_title( $title ),
				'post_content' => AlertStyleSchema::encode_style_post_content( $block_type, $settings ),
				'post_status'  => 'publish',
				'post_type'    => self::POST_TYPE,
			)
		);

		if ( is_wp_error( $post_id ) || ! $post_id ) {
			wp_send_json_error( array( 'message' => __( 'Could not save Alert Style.', 'alerts-dlx' ) ) );
		}

		update_post_meta( $post_id, self::META_BLOCK_TYPE, $block_type );

		wp_send_json_success(
			array(
				'styles' => self::return_styles_for_block_type( $block_type ),
				'style'  => $this->format_style_post( get_post( $post_id ) ),
			)
		);
	}

	/**
	 * AJAX: Update an existing Alert Style.
	 */
	public function ajax_update_alert_style() {
		$style_id = absint( filter_input( INPUT_POST, 'style_id', FILTER_DEFAULT, FILTER_VALIDATE_INT ) );
		if ( $style_id <= 0 ) {
			wp_send_json_error( array( 'message' => __( 'Invalid style ID.', 'alerts-dlx' ) ) );
		}

		if ( ! $this->verify_manage_request( 'alerts_dlx_update_alert_style_' . $style_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized.', 'alerts-dlx' ) ) );
		}

		$post = get_post( $style_id );
		if ( ! $post || self::POST_TYPE !== $post->post_type ) {
			wp_send_json_error( array( 'message' => __( 'Alert Style not found.', 'alerts-dlx' ) ) );
		}

		$block_type = get_post_meta( $style_id, self::META_BLOCK_TYPE, true );
		$block_type = AlertStyleSchema::normalize_block_type( $block_type );
		if ( ! $block_type ) {
			wp_send_json_error( array( 'message' => __( 'Invalid block type.', 'alerts-dlx' ) ) );
		}

		$raw_settings = $this->get_settings_from_post();
		if ( null === $raw_settings ) {
			wp_send_json_error( array( 'message' => __( 'Invalid settings.', 'alerts-dlx' ) ) );
		}

		$settings = AlertStyleSchema::sanitize_settings( $block_type, $raw_settings );
		if ( empty( $settings ) ) {
			wp_send_json_error( array( 'message' => __( 'No valid settings to save.', 'alerts-dlx' ) ) );
		}

		wp_update_post(
			array(
				'ID'           => $style_id,
				'post_content' => AlertStyleSchema::encode_style_post_content( $block_type, $settings ),
			)
		);

		AlertStyleMerger::clear_style_cache( $style_id );

		wp_send_json_success(
			array(
				'styles' => self::return_styles_for_block_type( $block_type ),
				'style'  => $this->format_style_post( get_post( $style_id ) ),
			)
		);
	}

	/**
	 * AJAX: Rename an Alert Style.
	 */
	public function ajax_rename_alert_style() {
		$style_id = absint( filter_input( INPUT_POST, 'style_id', FILTER_DEFAULT, FILTER_VALIDATE_INT ) );
		if ( $style_id <= 0 ) {
			wp_send_json_error( array( 'message' => __( 'Invalid style ID.', 'alerts-dlx' ) ) );
		}

		if ( ! $this->verify_manage_request( 'alerts_dlx_rename_alert_style_' . $style_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized.', 'alerts-dlx' ) ) );
		}

		$post = get_post( $style_id );
		if ( ! $post || self::POST_TYPE !== $post->post_type ) {
			wp_send_json_error( array( 'message' => __( 'Alert Style not found.', 'alerts-dlx' ) ) );
		}

		$title = sanitize_text_field( filter_input( INPUT_POST, 'title', FILTER_DEFAULT ) );
		if ( empty( $title ) ) {
			wp_send_json_error( array( 'message' => __( 'Style title is required.', 'alerts-dlx' ) ) );
		}

		wp_update_post(
			array(
				'ID'         => $style_id,
				'post_title' => $title,
				'post_name'  => sanitize_title( $title ),
			)
		);

		$block_type = get_post_meta( $style_id, self::META_BLOCK_TYPE, true );

		wp_send_json_success(
			array(
				'styles' => self::return_styles_for_block_type( $block_type ),
				'style'  => $this->format_style_post( get_post( $style_id ) ),
			)
		);
	}

	/**
	 * AJAX: Delete an Alert Style.
	 */
	public function ajax_delete_alert_style() {
		$style_id = absint( filter_input( INPUT_POST, 'style_id', FILTER_DEFAULT, FILTER_VALIDATE_INT ) );
		if ( $style_id <= 0 ) {
			wp_send_json_error( array( 'message' => __( 'Invalid style ID.', 'alerts-dlx' ) ) );
		}

		if ( ! $this->verify_manage_request( 'alerts_dlx_delete_alert_style_' . $style_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized.', 'alerts-dlx' ) ) );
		}

		$post = get_post( $style_id );
		if ( ! $post || self::POST_TYPE !== $post->post_type ) {
			wp_send_json_error( array( 'message' => __( 'Alert Style not found.', 'alerts-dlx' ) ) );
		}

		$block_type = get_post_meta( $style_id, self::META_BLOCK_TYPE, true );
		wp_delete_post( $style_id, true );
		AlertStyleMerger::clear_style_cache( $style_id );

		wp_send_json_success(
			array(
				'styles' => self::return_styles_for_block_type( $block_type ),
			)
		);
	}

	/**
	 * AJAX: Get a single Alert Style.
	 */
	public function ajax_get_alert_style() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), 'alerts_dlx_get_alert_style' ) ) {
			wp_send_json_error( array( 'message' => __( 'Invalid nonce.', 'alerts-dlx' ) ) );
		}

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized.', 'alerts-dlx' ) ) );
		}

		$style_id = absint( filter_input( INPUT_POST, 'style_id', FILTER_DEFAULT, FILTER_VALIDATE_INT ) );
		if ( $style_id <= 0 ) {
			wp_send_json_error( array( 'message' => __( 'Invalid style ID.', 'alerts-dlx' ) ) );
		}

		$formatted = $this->format_style_post( get_post( $style_id ) );
		if ( null === $formatted ) {
			wp_send_json_error( array( 'message' => __( 'Alert Style not found.', 'alerts-dlx' ) ) );
		}

		wp_send_json_success(
			array(
				'style' => $formatted,
			)
		);
	}
}
