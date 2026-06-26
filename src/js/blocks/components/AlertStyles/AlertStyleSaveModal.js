import { useState } from '@wordpress/element';
import {
	Modal,
	TextControl,
	Button,
	Spinner,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { extractStyleSettingsFromAttributes } from '../../alert-styles/schema';
import { saveAlertStyle } from '../../alert-styles/api';
import { useAlertStylesContext } from './context';

/**
 * Modal for saving a new Alert Style.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.onClose       Close callback.
 * @param {Function} props.onStyleSaved  Called after style is saved.
 * @return {JSX.Element|null}
 */
const AlertStyleSaveModal = ( { attributes, onClose, onStyleSaved } ) => {
	const [ title, setTitle ] = useState( '' );
	const [ saving, setSaving ] = useState( false );
	const [ error, setError ] = useState( '' );
	const { setStyles, refreshStyles } = useAlertStylesContext();

	const handleSave = async () => {
		if ( ! title.trim() ) {
			setError( __( 'Please enter a style name.', 'alerts-dlx' ) );
			return;
		}

		setSaving( true );
		setError( '' );

		try {
			const settings = extractStyleSettingsFromAttributes(
				attributes.alertGroup,
				attributes
			);
			const data = await saveAlertStyle(
				attributes.alertGroup,
				title.trim(),
				settings
			);
			if ( data.styles ) {
				setStyles( data.styles );
			} else {
				await refreshStyles( attributes.alertGroup );
			}
			if ( onStyleSaved && data.style ) {
				onStyleSaved( data.style );
			}
			onClose();
		} catch ( err ) {
			setError( err.message || __( 'Could not save Alert Style.', 'alerts-dlx' ) );
		} finally {
			setSaving( false );
		}
	};

	return (
		<Modal
			title={ __( 'Save as Alert Style', 'alerts-dlx' ) }
			onRequestClose={ onClose }
			className="alerts-dlx-alert-style-save-modal"
		>
			<TextControl
				label={ __( 'Style Name', 'alerts-dlx' ) }
				value={ title }
				onChange={ setTitle }
				help={ __( 'Give this appearance a name so you can apply it to other alerts of the same theme.', 'alerts-dlx' ) }
			/>
			{ error && (
				<p className="alerts-dlx-alert-style-error">{ error }</p>
			) }
			<div className="alerts-dlx-alert-style-modal-actions">
				<Button variant="secondary" onClick={ onClose } disabled={ saving }>
					{ __( 'Cancel', 'alerts-dlx' ) }
				</Button>
				<Button variant="primary" onClick={ handleSave } disabled={ saving }>
					{ saving ? <Spinner /> : __( 'Save Alert Style', 'alerts-dlx' ) }
				</Button>
			</div>
		</Modal>
	);
};

export default AlertStyleSaveModal;
