/**
 * Alert block style helpers for toolbar style picker.
 */

import { getBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { openAlertParentInspectorTab } from './alert-parent-inspector';

/**
 * Read preset and custom style options from block registration.
 *
 * @param {string} blockName Block name.
 * @return {{ presets: Object[], hasCustom: boolean, customLabel: string }}
 */
export function getAlertStyleOptions( blockName ) {
	const blockStyles = getBlockType( blockName )?.styles ?? [];
	const presets = blockStyles.filter( ( style ) => style.name !== 'custom' );
	const customFromMeta = blockStyles.find( ( style ) => style.name === 'custom' );

	return {
		presets,
		hasCustom: true,
		customLabel: customFromMeta?.label ?? __( 'Custom', 'alerts-dlx' ),
	};
}

/**
 * Apply an alert style to block attributes.
 *
 * @param {Object}   params              Parameters.
 * @param {string}   params.className    Current block className.
 * @param {string}   params.styleName    Style slug to apply.
 * @param {Function} params.setAttributes Set attributes callback.
 */
export function applyAlertStyle( { className, styleName, setAttributes } ) {
	const trimmedClassName = ( className || '' )
		.replace( /\bis-style-\S+/g, '' )
		.trim()
		.replace( /\s+/g, ' ' );

	const newClassName = trimmedClassName
		? `${ trimmedClassName } is-style-${ styleName }`
		: `is-style-${ styleName }`;

	setAttributes( {
		alertType: styleName,
		className: newClassName,
	} );
}

/**
 * Open an alert block inspector tab.
 *
 * @param {string} clientId Block client ID.
 * @param {string} tab      Inspector tab: 'settings' or 'styles'.
 */
export function openAlertInspectorTab( clientId, tab ) {
	openAlertParentInspectorTab( clientId, tab );
}

/**
 * Get the display label for the current alert style.
 *
 * @param {string}   alertType   Current alert type slug.
 * @param {Object[]} presets    Preset style options.
 * @param {string}   customLabel Custom style label.
 * @return {string}
 */
export function getCurrentStyleLabel( alertType, presets, customLabel ) {
	if ( 'custom' === alertType ) {
		return customLabel;
	}

	const match = presets.find( ( style ) => style.name === alertType );
	return match?.label ?? alertType;
}
