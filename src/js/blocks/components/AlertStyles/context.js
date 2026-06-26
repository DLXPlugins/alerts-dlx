import { createContext, useContext } from '@wordpress/element';

const AlertStylesContext = createContext( {
	styles: [],
	setStyles: () => {},
	loading: false,
	setLoading: () => {},
	linkedStyle: null,
	setLinkedStyle: () => {},
	refreshStyles: () => {},
} );

export default AlertStylesContext;

/**
 * Use Alert Styles context.
 *
 * @return {Object} Context value.
 */
export function useAlertStylesContext() {
	return useContext( AlertStylesContext );
}
