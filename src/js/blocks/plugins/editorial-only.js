/**
 * AlertsDLX Admin-Only Plugin
 *
 * This plugin hooks into AlertsDLX Gutenberg blocks to add a custom panel
 * that only appears in the block editor (admin-side). It uses WordPress's
 * higher-order component pattern to wrap block edit functions and filters
 * to only affect blocks that are part of the AlertsDLX plugin.
 *
 * @since 1.0.0
 */

import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Higher-order component that wraps block edit functions to add our custom panel.
 *
 * This HOC intercepts the block edit component and conditionally renders
 * our custom InspectorControls panel when the block is selected.
 * It also adds CSS classes to the block wrapper for editorial-only and read-only blocks.
 *
 * @param {Function} BlockEdit - The original block edit component.
 * @return {Function} Enhanced block edit component with our custom panel and CSS classes.
 */
const withAlertsPanel = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		// List of AlertsDLX block namespaces.
		const alertsDLXBlockNamespaces = [
			'mediaron/alerts-dlx-bootstrap',
			'mediaron/alerts-dlx-chakra',
			'mediaron/alerts-dlx-material',
			'mediaron/alerts-dlx-shoelace',
		];

		// Check if this is an AlertsDLX block.
		const isAlertsDLXBlock =
			props.name && alertsDLXBlockNamespaces.includes( props.name );

		// If it's not an AlertsDLX block, return the original component without our panel.
		if ( ! isAlertsDLXBlock ) {
			return <BlockEdit { ...props } />;
		}

		const { isBlockEditorialOnly, isBlockReadOnly } = props.attributes;

		// Create the block content with or without the panel.
		let blockContent = <BlockEdit { ...props } />;

		// Only show our panel when the block is selected in the editor and user has permissions.
		if ( alertsDlxBlock.isAdmin && alertsDlxBlock.isEditor ) {
			blockContent = (
				<Fragment>
					<BlockEdit { ...props } />
					<style>
						{
							`
								.alerts-dlx-editorial-only:before {
									content: '${ __( 'Editorial Only', 'alerts-dlx' ) }';
									position: absolute;
									top: 0px;
									left: 0px;
									display: inline-block;
									padding: 4px 6px;
									font-size: 14px;
									font-weight: 600;
									color: #333;
									line-height: 1.5;
									z-index: 1;
									background: #ff9800;
								}
							`
						}
					</style>
					<InspectorControls>
						<PanelBody
							title={ __( 'Editorial Options', 'alerts-dlx' ) }
							initialOpen={ false }
							className="alerts-dlx-panel"
						>
							<ToggleControl
								label={ __( 'Make This Block Editorial Only', 'alerts-dlx' ) }
								checked={ isBlockEditorialOnly }
								onChange={ ( value ) => {
									props.setAttributes( { isBlockEditorialOnly: value } );
								} }
								help={ __(
									'This block will only be visible to viewers of this post in the editor. It will not be visible on the front end.',
									'alerts-dlx'
								) }
							/>
							{ isBlockEditorialOnly && (
								<ToggleControl
									label={ __( 'Make This Block Read Only', 'alerts-dlx' ) }
									checked={ isBlockReadOnly }
									onChange={ ( value ) => {
										props.setAttributes( { isBlockReadOnly: value } );
									} }
									help={ __(
										'This block will not be editable by the user. It will behave as a normal alert in the editor.',
										'alerts-dlx'
									) }
								/>
							) }
						</PanelBody>
					</InspectorControls>
				</Fragment>
			);
		}

		return blockContent;
	};
}, 'withAlertsPanel' );

/**
 * Apply our higher-order component to all blocks in the editor.
 *
 * This filter runs on every block edit component, allowing us to
 * inject our custom panel into the InspectorControls sidebar and
 * add CSS classes for editorial-only and read-only blocks.
 */
addFilter( 'editor.BlockEdit', 'alerts-dlx/with-alerts-panel', withAlertsPanel );

/**
 * Add CSS classes to the block wrapper for editorial-only and read-only blocks.
 *
 * @param {Object} blockClasses - The block classes.
 * @param {Object} attributes   - The block attributes.
 *
 * @return {Object} The block classes.
 */
addFilter(
	'alerts-dlx-block-classes',
	'alerts-dlx/with-alerts-panel',
	( blockClasses, attributes ) => {
		return {
			...blockClasses,
			'alerts-dlx-editorial-only': attributes.isBlockEditorialOnly,
			'alerts-dlx-read-only': attributes.isBlockReadOnly,
		};
	}
);
