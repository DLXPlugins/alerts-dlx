import {
	ToggleControl,
	Button,
	Popover,
	BaseControl,
} from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';
import { link } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import AlertButtonLinkControl from '../AlertButtonLinkControl';
import './editor.scss';

const AlertButton = ( props ) => {
	const [ isPopOverVisible, setIsPopOverVisible ] = useState( false );
	const [ linkIconAnchor, setLinkIconAnchor ] = useState( null );

	const { attributes, setAttributes } = props;

	const {
		buttonText,
		buttonUrl,
		buttonTarget,
		buttonRelNoFollow,
		buttonRelSponsored,
	} = attributes;

	const toggleLinkPopover = () => {
		setIsPopOverVisible( ( isOpen ) => ! isOpen );
	};

	const onLinkToggleMouseDown = ( event ) => {
		event.preventDefault();
		toggleLinkPopover();
	};

	const onLinkToggleKeyDown = ( event ) => {
		if ( 'Enter' !== event.key && ' ' !== event.key ) {
			return;
		}

		event.preventDefault();
		toggleLinkPopover();
	};

	return (
		<div
			className="alerts-dlx-button-wrapper"
			style={ { display: 'inline-flex' } }
		>
			<Button className="alerts-dlx-button button-reset">
				<RichText
					tagName="span"
					placeholder={ __( 'Button text', 'alerts-dlx' ) }
					value={ buttonText }
					className="alerts-dlx-button-text"
					disableLineBreaks={ true }
					allowedFormats={ [] }
					onChange={ ( value ) => {
						setAttributes( { buttonText: value } );
					} }
				/>
			</Button>
			<Button
				ref={ setLinkIconAnchor }
				className="button-reset alertx-dlx-button-link-icon"
				icon={ link }
				iconSize={ 25 }
				label={ __( 'Choose Link', 'alerts-dlx' ) }
				onMouseDown={ onLinkToggleMouseDown }
				onKeyDown={ onLinkToggleKeyDown }
			/>

			{ isPopOverVisible && linkIconAnchor && (
				<Popover
					anchor={ linkIconAnchor }
					noArrow={ false }
					onClose={ () => setIsPopOverVisible( false ) }
				>
					<BaseControl
						label={ __( 'Button Link', 'alerts-dlx' ) }
						className="alerts-dlx-button-popover-base-control"
					>
						<div className="alerts-dlx-button-link-select">
							<AlertButtonLinkControl
								buttonUrl={ buttonUrl }
								setAttributes={ setAttributes }
								inlinePicker={ true }
								isActive={ isPopOverVisible }
							/>

							<ToggleControl
								label={ __( 'Open link in a new tab', 'alerts-dlx' ) }
								checked={ buttonTarget || '' }
								onChange={ ( value ) => {
									setAttributes( {
										buttonTarget: value,
									} );
								} }
								className="alerts-dlx-link-toggle"
							/>

							<ToggleControl
								label={ __( 'Add rel="nofollow"', 'alerts-dlx' ) }
								checked={ buttonRelNoFollow || '' }
								onChange={ ( value ) => {
									setAttributes( {
										buttonRelNoFollow: value,
									} );
								} }
								className="alerts-dlx-link-toggle"
							/>

							<ToggleControl
								label={ __( 'Add rel="sponsored"', 'alerts-dlx' ) }
								checked={ buttonRelSponsored || '' }
								onChange={ ( value ) => {
									setAttributes( {
										buttonRelSponsored: value,
									} );
								} }
								className="alerts-dlx-link-toggle"
							/>
						</div>
					</BaseControl>
				</Popover>
			) }
		</div>
	);
};

export default AlertButton;
