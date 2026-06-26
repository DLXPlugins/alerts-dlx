/**
 * Client-side Alert Style attribute merger.
 */

import {
	ICON_KEYS,
	INSTANCE_KEYS,
	getAllowedKeys,
	normalizeBlockType,
} from './schema';

/**
 * Merge style settings into block attributes.
 *
 * @param {Object} attributes Block attributes.
 * @param {Object} style Style record with settings and block_type.
 * @return {Object}
 */
export function mergeAttributes( attributes, style ) {
	if ( ! style?.settings ) {
		return { ...attributes };
	}

	const blockType = normalizeBlockType( attributes.alertGroup );
	if ( ! blockType || blockType !== style.block_type ) {
		return { ...attributes };
	}

	const merged = { ...attributes };
	const allowedKeys = getAllowedKeys( blockType );
	const hasCustomIcon = !! attributes.hasCustomIcon;

	allowedKeys.forEach( ( key ) => {
		if ( INSTANCE_KEYS.includes( key ) ) {
			return;
		}
		if ( ICON_KEYS.includes( key ) && hasCustomIcon ) {
			return;
		}
		if ( Object.prototype.hasOwnProperty.call( style.settings, key ) ) {
			merged[ key ] = style.settings[ key ];
		}
	} );

	if ( ! hasCustomIcon ) {
		ICON_KEYS.forEach( ( key ) => {
			if ( Object.prototype.hasOwnProperty.call( style.settings, key ) ) {
				merged[ key ] = style.settings[ key ];
			}
		} );
		if ( style.settings.imageUrl ) {
			merged.imageUrl = style.settings.imageUrl;
		}
	}

	return merged;
}

/**
 * Resolve attributes when alertStyleId is set.
 *
 * @param {Object} attributes Block attributes.
 * @param {Object|null} style Loaded style record.
 * @return {Object}
 */
export function resolveAttributes( attributes, style ) {
	const styleId = parseInt( attributes.alertStyleId, 10 ) || 0;
	if ( styleId <= 0 || ! style ) {
		return { ...attributes };
	}
	return mergeAttributes( attributes, style );
}

/**
 * Get attributes for unlinking from a style.
 *
 * @param {Object} attributes Block attributes.
 * @param {Object|null} style Loaded style record.
 * @return {Object}
 */
export function getDetachAttributes( attributes, style ) {
	const resolved = resolveAttributes( attributes, style );
	return {
		...resolved,
		alertStyleId: 0,
	};
}

/**
 * Build attribute updates for applying a style.
 *
 * @param {number} styleId Style post ID.
 * @return {Object}
 */
export function getApplyStyleUpdates( styleId ) {
	return {
		alertStyleId: styleId,
		hasCustomIcon: false,
	};
}

/**
 * Build attribute updates for reverting to style icon.
 *
 * @return {Object}
 */
export function getUseStyleIconUpdates() {
	return {
		hasCustomIcon: false,
		icon: undefined,
		iconSource: undefined,
		imageId: undefined,
		imageUrl: undefined,
	};
}

/**
 * Build attribute updates when user customizes icon.
 *
 * @param {Object} iconUpdates Icon attribute updates.
 * @return {Object}
 */
export function getCustomIconUpdates( iconUpdates ) {
	return {
		...iconUpdates,
		hasCustomIcon: true,
	};
}
