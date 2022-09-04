/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/**
 * External dependencies
 */

import classnames from 'classnames';

import { useEffect, useState, createRef } from '@wordpress/element';

import { useSelect } from '@wordpress/data';

import { createHooks } from '@wordpress/hooks';

import { __ } from '@wordpress/i18n';

import { create, toHTMLString } from '@wordpress/rich-text';

import { useInstanceId } from '@wordpress/compose';
import {
	PanelBody,
	PanelRow,
	ToolbarGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Button,
	TabPanel,
	FormTokenField,
	RadioControl,
	Notice,
} from '@wordpress/components';

import {
	InspectorControls,
	RichText,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';

import AlertButton from '../components/AlertButton';

const HtmlToReactParser = require( 'html-to-react' ).Parser;

const MaterialAlerts = ( props ) => {
	const alertTitleField = createRef( null );

	// Shortcuts.
	const { attributes, setAttributes, isSelected } = props;

	const generatedUniqueId = useInstanceId(
		MaterialAlerts,
		'dlxalert'
	);

	const {
		uniqueId,
		preview,
		alertTitle,
		alertDescription,
		buttonEnabled,
	} = attributes;

	const inspectorControls = (
		<>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Alert Settings', 'quotes-dlx' ) }
			>
				<>
					<PanelRow>
						<ToggleControl
							label={ __( 'Enable Alert Button', 'alerts-dlx' ) }
							checked={ buttonEnabled }
							onChange={ ( value ) => {
								setAttributes( {
									buttonEnabled: value,
								} );
							} }
						/>
					</PanelRow>
				</>
			</PanelBody>
		</>
	);

	const blockToolbar = (
		<></>
	);

	// const blockToolbar = (
	// 	<BlockControls>
	// 		<>
	// 			<ToolbarGroup
	// 				icon={ <PaintbrushIcon width={ 24 } height={ 24 } fill="#000000" /> }
	// 				label={ __( 'Select a Theme', 'quotes-dlx' ) }
	// 				isCollapsed={ true }
	// 				popoverProps={ { className: `quotes-dlx-popover ${ template }` } }
	// 				controls={ [ toolbarThemes ] }
	// 			/>
	// 			<ToolbarGroup
	// 				icon={
	// 					<PreviewIcon
	// 						width={ 25 }
	// 						height={ 25 }
	// 						opacity={ preview ? 0.8 : 0.4 }
	// 						fill="#000000"
	// 					/>
	// 				}
	// 				label={ __( 'Preview Mode', 'quotes-dlx' ) }
	// 				isCollapsed={ true }
	// 				popoverProps={ {
	// 					className: `quotes-dlx-preview-popover ${ template }`,
	// 				} }
	// 				controls={ [ toolbarPreview ] }
	// 			/>
	// 		</>
	// 	</BlockControls>
	// );

	const previewBlockInspectorControls = (
		<>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Preview Mode Active', 'quotes-dlx' ) }
			>
				<Button
					variant="link"
					onClick={ ( e ) => {
						setAttributes( { preview: false } );
					} }
				>
					{ __( 'Turn Preview Mode Off', 'quotes-dlx' ) }
				</Button>
			</PanelBody>
		</>
	);

	const htmlToReactParser = new HtmlToReactParser();

	const block = (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			<figure role="alert" className="alerts-dlx-alert alerts-dlx-material alerts-dlx-material-success">
				<div className="alerts-dlx-icon" aria-hidden="true">icon</div>
				<figcaption>
					<RichText
						tagName="h2"
						placeholder={ __( 'Alert title', 'quotes-dlx' ) }
						value={ alertTitle }
						className="alerts-dlx-title"
						disableLineBreaks={ true }
						allowedFormats={ [] }
						onChange={ ( value ) => {
							setAttributes( { alertTitle: value } );
						} }
					/>
					<div className="alerts-dlx-content-wrapper">
						<div className="alerts-dlx-content">
							<RichText
								tagName="p"
								multiline="p"
								placeholder={ __( 'Alert Description', 'quotes-dlx' ) }
								value={ alertDescription }
								className="alerts-dlx-content"
								allowedFormats={ [
									'core/bold',
									'core/italic',
								] }
								onChange={ ( value ) => {
									setAttributes( { alertDescription: value } );
								} }
							/>
						</div>
						{ buttonEnabled && (
							<AlertButton
								attributes={ attributes }
								setAttributes={ setAttributes }
							/>
						) }
						
					</div>
				</figcaption>
			</figure>
		</>
	);

	const blockProps = useBlockProps( {
		className: `alerts-dlx template-material`,
	} );

	return (
		<>
			<div { ...blockProps }>{ block }</div>
		</>
	);
};

export default MaterialAlerts;
