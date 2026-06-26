/* eslint-disable no-undef */
/* eslint-disable camelcase */
import axios from 'axios';
import qs from 'qs';

export default function sendCommand( action, data, maybeAjaxUrl ) {
	const params = {
		action,
	};

	const defaultData = {
		nonce: false,
		action,
	};

	if ( 'undefined' === typeof data ) {
		data = {};
	}

	for ( const opt in defaultData ) {
		if ( ! Object.prototype.hasOwnProperty.call( data, opt ) ) {
			data[ opt ] = defaultData[ opt ];
		}
	}

	const options = {
		method: 'post',
		url: maybeAjaxUrl ?? ajaxurl,
		params,
		paramsSerializer( jsparams ) {
			return qs.stringify( jsparams, { arrayFormat: 'brackets' } );
		},
		data: qs.stringify( data ),
	};

	return axios( options );
}
