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

		// Enqueue general front-end style.
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );

		// Enqueue block assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_block_editor_scripts' ) );
	}

	/**
	 * Output the front-end structure.
	 *
	 * @param array  $attributes Block editor attributes.
	 * @param string $content   Current content.
	 */
	public function frontend( array $attributes, string $content ) {
		return 'hi';
	}

	/**
	 * Register front-end scripts/styles.
	 */
	public function register_frontend_scripts() {

		wp_register_style(
			'alerts-dlx-frontend',
			Functions::get_plugin_url( 'dist/quotes-dlx-frontend.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
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
	}
}
