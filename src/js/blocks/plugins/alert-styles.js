/**
 * Alert Styles plugin.
 *
 * Hooks into AlertsDLX blocks via a higher-order component to add the Alert
 * Styles panel in the block inspector Styles tab, matching custom-colors.js.
 *
 * @since 2.4.0
 */

import { useState, useEffect } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import AlertStylePanel from '../components/AlertStyles/AlertStylePanel';
import { getAlertStyle } from '../alert-styles/api';
import { resolveAttributes } from '../alert-styles/mergeAttributes';
import { getStripKeys } from '../alert-styles/schema';

const ALERT_BLOCK_NAMES = [
	'mediaron/alerts-dlx-bootstrap',
	'mediaron/alerts-dlx-chakra',
	'mediaron/alerts-dlx-material',
	'mediaron/alerts-dlx-shoelace',
];

/**
 * Higher-order component that merges linked Alert Style attributes for preview
 * and adds the Alert Styles panel to the inspector Styles tab.
 *
 * @param {Function} BlockEdit Original BlockEdit component.
 * @return {Function}
 */
const withAlertStylesPanel = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( ! ALERT_BLOCK_NAMES.includes( props.name ) ) {
			return <BlockEdit { ...props } />;
		}

		const styleId = parseInt( props.attributes.alertStyleId, 10 ) || 0;
		const [ linkedStyle, setLinkedStyle ] = useState( null );

		useEffect( () => {
			if ( styleId <= 0 ) {
				setLinkedStyle( null );
				return;
			}

			let cancelled = false;

			getAlertStyle( styleId )
				.then( ( style ) => {
					if ( ! cancelled ) {
						setLinkedStyle( style );
					}
				} )
				.catch( () => {
					if ( ! cancelled ) {
						setLinkedStyle( null );
					}
				} );

			return () => {
				cancelled = true;
			};
		}, [ styleId ] );

		const blockProps = { ...props };
		if ( styleId > 0 && linkedStyle ) {
			blockProps.attributes = resolveAttributes( props.attributes, linkedStyle );
		}

		return (
			<>
				<BlockEdit { ...blockProps } />
				<AlertStylePanel
					attributes={ props.attributes }
					setAttributes={ props.setAttributes }
				/>
			</>
		);
	};
}, 'withAlertStylesPanel' );

/**
 * Strip style-managed keys from serialized block attributes when linked.
 */
addFilter(
	'blocks.getBlockAttributes',
	'alerts-dlx/strip-style-attrs',
	( blockAttributes, blockType ) => {
		if ( ! ALERT_BLOCK_NAMES.includes( blockType.name ) ) {
			return blockAttributes;
		}

		const styleId = parseInt( blockAttributes.alertStyleId, 10 ) || 0;
		if ( styleId <= 0 ) {
			return blockAttributes;
		}

		const blockGroup = blockAttributes.alertGroup;
		const hasCustomIcon = !! blockAttributes.hasCustomIcon;
		const stripKeys = getStripKeys( blockGroup, hasCustomIcon );

		const cleaned = { ...blockAttributes };
		stripKeys.forEach( ( key ) => {
			delete cleaned[ key ];
		} );

		return cleaned;
	}
);

addFilter(
	'editor.BlockEdit',
	'alerts-dlx/alert-styles-panel',
	withAlertStylesPanel
);
