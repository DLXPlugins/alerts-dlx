=== Alerts DLX - Alert Box, Callout Box, and Notifications ===
Contributors: ronalfy
Tags: alert box, notifications, alerts, notify, blocks
Requires at least: 6.5
Tested up to: 6.9
Stable tag: 2.2.3
Requires PHP: 7.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Donate link: https://github.com/sponsors/DLXPlugins

A beautiful and easy to use alert and callout box, with support for blocks and shortcodes.

== Description ==

AlertsDLX offers beautifully styled alerts, callouts, and notification boxes for the Block Editor, Classic Editor, or anywhere blocks and shortcodes can go.

This plugin is perfect for adding alerts, callouts, and notifications to your site. It comes with four alert styles: Material, Bootstrap, Chakra, and Shoelace. Each alert style has its own unique look and feel.

Coupled with a free plugin like <a href="https://blockvisibilitywp.com/">Block Visibility</a>, your imagine can really go wild.

https://www.youtube.com/watch?v=7dKpw5uBi5o

> <strong>Alert Shortcodes are here!</strong> Create alert boxes from shortcodes. <a href="https://docs.dlxplugins.com/v/alertsdlx/shortcode-usage">See shortcode usage</a>.

> Check out the demo above for all alert types and variations.

Major features:

1. Four alert styles: Material, Bootstrap, Chakra, and Shoelace.
2. Use branded colors, or choose custom for your own styles.
3. Add your own SVG icons, or choose from the ones included.
4. Add dismissble alerts, and have it remember the user's choice.
5. Add an optional title, description, and button.

Quick Links:

* <a href="https://dlxplugins.com/plugins/alertsdlx/">AlertsDLX Home</a>
* <a href="https://docs.dlxplugins.com/v/alertsdlx/">AlertsDLX Documentation</a>
* <a href="https://docs.dlxplugins.com/v/alertsdlx/shortcode-usage">Shortcode Usage</a>
* <a href="https://dlxplugins.com/support/">AlertsDLX Support</a>

Blocks are styled with inspiration from:

* <a href="https://mui.com/material-ui/react-alert/">Material UI Alerts</a>
* <a href="https://chakra-ui.com/docs/components/alert">Chakra UI</a>
* <a href="https://getbootstrap.com/docs/5.0/components/alerts/">Bootstrap</a>.
* <a href="https://shoelace.style/">Shoelace</a>

Each Alert can have built-in icons or you can set your own with SVGs.

Icons included are from:

* <a href="https://fonts.google.com/icons">Google Fonts Material Icons</a>
* <a href="https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/icons/src">Chakra UI Icons</a> (GitHub)
* <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a>

Development:

Development happens on GitHub. Please <a href="https://github.com/dlxplugins/alerts-dlx">check out the GitHub code repository for AlertsDLX</a>.

== Installation ==

1. Search for AlertsDLX on the Add Plugins screen.
2. Install and activate.

> <a href="https://docs.dlxplugins.com/v/alertsdlx/">In-depth Documentation</a> - Please check out our thorough documentation ❤️️

== Frequently Asked Questions ==

= Does this work with the Classic Editor and Page Builders? =

Yes. AlertsDLX works with the Classic Editor <a href="https://docs.dlxplugins.com/v/alertsdlx/shortcode-usage">via its shortcode support</a>.

= Does this work with the Block Editor? =

Yes, AlertsDLX comes with four blocks, one for each style of alert (Bootstrap, Chakra, Material, and Shoelace).

= What alert styles does the plugin support? =

* <a href="https://mui.com/material-ui/react-alert/">Material UI</a>
* <a href="https://getbootstrap.com/docs/5.0/components/alerts/">Bootstrap</a>
* <a href="https://chakra-ui.com/docs/components/alert">Chakra UI</a>
* <a href="https://shoelace.style/">Shoelace</a>

= Can I customize the colors? =

