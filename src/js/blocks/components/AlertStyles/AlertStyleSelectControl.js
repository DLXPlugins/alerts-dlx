import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Dropdown for selecting an Alert Style.
 *
 * @param {Object}   props              Component props.
 * @param {Object[]} props.styles       Available styles.
 * @param {number}   props.value        Selected style ID.
 * @param {Function} props.onChange     Change handler.
 * @param {boolean}  props.disabled     Whether control is disabled.
 * @return {JSX.Element}
 */
const AlertStyleSelectControl = ( { styles, value, onChange, disabled = false } ) => {
	const options = [
		{ label: __( 'Select an Alert Style…', 'alerts-dlx' ), value: '0' },
		...styles.map( ( style ) => ( {
			label: style.title,
			value: String( style.id ),
		} ) ),
	];

	return (
		<SelectControl
			label={ __( 'Apply Alert Style', 'alerts-dlx' ) }
			value={ String( value || 0 ) }
			options={ options }
			onChange={ ( selected ) => {
				onChange( parseInt( selected, 10 ) || 0 );
			} }
			disabled={ disabled || styles.length === 0 }
			help={
				styles.length === 0
					? __( 'No Alert Styles saved for this theme yet.', 'alerts-dlx' )
					: __( 'Linked blocks inherit appearance from the style and update automatically when the style changes.', 'alerts-dlx' )
			}
		/>
	);
};

export default AlertStyleSelectControl;
