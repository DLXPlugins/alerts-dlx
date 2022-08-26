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

const HtmlToReactParser = require( 'html-to-react' ).Parser;

const MaterialAlerts = ( props ) => {
	const alertTitleField = createRef( null );
	const shareTextInput = createRef( null );

	// Shortcuts.
	const { attributes, setAttributes, isSelected } = props;

	const generatedUniqueId = useInstanceId(
		MaterialAlerts,
		'dlxalert'
	);

	const {
		uniqueId,
		preview,
		alert_title,
	} = attributes;

	const inspectorControls = (
		<>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Container Settings', 'quotes-dlx' ) }
			>
				<>
					test
				</>
			</PanelBody>
		</>
	);

	const blockToolbar = (
		<>
		test
		</>
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
			{ blockToolbar }
			<figure role="alert" className="alerts-dlx-alert alertx-dlx-material alerts-dlx-material-success">
				<div className="alerts-dlx-icon" aria-hidden="true">icon</div>
				<figcaption>
					<RichText
						tagName="h2"
						placeholder={ __( 'Alert title', 'quotes-dlx' ) }
						value={ alert_title }
						className="alertx-dlx-title"
						disableLineBreaks={ true }
						allowedFormats={ [
							'core/bold',
							'core/italic',
							'core/text-color',
							'core/subscript',
							'core/superscript',
							'core/strikethrough',
							'core/link',
						] }
						onChange={ ( value ) => {
							setAttributes( { alert_title: value } );
						} }
						ref={ alertTitleField }
					/>
					<h2 className="alertx-dlx-title">This is the title of the alert</h2>
					<div className="alerts-dlx-content-wrapper">
						<div className="alerts-dlx-content">
							<p>This is alert content.</p>
							<p>This is alert content.</p>
						</div>
						<div className="alerts-dlx-button">
							<button>Test</button>
						</div>
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
