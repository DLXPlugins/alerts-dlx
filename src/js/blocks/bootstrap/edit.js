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

import { useInstanceId } from '@wordpress/compose';

import AlertButton from '../components/AlertButton';
import UnitChooser from '../components/unit-picker';
import IconPicker from '../components/IconPicker';
import BootstrapIcons from '../components/icons/BootstrapIcons';

const BootstrapAlerts = ( props ) => {
	const generatedUniqueId = useInstanceId(
		BootstrapAlerts,
		'adlx-bootstrap'
	);

	// Shortcuts.
	const { attributes, setAttributes } = props;

	const {
		uniqueId,
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
		iconVerticalAlignment,
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
					<BaseControl id="alerts-dlx-variants-button-group" label={ __( 'Set the Alert Variant', 'quotes-dlx' ) } className="alerts-dlx-bootstrap-variants">
						<ButtonGroup>
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
								variant={ variant === 'centered' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										variant: 'centered',
									} );
								} }
							>
								{ __( 'Centered', 'alerts-dlx' ) }
							</Button>
						</ButtonGroup>
					</BaseControl>
				</PanelRow>
				{ ( iconEnabled && 'centered' !== variant ) && (
					<PanelRow>
						<BaseControl id="alerts-dlx-button-group-icon-alignment" label={ __( 'Icon Vertical Alignment', 'quotes-dlx' ) } className="alerts-dlx-material-variants">
							<ButtonGroup>
								<Button
									variant={ iconVerticalAlignment === 'top' ? 'primary' : 'secondary' }
									onClick={ ( e ) => {
										setAttributes( {
											iconVerticalAlignment: 'top',
										} );
									} }
								>
									{ __( 'Top', 'alerts-dlx' ) }
								</Button>
								<Button
									variant={ iconVerticalAlignment === 'centered' ? 'primary' : 'secondary' }
									onClick={ ( e ) => {
										setAttributes( {
											iconVerticalAlignment: 'centered',
										} );
									} }
								>
									{ __( 'Centered', 'alerts-dlx' ) }
								</Button>
							</ButtonGroup>
						</BaseControl>
					</PanelRow>
				) }
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
				</>
			</PanelBody>
		</>
	);

	useEffect( () => {
		setAttributes( { uniqueId: generatedUniqueId } );
	}, [] );

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
			setAttributes( { alertType: match } );
		}
	}, [ className ] );

	const getIconSets = () => {
		return BootstrapIcons;
	};

	// Calculate max width.
	const maxWidthStyle = {
		maxWidth: maximumWidth + maximumWidthUnit,
	};
	const baseFontSizeStyles = `#${ uniqueId } { font-size: ${ parseInt( baseFontSize ) }px; }`;
	const block = (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			<style>{ baseFontSizeStyles }</style>
			<link
				rel="stylesheet"
				href={ `${ alertsDlxBlock.font_stylesheet }` }
			/>
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
									tagName="div"
									multiline="p"
									placeholder={ __( 'Alert Description', 'quotes-dlx' ) }
									value={ alertDescription }
									className="alerts-dlx-content"
									allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
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
		className: classnames( className, `alerts-dlx template-bootstrap is-style-${ alertType }`, {
			'custom-fonts-enabled': enableCustomFonts,
			'is-appearance-default': 'default' === variant,
			'is-appearance-centered': 'centered' === variant,
			'icon-vertical-align-top': 'top' === iconVerticalAlignment,
			'icon-vertical-align-centered': 'centered' === iconVerticalAlignment,
		} ),
	} );

	return (
		<>
			<div { ...blockProps }>{ block }</div>
		</>
	);
};

export default BootstrapAlerts;
