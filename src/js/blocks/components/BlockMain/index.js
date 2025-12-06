/**
 * Main Block Interface (what is shown to the user in the editor).
 */

import {
	InspectorControls,
	InspectorAdvancedControls,
	RichText,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import IconPicker from '../IconPicker';
import AlertButton from '../AlertButton';

/**
 * Main Block Interface (what is shown to the user in the editor).
 *
 * @param {Object}      props                   - The props of the block.
 * @param {Object}      props.attributes        - The attributes of the block.
 * @param {Function}    props.setAttributes     - The function to set the attributes of the block.
 * @param {Object}      props.iconSet           - The icon set of the block.
 * @param {JSX.Element} props.inspectorControls - The inspector controls of the block.
 * @param {JSX.Element} props.advancedControls  - The advanced controls of the block.
 * @param {JSX.Element} props.CloseButtonIcon   - The close button icon of the block.
 * @param {Object}      props.innerBlockProps   - The inner block props of the block.
 * @return {JSX.Element} - The main block interface.
 */
const BlockMain = ( props ) => {
	const {
		attributes,
		setAttributes,
		iconSet,
		inspectorControls,
		advancedControls,
		CloseButtonIcon,
		innerBlockProps,
	} = props;

	const {
		iconEnabled,
		iconSource,
		descriptionEnabled,
		buttonEnabled,
		uniqueId,
		icon,
		imageUrl,
		alertType,
		closeButtonEnabled,
		titleEnabled,
		alertTitle,
		maximumWidth,
		maximumWidthUnit,
		baseFontSize,
	} = attributes;

	// Calculate max width.
	const maxWidthStyle = {
		maxWidth: maximumWidth + maximumWidthUnit,
	};
	const baseFontSizeStyles = `#${ uniqueId } { font-size: ${ parseInt(
		baseFontSize
	) }px; }`;

	return (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			<InspectorAdvancedControls>{ advancedControls }</InspectorAdvancedControls>
			<style>{ baseFontSizeStyles }</style>
			<link rel="stylesheet" href={ `${ alertsDlxBlock.font_stylesheet }` } />
			<figure
				role="alert"
				className={ classnames( 'alerts-dlx-alert alerts-dlx-bootstrap', {
					'alerts-dlx-has-icon': iconEnabled,
					'alerts-dlx-has-description': descriptionEnabled,
					'alerts-dlx-has-button': buttonEnabled,
				} ) }
				style={ maxWidthStyle }
				id={ uniqueId }
			>
				{ ( 'icon' === iconSource ) && iconEnabled && (
					<div className="alerts-dlx-icon" aria-hidden="true">
						<IconPicker
							defaultSvg={ icon }
							setAttributes={ setAttributes }
							alertType={ alertType }
							icons={ iconSet }
						/>
					</div>
				) }
				{ ( 'image' === iconSource ) && iconEnabled && (
					<div className="alerts-dlx-icon" aria-hidden="true">
						{ imageUrl && (
							<img src={ imageUrl } alt={ __( 'Alert image', 'alerts-dlx' ) } />
						) }
						{ ! imageUrl && (
							<img src={ alertsDlxBlock.default_image } alt={ __( 'Placeholder Alert image', 'alerts-dlx' ) } />
						) }
					</div>
				) }
				<section>
					{ closeButtonEnabled && (
						<div className="alerts-dlx-close">
							<CloseButtonIcon />
						</div>
					) }
					{ titleEnabled && (
						<RichText
							tagName="h2"
							placeholder={ __( 'Alert title', 'alerts-dlx' ) }
							value={ alertTitle }
							className="alerts-dlx-title"
							disableLineBreaks={ true }
							allowedFormats={ [] }
							onChange={ ( value ) => {
								setAttributes( { alertTitle: value } );
							} }
						/>
					) }
					<div className="alerts-dlx-content-wrapper">
						{ descriptionEnabled && <div { ...innerBlockProps } /> }
						{ buttonEnabled && (
							<AlertButton
								attributes={ attributes }
								setAttributes={ setAttributes }
							/>
						) }
					</div>
				</section>
			</figure>
		</>
	);
};

export default BlockMain;
