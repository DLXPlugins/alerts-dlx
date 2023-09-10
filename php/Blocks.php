<?php
/**
 * Set up the blocks and their attributes.
 *
 * @package AlertsDLX
 */

namespace DLXPlugins\AlertsDLX;

/**
 * Helper class for registering blocks.
 */
class Blocks {

	/**
	 * Main class runner.
	 *
	 * @return Blocks.
	 */
	public static function run() {
		$self = new self();
		add_action( 'init', array( $self, 'init' ) );
		return $self;
	}

	/**
	 * Init action callback.
	 */
	public function init() {

		register_block_type(
			Functions::get_plugin_dir( 'build/js/blocks/material/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend' ),
			)
		);

		register_block_type(
			Functions::get_plugin_dir( 'build/js/blocks/chakraui/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend' ),
			)
		);

		register_block_type(
			Functions::get_plugin_dir( 'build/js/blocks/bootstrap/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend' ),
			)
		);

		register_block_type(
			Functions::get_plugin_dir( 'build/js/blocks/shoelace/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend' ),
			)
		);

		// Enqueue block assets.
		add_action( 'enqueue_block_assets', array( $this, 'register_block_editor_scripts' ) );

		// Add alertsdlx block category.
		add_filter(
			'block_categories_all',
			function( $categories ) {
				return array_merge(
					$categories,
					array(
						array(
							'slug'  => 'alertsdlx',
							'title' => __( 'AlertsDLX', 'alerts-dlx' ),
						),
					)
				);
			}
		);
	}

	/**
	 * Output the front-end structure.
	 *
	 * @param array  $attributes Block editor attributes.
	 * @param string $content   Current content.
	 */
	public function frontend( array $attributes, string $content ) {

		$unique_id               = Functions::sanitize_attribute( $attributes, 'uniqueId', 'text' );
		$alert_group             = Functions::sanitize_attribute( $attributes, 'alertGroup', 'text' );
		$alert_type              = Functions::sanitize_attribute( $attributes, 'alertType', 'text' );
		$align                   = Functions::sanitize_attribute( $attributes, 'align', 'text' );
		$alert_title             = Functions::sanitize_attribute( $attributes, 'alertTitle', 'text' );
		$alert_description       = Functions::sanitize_attribute( $attributes, 'alertDescription', 'raw' );
		$button_enabled          = Functions::sanitize_attribute( $attributes, 'buttonEnabled', 'boolean' );
		$maximum_width_unit      = Functions::sanitize_attribute( $attributes, 'maximumWidthUnit', 'text' );
		$maximum_width           = Functions::sanitize_attribute( $attributes, 'maximumWidth', 'integer' );
		$icon                    = Functions::sanitize_attribute( $attributes, 'icon', 'raw' );
		$description_enabled     = Functions::sanitize_attribute( $attributes, 'descriptionEnabled', 'boolean' );
		$title_enabled           = Functions::sanitize_attribute( $attributes, 'titleEnabled', 'boolean' );
		$icon_enabled            = Functions::sanitize_attribute( $attributes, 'iconEnabled', 'boolean' );
		$base_font_size          = Functions::sanitize_attribute( $attributes, 'baseFontSize', 'integer' );
		$icon_vertical_alignment = Functions::sanitize_attribute( $attributes, 'iconVerticalAlignment', 'text' );
		$variant                 = Functions::sanitize_attribute( $attributes, 'variant', 'text' );
		$mode                    = Functions::sanitize_attribute( $attributes, 'mode', 'text' );
		$button_text             = Functions::sanitize_attribute( $attributes, 'buttonText', 'text' );
		$button_url              = Functions::sanitize_attribute( $attributes, 'buttonUrl', 'text' );
		$button_target           = Functions::sanitize_attribute( $attributes, 'buttonTarget', 'boolean' );
		$button_rel_no_follow    = Functions::sanitize_attribute( $attributes, 'buttonRelNoFollow', 'boolean' );
		$button_rel_sponsored    = Functions::sanitize_attribute( $attributes, 'buttonRelSponsored', 'boolean' );
		$icon_appearance         = Functions::sanitize_attribute( $attributes, 'iconAppearance', 'text' );

		ob_start();

		// Add base classes to figure element.
		$figure_classes = array(
			'alerts-dlx-alert',
			'alerts-dlx-' . $alert_group,
		);
		if ( $icon_enabled ) {
			$figure_classes[] = 'alerts-dlx-has-icon';
		}
		if ( $description_enabled ) {
			$figure_classes[] = 'alerts-dlx-has-description';
		}
		if ( $button_enabled ) {
			$figure_classes[] = 'alerts-dlx-has-button';
		}

		// Add base classes to container element.
		$container_classes = array(
			'alerts-dlx',
			'template-' . $alert_group,
			'is-style-' . $alert_type,
			'is-appearance-' . $variant,
			'icon-vertical-align-' . $icon_vertical_alignment,
			'align' . $align,
		);
		if ( 'dark' === $mode ) {
			$container_classes[] = 'is-dark-mode';
		}
		if ( 'rounded' === $icon_appearance ) {
			$container_classes[] = 'icon-appearance-rounded';
		}
		?>
		<!-- begin AlertsDLX output -->
		<style>
			#<?php echo esc_html( $unique_id ); ?> {
				max-width: <?php echo esc_html( $maximum_width ); ?><?php echo esc_html( $maximum_width_unit ); ?>;
				font-size: <?php echo esc_html( $base_font_size ); ?>px;
				font-size: clamp(0.75rem, 2vw + 1rem, <?php echo esc_html( $base_font_size ); ?>px);
			}
		</style>
		<div
			class="<?php echo esc_html( implode( ' ', $container_classes ) ); ?>"
		>
			<figure
				role="alert"
				class="<?php echo esc_attr( implode( ' ', $figure_classes ) ); ?>"
				id="<?php echo esc_attr( $unique_id ); ?>"
			>
				<?php
				if ( $icon_enabled ) {
					?>
					<div class="alerts-dlx-icon alerts-dlx-icon-frontend" aria-hidden="true">
						<div class="alerts-dlx-icon-preview">
							<?php echo wp_kses( $icon, Functions::get_kses_allowed_html() ); ?>
						</div>
					</div>
					<?php
				}
				?>
				<figcaption>
					<?php
					if ( $title_enabled ) {
						?>
						<h2 class="alerts-dlx-title">
							<?php echo esc_html( $alert_title ); ?>
						</h2>
						<?php
					}
					?>
					<div class="alerts-dlx-content-wrapper">
						<?php
						if ( $description_enabled ) {
							?>
							<div class="alerts-dlx-content">
								<?php
								if ( ! empty( $alert_description ) ) {
									echo wp_kses_post( apply_filters( 'alerts_dlx_the_content', $alert_description ) );
								} else {
									echo wp_kses_post( apply_filters( 'alerts_dlx_the_content', $content ) );
								}
								?>
							</div>
							<?php
						}
						?>
						<?php
						if ( $button_enabled && ! empty( $button_text ) && ! empty( $button_url ) ) {
							?>
							<div
								class="alerts-dlx-button-wrapper"
								style="display: inline-flex;"
							>
								<a
									class="alerts-dlx-button button-reset"
									href="<?php echo esc_url( $button_url ); ?>"
									<?php
									if ( $button_target ) {
										?>
										target="_blank"
										<?php
									}
									?>
									<?php
									$rel = array();
									if ( $button_rel_no_follow ) {
										$rel[] = 'nofollow';
									}
									if ( $button_rel_sponsored ) {
										$rel[] = 'sponsored';
									}
									if ( ! empty( $rel ) ) {
										?>
										rel="<?php echo esc_attr( implode( ' ', $rel ) ); ?>"
										<?php
									}
									?>
								><?php echo esc_html( $button_text ); ?></a>
							</div>
							<?php
						}
						?>
					</div>
				</figcaption>
			</figure>
		</div>
		<!-- end AlertsDLX output -->
		<?php
		return ob_get_clean();
	}

	/**
	 * Register the block editor script with localized vars.
	 */
	public function register_block_editor_scripts() {

		// Register styles here because array in block.json fails when using array of styles (enqueues wrong script).
		wp_register_style(
			'alerts-dlx-block-editor',
			Functions::get_plugin_url( 'dist/alerts-dlx-block-editor.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'alerts-dlx-block-editor-styles',
			Functions::get_plugin_url( 'build/alerts-dlx.css' ),
			array( 'alerts-dlx-block-editor' ),
			Functions::get_plugin_version(),
			'all'
		);

		wp_register_script(
			'alerts-dlx-block',
			Functions::get_plugin_url( 'build/alerts-dlx.js' ),
			array(),
			Functions::get_plugin_version(),
			true
		);

		wp_localize_script(
			'alerts-dlx-block',
			'alertsDlxBlock',
			array(
				'font_stylesheet' => Functions::get_plugin_url( 'dist/alerts-dlx-gfont-lato.css' ),
			)
		);

		wp_register_style(
			'alerts-dlx-bootstrap-light-css',
			Functions::get_plugin_url( 'dist/alerts-dlx-bootstrap-light.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'alerts-dlx-bootstrap-dark-css',
			Functions::get_plugin_url( 'dist/alerts-dlx-bootstrap-dark.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'alerts-dlx-chakra-light-css',
			Functions::get_plugin_url( 'dist/alerts-dlx-chakra-light.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'alerts-dlx-chakra-dark-css',
			Functions::get_plugin_url( 'dist/alerts-dlx-chakra-dark.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'alerts-dlx-material-light-css',
			Functions::get_plugin_url( 'dist/alerts-dlx-material-light.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'alerts-dlx-material-dark-css',
			Functions::get_plugin_url( 'dist/alerts-dlx-material-dark.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'alerts-dlx-shoelace-light-css',
			Functions::get_plugin_url( 'dist/alerts-dlx-shoelace-light.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'alerts-dlx-shoelace-dark-css',
			Functions::get_plugin_url( 'dist/alerts-dlx-shoelace-dark.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'alerts-dlx-block-editor-styles-lato',
			Functions::get_plugin_url( 'dist/alerts-dlx-gfont-lato.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
	}
}
