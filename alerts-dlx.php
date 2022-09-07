<?php
/**
 * Plugin Name:       AlertsDLX
 * Plugin URI:        https://dlxplugins.com/plugins/alertsdlx/
 * Description:       An alert and notification block inspired by Bootstrap, Material UI, and Chakra UI.
 * Version:           0.0.7
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            DLX Plugins
 * Author URI:        https://dlxplugins.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       alerts-dlx
 * Domain Path:       /languages
 *
 * @package AlertsDLX
 */

namespace DLXPlugins\AlertsDLX;

define( 'ALERTS_DLX_VERSION', '1.0.37' );
define( 'ALERTS_DLX_FILE', __FILE__ );

// Support for site-level autoloading.
if ( file_exists( __DIR__ . '/lib/autoload.php' ) ) {
	require_once __DIR__ . '/lib/autoload.php';
}

/**
 * AlertsDLX class.
 */
class AlertsDLX {

	/**
	 * Holds the class instance.
	 *
	 * @var AlertsDLX $instance
	 */
	private static $instance = null;

	/**
	 * Return an instance of the class
	 *
	 * Return an instance of the ReflectorDLX Class.
	 *
	 * @since 1.0.0
	 *
	 * @return AlertsDLX class instance.
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Class initializer.
	 */
	public function plugins_loaded() {
		load_plugin_textdomain(
			'alerts-dlx',
			false,
			basename( dirname( __FILE__ ) ) . '/languages'
		);

		Blocks::run();
		// Ajax::run();

		// Admin\Plugin_Settings_Links::run();
		// Admin\Register_Menu::run();

		// add_action( 'init', array( $this, 'init' ) );

		/**
		 * When AlertsDLX can be extended.
		 *
		 * Filter when AlertsDLX can be extended.
		 *
		 * @since 1.0.0
		 */
		do_action( 'alerts_dlx_loaded' );

		// Init all the core themes.
		// Themes\Themes_Init::run();
	}

	/**
	 * Init all the things.
	 */
	public function init() {

		// Setup EDD licensing.
		// $license     = \MediaRonLLC\QuotesDLX\Options_License::get_options();
		// $license_key = $license['license_key'] ?? '';
		// $edd_updater = new \MediaRonLLC\QuotesDLX\Admin\Plugin_Updater(
		// 'https://dlxplugins.com',
		// __FILE__,
		// array(
		// 'version' => QUOTES_DLX_VERSION,
		// 'license' => $license_key,
		// 'item_id' => 676,
		// 'author'  => 'DLX Plugins',
		// 'beta'    => false,
		// )
		// );
	}
}

add_action(
	'plugins_loaded',
	function() {
		$alerts_dlx = AlertsDLX::get_instance();
		$alerts_dlx->plugins_loaded();
	}
);

// Custom the_content filter for output and no conflicts.
global $wp_embed;
add_filter( 'alerts_dlx_the_content', array( $wp_embed, 'run_shortcode' ), 8 );
add_filter( 'alerts_dlx_the_content', array( $wp_embed, 'autoembed' ), 8 );
add_filter( 'alerts_dlx_the_content', 'wptexturize' );
add_filter( 'alerts_dlx_the_content', 'convert_chars' );
add_filter( 'alerts_dlx_the_content', 'wpautop' );
add_filter( 'alerts_dlx_the_content', 'shortcode_unautop' );
add_filter( 'alerts_dlx_the_content', 'do_shortcode' );
