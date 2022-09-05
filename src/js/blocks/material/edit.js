/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/**
 * External dependencies
 */

import classnames from 'classnames';

import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	TextControl,
	Button,
	ButtonGroup,
	RangeControl,
	BaseControl,
} from '@wordpress/components';

import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

import AlertButton from '../components/AlertButton';
import UnitChooser from '../components/unit-picker';
import IconPicker from '../components/IconPicker';
import successSvgs from '../components/icons/MaterialSuccess';
import infoSvgs from '../components/icons/MaterialInfo';
import warningSvgs from '../components/icons/MaterialWarning';

const MaterialAlerts = ( props ) => {
	// Shortcuts.
	const { attributes, setAttributes } = props;

	const {
		alertType,
		alertTitle,
		alertDescription,
		buttonEnabled,
		maximumWidthUnit,
		maximumWidth,
		icon,
		descriptionEnabled,
		titleEnabled,
		iconEnabled,
		className,
		baseFontSize,
		enableCustomFonts,
		variant,
		enableDropShadow,
	} = attributes;

	const inspectorControls = (
		<>
			<PanelBody initialOpen={ true } title={ __( 'Appearance', 'quotes-dlx' ) }>
				<>
					<UnitChooser
						label={ __( 'Maximum Width', 'quotes-dlx' ) }
						value={ maximumWidthUnit }
						units={ [ 'px', '%', 'vw' ] }
						onClick={ ( value ) => {
							setAttributes( {
								maximumWidthUnit: value,
							} );
						} }
					/>

					<TextControl
						type={ 'text' }
						value={ maximumWidth }
						onChange={ ( value ) => {
							setAttributes( {
								maximumWidth: value,
							} );
						} }
					/>
				</>
				<PanelRow>
					<BaseControl id="alerts-dlx-variants-button-group" label={ __( 'Set the Alert Variant', 'quotes-dlx' ) }>
						<ButtonGroup label="test">
							<Button
								variant={ variant === 'default' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										variant: 'default',
									} );
								} }
							>
								{ __( 'Default', 'alerts-dlx' ) }
							</Button>
							<Button
								variant={ variant === 'outlined' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										variant: 'outlined',
									} );
								} }
							>
								{ __( 'Outlined', 'alerts-dlx' ) }
							</Button>
							<Button
								variant={ variant === 'filled' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										variant: 'filled',
									} );
								} }
							>
								{ __( 'Filled', 'alerts-dlx' ) }
							</Button>
						</ButtonGroup>
					</BaseControl>
				</PanelRow>
				<PanelRow>
					<RangeControl
						label={ __( 'Set the Base Font Size', 'alerts-dlx' ) }
						step={ 1 }
						value={ baseFontSize }
						max={ 36 }
						min={ 12 }
						currentInput={ 16 }
						initialPosition={ 16 }
						allowReset={ true }
						onChange={ ( fontSizeValue ) => {
							setAttributes( {
								baseFontSize: fontSizeValue,
							} );
						} }
						help={ __( 'Set the base font size for the alert.', 'alerts-dlx' ) }
					/>
				</PanelRow>
				{ 'default' === variant && (
					<PanelRow>
						<ToggleControl
							label={ __( 'Enable Drop Shadow', 'alerts-dlx' ) }
							checked={ enableDropShadow }
							onChange={ ( value ) => {
								setAttributes( {
									enableDropShadow: value,
								} );
							} }
							help={ __( 'Enable or disable the drop shadow for the default variant.', 'alerts-dlx' ) }
						/>
					</PanelRow>
				) }
			</PanelBody>
			<PanelBody initialOpen={ false } title={ __( 'Alert Settings', 'quotes-dlx' ) }>
				<>
					<PanelRow>
						<ToggleControl
							label={ __( 'Enable Alert Icon', 'alerts-dlx' ) }
							checked={ iconEnabled }
							onChange={ ( value ) => {
								setAttributes( {
									iconEnabled: value,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Enable Title', 'alerts-dlx' ) }
							checked={ titleEnabled }
							onChange={ ( value ) => {
								setAttributes( {
									titleEnabled: value,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Enable Alert Description', 'alerts-dlx' ) }
							checked={ descriptionEnabled }
							onChange={ ( value ) => {
								setAttributes( {
									descriptionEnabled: value,
								} );
							} }
						/>
					</PanelRow>
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
					<PanelRow>
						<ToggleControl
							label={ __( 'Enable Custom Fonts', 'alerts-dlx' ) }
							checked={ enableCustomFonts }
							onChange={ ( value ) => {
								setAttributes( {
									enableCustomFonts: value,
								} );
							} }
							help={ __(
								'Material themed alert boxes use the Roboto font. If you want to use your own fonts, disable this option.',
								'alerts-dlx'
							) }
						/>
					</PanelRow>
				</>
			</PanelBody>
		</>
	);

	/**
	 * Attempt to check when block styles are changed.
	 */
	useEffect( () => {
		if ( undefined === className ) {
			return;
		}

		const styleMatch = new RegExp( /is-style-([^\s]*)/g ).exec( className );
		if ( null !== styleMatch ) {
			const match = styleMatch[ 1 ];
			switch ( match ) {
				case 'success':
					setAttributes( { alertType: 'success' } );
					break;
				case 'info':
					setAttributes( { alertType: 'info' } );
					break;
				case 'warning':
					setAttributes( { alertType: 'warning' } );
					break;
			}
		}
	}, [ className ] );

	const getIconSets = () => {
		switch ( alertType ) {
			case 'success':
				return successSvgs;
			case 'info':
				return infoSvgs;
			case 'warning':
			case 'error':
				return warningSvgs;
			default:
				return successSvgs;
		}
	};

	// Calculate max width.
	const maxWidthStyle = {
		maxWidth: maximumWidth + maximumWidthUnit,
	};
	const baseFontSizeStyles = `--alerts-dlx-material-base-size: ${ parseInt(
		baseFontSize
	) }px ;`;
	const baseStyles = `:root { ${ baseFontSizeStyles } }`;
	const block = (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			<style>{ baseStyles }</style>
			{ enableCustomFonts && (
				<link
					rel="stylesheet"
					href={ `${ alertsDlxBlock.roboto_font_stylesheet }` }
				/>
			) }
			<figure
				role="alert"
				className={ classnames( 'alerts-dlx-alert alerts-dlx-material', {
					'alerts-dlx-has-icon': iconEnabled,
					'alerts-dlx-has-description': descriptionEnabled,
					'alerts-dlx-has-button': buttonEnabled,
				} ) }
				style={ maxWidthStyle }
			>
				{ iconEnabled && (
					<div className="alerts-dlx-icon" aria-hidden="true">
						<IconPicker
							defaultSvg={ icon }
							setAttributes={ setAttributes }
							alertType={ alertType }
							icons={ getIconSets() }
						/>
					</div>
				) }
				<figcaption>
					{ titleEnabled && (
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
					) }
					<div className="alerts-dlx-content-wrapper">
						{ descriptionEnabled && (
							<div className="alerts-dlx-content">
								<RichText
									tagName="p"
									multiline="p"
									placeholder={ __( 'Alert Description', 'quotes-dlx' ) }
									value={ alertDescription }
									className="alerts-dlx-content"
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
									onChange={ ( value ) => {
										setAttributes( { alertDescription: value } );
									} }
								/>
							</div>
						) }
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
		className: classnames( className, 'alerts-dlx template-material', {
			'is-style-success': className === undefined && 'success' === alertType,
			'is-style-info': className === undefined && 'info' === alertType,
			'is-style-warning': className === undefined && 'warning' === alertType,
			'is-style-error': className === undefined && 'error' === alertType,
			'custom-fonts-enabled': enableCustomFonts,
			'is-appearance-default': 'default' === variant,
			'is-appearance-outlined': 'outlined' === variant,
			'is-appearance-filled': 'filled' === variant,
			'is-dropshadow-enabled': enableDropShadow,
		} ),
	} );

	return (
		<>
			<div { ...blockProps }>{ block }</div>
		</>
	);
};

export default MaterialAlerts;
