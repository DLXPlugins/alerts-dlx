/**
 * Alert Style schema mirror (PHP AlertStyleSchema is authoritative).
 */

export const BLOCK_TYPES = [ 'bootstrap', 'chakra', 'material', 'shoelace' ];

export const INSTANCE_KEYS = [
	'uniqueId',
	'alertTitle',
	'alertDescription',
	'buttonText',
	'buttonUrl',
	'buttonTarget',
	'buttonRelNoFollow',
	'buttonRelSponsored',
	'isBlockEditorialOnly',
	'isBlockReadOnly',
	'hasCustomIcon',
	'alertStyleId',
	'alertGroup',
	'imageUrl',
];

export const ICON_KEYS = [ 'icon', 'iconSource', 'imageId' ];

const SHARED_STYLE_KEYS = [
	'alertType',
	'variant',
	'mode',
	'align',
	'maximumWidth',
	'maximumWidthUnit',
	'baseFontSize',
	'iconVerticalAlignment',
	'colorPrimary',
	'colorBorder',
	'colorAccent',
	'colorAlt',
	'colorAltHover',
	'colorAltText',
	'colorAltTextHover',
	'colorBold',
	'colorLight',
	'iconEnabled',
	'titleEnabled',
	'descriptionEnabled',
	'buttonEnabled',
	'closeButtonEnabled',
	'closeButtonExpiration',
	'icon',
	'iconSource',
	'imageId',
];

const THEME_SPECIFIC_KEYS = {
	shoelace: [ 'iconAppearance' ],
	material: [ 'enableDropShadow' ],
};

const ALERT_TYPE_ENUM = {
	bootstrap: [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'custom' ],
	shoelace: [ 'primary', 'success', 'neutral', 'warning', 'danger', 'custom' ],
	chakra: [ 'success', 'info', 'warning', 'error', 'custom' ],
	material: [ 'success', 'info', 'warning', 'error', 'custom' ],
};

const VARIANT_ENUM = {
	bootstrap: [ 'default', 'centered' ],
	chakra: [ 'subtle', 'solid', 'left-accent', 'top-accent', 'centered' ],
	material: [ 'default', 'outlined', 'filled', 'centered' ],
	shoelace: [ 'default', 'left-accent', 'top-accent', 'centered', 'solid' ],
};

/**
 * Normalize block type slug.
 *
 * @param {string} blockType Block type slug.
 * @return {string|null}
 */
export function normalizeBlockType( blockType ) {
	if ( ! blockType ) {
		return null;
	}
	const normalized = String( blockType ).toLowerCase();
	return BLOCK_TYPES.includes( normalized ) ? normalized : null;
}

/**
 * Get allowed style keys for a block type.
 *
 * @param {string} blockType Block type slug.
 * @return {string[]}
 */
export function getAllowedKeys( blockType ) {
	const normalized = normalizeBlockType( blockType );
	if ( ! normalized ) {
		return [];
	}
	const themeKeys = THEME_SPECIFIC_KEYS[ normalized ] || [];
	return [ ...new Set( [ ...SHARED_STYLE_KEYS, ...themeKeys ] ) ];
}

/**
 * Get keys to strip from serialized block when linked to a style.
 *
 * @param {string} blockType Block type slug.
 * @param {boolean} hasCustomIcon Whether block has a custom icon.
 * @return {string[]}
 */
export function getStripKeys( blockType, hasCustomIcon = false ) {
	const allowed = getAllowedKeys( blockType );
	if ( hasCustomIcon ) {
		return allowed.filter( ( key ) => ! ICON_KEYS.includes( key ) );
	}
	return allowed;
}

/**
 * Extract saveable style settings from block attributes.
 *
 * @param {string} blockType Block type slug.
 * @param {Object} attributes Block attributes.
 * @return {Object}
 */
export function extractStyleSettingsFromAttributes( blockType, attributes ) {
	const allowed = getAllowedKeys( blockType );
	const extracted = {};
	allowed.forEach( ( key ) => {
		if ( Object.prototype.hasOwnProperty.call( attributes, key ) ) {
			extracted[ key ] = attributes[ key ];
		}
	} );
	return extracted;
}

/**
 * Get alert type enum for block type.
 *
 * @param {string} blockType Block type slug.
 * @return {string[]}
 */
export function getAlertTypeEnum( blockType ) {
	return ALERT_TYPE_ENUM[ blockType ] || [];
}

/**
 * Get variant enum for block type.
 *
 * @param {string} blockType Block type slug.
 * @return {string[]}
 */
export function getVariantEnum( blockType ) {
	return VARIANT_ENUM[ blockType ] || [];
}