Yes, you can choose custom colors via the shortcode or built-in blocks.

= How can I get help? =

Please leave a note on <a href="https://dlxplugins.com/support/">our support page</a>.

= Can I use my own icons? =

Yes. The icon picker allows you to enter an SVG. For the shortcode, you must supply your own SVG.


== Screenshots ==

1. Warning Alert and Options
2. Centered Warning Alert
3. Example Success Alert
4. Block Style Previews
5. Icon Selector
6. Font Size Option

== Changelog ==

= 2.2.3 =
* Released 2025-12-06
* Fixed shortcode CSS not loading on the frontend.

= 2.2.2 =
* Released 2025-12-05
* Fixed frontend rendering for those not using footer hooks.
* Fixed SVG default icon size, to prevent jumping when rendering.
* Fixed shortcode not rendering due to editorial blocks parameter.

= 2.2.0 =
* Released 2025-11-13
* Consolidated light and dark stylesheets, saving over 200kb in size.
* Tested with WP 6.9.

= 2.1.2 =
* Released 2025-09-06
* Bug fix: several fonts were out of proportion, so this has been addressed with this update.
* Bug fix: several custom colors were missing for button styles.
* Bug fix: section and font styles were being overridden by themes causing the boxes to look warped.

= 2.1.0 =
* Released 2025-08-10
* New feature: Place blocks in "Editorial Only" mode so they only show up in the block editor and not the frontend.
* New feature: Thenme colors are now included when choosing custom colors.
* New feature: Added block manifests to speed up block loading time and performance.

= 2.0.2 =
* Released 2024-08-23
* Some minor copy updates.

= 2.0.1 =
* Released 2024-08-22
* Fixing Shoelace dark mode styles not aligning properly.
* Fixed Chakra UI styles where info icon was the wrong color.

= 2.0.0 =
* Released 2024-07-21
* New feature: Added a close button and dismissible alerts. You can set an expiration to hide the alert for a certain time after user action.
* New feature: Advanced setting in the blocks to allow for custom inner blocks.
* New feature: Custom colors. Set custom colors for eåçh alert type and variation.
* Block tweaks: The options for showing sections in the block is now near the top and open by default.

= 1.4.0 =
* Released 2024-03-12
* Reworked markup for better style compatibility and less conflicts.
* Testing with WP 6.5.

= 1.3.5 =
* Released 2023-12-09
* Selecting block styles resulted in a JS error. This has been fixed.

= 1.3.1 =
* Released 2023-10-21
* Several performance improvements to the frontend. Previously the frontend was loading all styles and scripts for all alert types. Now it only loads the styles and scripts for the alert type(s) being used on the page.

= 1.3.0 =
* Released 2023-09-23
* Added support for shortcodes.
* <a href="https://dlxplugins.com/announcements/alertsdlx-1-3-0-includes-shortcode-support/">Read the announcement post</a>.
* <a href="https://docs.dlxplugins.com/v/alertsdlx/shortcode-usage">See shortcode usage</a>.

= 1.2.5 =
* Released 2023-09-10
* Optimizing scripts and styles to only load when needed to prevent unnecessary style loading.

= 1.2.1 =
* Released 2023-04-16
* Hot fix for outputting the block description.

= 1.2.0 =
* Released 2023-04-16
* Added Shoelace alert styles.
* Changing internal structure to innerBlocks.

= 1.1.0 =
* Released 2022-10-01
* Added Darkmode for Chakra and Material alert boxes.

= 1.0.5 =
* Released 2022-09-12
* Fixed "error" alert styles in the block editor/frontend.
* Updated SVG icons for .org.

= 1.0.1 =
* Released 2022-09-11
* Added transforms to the blocks so that they are interchangeable.

= 1.0.0 =
* Released 2022-09-09
* Initial release.

== Upgrade Notice ==

= 2.2.3 =
Fixing shortcode CSS not loading on the frontend.