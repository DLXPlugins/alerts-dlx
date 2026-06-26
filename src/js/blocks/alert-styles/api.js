/**
 * Alert Styles AJAX API helper.
 */

/**
 * Send an Alert Styles AJAX command.
 *
 * @param {string} action AJAX action name.
 * @param {Object} data Form data fields.
 * @return {Promise<Object>}
 */
export async function sendAlertStyleCommand( action, data = {} ) {
	const formData = new FormData();
	formData.append( 'action', action );

	Object.entries( data ).forEach( ( [ key, value ] ) => {
		if ( undefined !== value && null !== value ) {
			formData.append( key, value );
		}
	} );

	const response = await fetch( ajaxurl, { // eslint-disable-line no-undef
		method: 'POST',
		body: formData,
		headers: {
			Accept: 'application/json',
		},
	} );

	const json = await response.json();
	if ( ! json.success ) {
		throw new Error( json.data?.message || 'Request failed.' );
	}

	return json.data;
}

/**
 * Load Alert Styles for a block type.
 *
 * @param {string} blockType Block type slug.
 * @return {Promise<Object[]>}
 */
export async function loadAlertStyles( blockType ) {
	const data = await sendAlertStyleCommand( 'alerts_dlx_load_alert_styles', {
		nonce: alertsDlxBlock.alertStyles.loadNonce, // eslint-disable-line no-undef
		block_type: blockType,
	} );
	return data.styles || [];
}

/**
 * Get a single Alert Style.
 *
 * @param {number} styleId Style post ID.
 * @return {Promise<Object>}
 */
export async function getAlertStyle( styleId ) {
	const data = await sendAlertStyleCommand( 'alerts_dlx_get_alert_style', {
		nonce: alertsDlxBlock.alertStyles.getNonce, // eslint-disable-line no-undef
		style_id: styleId,
	} );
	return data.style;
}

/**
 * Save a new Alert Style.
 *
 * @param {string} blockType Block type slug.
 * @param {string} title Style title.
 * @param {Object} settings Style settings.
 * @return {Promise<Object>}
 */
export async function saveAlertStyle( blockType, title, settings ) {
	return sendAlertStyleCommand( 'alerts_dlx_save_alert_style', {
		nonce: alertsDlxBlock.alertStyles.saveNonce, // eslint-disable-line no-undef
		block_type: blockType,
		title,
		settings: JSON.stringify( settings ),
	} );
}

/**
 * Update an existing Alert Style.
 *
 * @param {number} styleId Style post ID.
 * @param {Object} settings Style settings.
 * @param {string} updateNonce Per-style update nonce.
 * @return {Promise<Object>}
 */
export async function updateAlertStyle( styleId, settings, updateNonce ) {
	return sendAlertStyleCommand( 'alerts_dlx_update_alert_style', {
		nonce: updateNonce,
		style_id: styleId,
		settings: JSON.stringify( settings ),
	} );
}

/**
 * Rename an Alert Style.
 *
 * @param {number} styleId Style post ID.
 * @param {string} title New title.
 * @param {string} renameNonce Per-style rename nonce.
 * @return {Promise<Object>}
 */
export async function renameAlertStyle( styleId, title, renameNonce ) {
	return sendAlertStyleCommand( 'alerts_dlx_rename_alert_style', {
		nonce: renameNonce,
		style_id: styleId,
		title,
	} );
}

/**
 * Delete an Alert Style.
 *
 * @param {number} styleId Style post ID.
 * @param {string} deleteNonce Per-style delete nonce.
 * @return {Promise<Object>}
 */
export async function deleteAlertStyle( styleId, deleteNonce ) {
	return sendAlertStyleCommand( 'alerts_dlx_delete_alert_style', {
		nonce: deleteNonce,
		style_id: styleId,
	} );
}
