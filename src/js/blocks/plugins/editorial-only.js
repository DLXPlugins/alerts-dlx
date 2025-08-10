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
 *
 * @param {Function} BlockEdit - The original block edit component.
 * @return {Function} Enhanced block edit component with our custom panel.
 */
const withAlertsPanel = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		// Only show our panel when the block is selected in the editor.
		if ( ! props.isSelected ) {
			return <BlockEdit { ...props } />;
		}

		// Make sure we only show this panel for admins and editors.
		if ( ! alertsDlxBlock.isAdmin || ! alertsDlxBlock.isEditor ) {
			return <BlockEdit { ...props } />;
		}

		const {
			isBlockEditorialOnly,
			isBlockReadOnly,
		} = props.attributes;

		// List of AlertsDLX block namespaces.
		const alertsDLXBlockNamespaces = [
			'mediaron/alerts-dlx-bootstrap',
			'mediaron/alerts-dlx-chakra',
			'mediaron/alerts-dlx-material',
			'mediaron/alerts-dlx-shoelace',
		];

		// Check if this is an AlertsDLX block.
		const isAlertsDLXBlock = props.name && alertsDLXBlockNamespaces.includes( props.name );

		// If it's not an AlertsDLX block, return the original component without our panel.
		if ( ! isAlertsDLXBlock ) {
			return <BlockEdit { ...props } />;
		}

		// Return the original block edit component wrapped with our custom panel for AlertsDLX blocks.
		return (
			<Fragment>
				<BlockEdit { ...props } />
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
							help={ __( 'This block will only be visible to viewers of this post in the editor. It will not be visible on the front end.', 'alerts-dlx' ) }
						/>
						{
							isBlockEditorialOnly && (
								<ToggleControl
									label={ __( 'Make This Block Read Only', 'alerts-dlx' ) }
									checked={ isBlockReadOnly }
									onChange={ ( value ) => {
										props.setAttributes( { isBlockReadOnly: value } );
									} }
									help={ __( 'This block will not be editable by the user. It will behave as a normal alert in the editor.', 'alerts-dlx' ) }
								/>
							)
						}
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withAlertsPanel' );

/**
 * Apply our higher-order component to all blocks in the editor.
 *
 * This filter runs on every block edit component, allowing us to
 * inject our custom panel into the InspectorControls sidebar.
 */
addFilter(
	'editor.BlockEdit',
	'alerts-dlx/with-alerts-panel',
	withAlertsPanel
);
