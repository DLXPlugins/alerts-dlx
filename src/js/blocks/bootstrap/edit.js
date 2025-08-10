/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/**
 * External dependencies
 */

import classnames from 'classnames';

import { useEffect, useRef } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	DateTimePicker,
	TextControl,
	Button,
	ButtonGroup,
	RangeControl,
	BaseControl,
} from '@wordpress/components';

import { rawHandler } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';

import {
	InspectorControls,
	InspectorAdvancedControls,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
	PanelColorSettings,
	store,
} from '@wordpress/block-editor';

import { useInstanceId } from '@wordpress/compose';

import AlertButton from '../components/AlertButton';
import UnitChooser from '../components/unit-picker';
import IconPicker from '../components/IconPicker';
import BootstrapIcons from '../components/icons/BootstrapIcons';
import BootstrapColors from './colors';
import { BootstrapCloseIcon } from '../components/CloseButtonIcons';

// For storing unique IDs.
const uniqueIds = [];

const BootstrapAlerts = ( props ) => {
	// Shortcts.
	const { attributes, setAttributes, clientId } = props;

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
		closeButtonEnabled,
		closeButtonExpiration,
		className,
		baseFontSize,
		enableCustomFonts,
		variant,
		iconVerticalAlignment,
		innerBlocksEnabled,
		colorPrimary,
		colorBorder,
		colorAccent,
		colorAlt,
		colorBold,
		colorLight,
		mode,
		isBlockAdminOnly,
		adminOnlyBlockExpiresEnabled,
		adminOnlyBlockExpires,
	} = attributes;

	/**
	 * Get a unique ID for the block for inline styling if necessary.
	 */
	useEffect( () => {
		if ( null === uniqueId || uniqueIds.includes( uniqueId ) || '' === uniqueId ) {
			const newUniqueId =
				'alerts-dlx-' + clientId.substr( 2, 9 ).replace( '-', '' );

			setAttributes( { uniqueId: newUniqueId } );
			uniqueIds.push( newUniqueId );
		} else {
			uniqueIds.push( uniqueId );
		}
	}, [] );

	const innerBlocksRef = useRef( null );
	const innerBlockProps = useInnerBlocksProps(
		{
			className: 'alerts-dlx-content',
			ref: innerBlocksRef,
		},
		{
			allowedBlocks: innerBlocksEnabled ? true : [ 'core/paragraph' ],
			template: [ [ 'core/paragraph', { placeholder: '' } ] ],
		}
	);
	const { replaceInnerBlocks } = useDispatch( store );

	/**
	 * Migrate RichText to InnerBlocks.
	 */
	useEffect( () => {
		// Port shareText attribute to use innerBlocks instead.
		if ( alertDescription !== '' && null !== innerBlocksRef.current ) {
			// Convert text over to blocks.
			const richTextConvertedToBlocks = rawHandler( { HTML: alertDescription } );
			replaceInnerBlocks( clientId, richTextConvertedToBlocks );
			setAttributes( { alertDescription: '' } );
		}
	}, [ innerBlocksRef ] );

	const styles = `
		#${ uniqueId } {
			--alerts-dlx-bootstrap-color-primary: ${ colorPrimary };
			--alerts-dlx-bootstrap-color-border: ${ colorBorder };
			--alerts-dlx-bootstrap-color-accent: ${ colorAccent };
			--alerts-dlx-bootstrap-color-alt: ${ colorAlt };
			--alerts-dlx-bootstrap-color-bold: ${ colorBold };
			--alerts-dlx-bootstrap-color-light: ${ colorLight };
		}`;

	const inspectorControls = (
		<>
			<PanelBody title={ __( 'Alert Settings', 'alerts-dlx' ) }>
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
							label={ __( 'Enable Close Button', 'alerts-dlx' ) }
							checked={ closeButtonEnabled }
							onChange={ ( value ) => {
								setAttributes( {
									closeButtonEnabled: value,
								} );
							} }
							help={ __(
								'Enable this option to allow the alert to be dismissible.',
								'alerts-dlx'
							) }
						/>
					</PanelRow>
					{ closeButtonEnabled && (
						<PanelRow>
							<TextControl
								label={ __( 'Set the Close Button save expiration', 'alerts-dlx' ) }
								value={ closeButtonExpiration }
								onChange={ ( value ) => {
									setAttributes( {
										closeButtonExpiration: parseInt( value ),
									} );
								} }
								help={ __(
									'Set the expiration time in seconds for the close button to reappear. Set to zero to never expire.',
									'alerts-dlx'
								) }
								type={ 'number' }
							/>
						</PanelRow>
					) }
				</>
			</PanelBody>
			{ ( alertsDlxBlock.isAdmin || alertsDlxBlock.isEditor ) && (
				<>
					<PanelBody title={ __( 'Block Visibility', 'alerts-dlx' ) }>
						<>
							<PanelRow>
								<ToggleControl
									label={ __( 'Make This Block Admin Only', 'alerts-dlx' ) }
									checked={ isBlockAdminOnly }
									onChange={ ( value ) => {
										setAttributes( {
											isBlockAdminOnly: value,
										} );
									} }
								/>
							</PanelRow>
							{ isBlockAdminOnly && (
								<>
									<PanelRow>
										<ToggleControl
											label={ __( 'Enable Block Expiration', 'alerts-dlx' ) }
											checked={ adminOnlyBlockExpiresEnabled }
											onChange={ ( value ) => {
												setAttributes( {
													adminOnlyBlockExpiresEnabled: value,
												} );
											} }
										/>
									</PanelRow>
									{ adminOnlyBlockExpiresEnabled && (
										<div className="dlx-admin-only-block-expires">
											<DateTimePicker
												currentDate={
													adminOnlyBlockExpires
														? new Date( adminOnlyBlockExpires )
														: new Date()
												}
												onChange={ ( value ) => {
													setAttributes( {
														adminOnlyBlockExpires: value,
													} );
												} }
												startOfWeek={ 1 }
												label={ __( 'Set the Block Expiration', 'alerts-dlx' ) }
												help={ __(
													'Set the expiration date and time for the block. If the time has passed, the block will be removed automatically.',
													'alerts-dlx'
												) }
											/>
										</div>
									) }
								</>
							) }
						</>
					</PanelBody>
				</>
			) }
			{ 'custom' === alertType && (
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					title={ __( 'Custom Color Settings', 'alerts-dlx' ) }
					colorSettings={ [
						{
							label: __( 'Text Color', 'alerts-dlx' ),
							value: colorPrimary,
							onChange: ( value ) => {
								setAttributes( { colorPrimary: value } );
							},
						},
						{
							label: __( 'Border Color', 'alerts-dlx' ),
							value: colorBorder,
							onChange: ( value ) => {
								setAttributes( { colorBorder: value } );
							},
						},
						{
							label: __( 'Accent Color', 'alerts-dlx' ),
							value: colorAccent,
							onChange: ( value ) => {
								setAttributes( { colorAccent: value } );
							},
						},
						{
							label: __( 'Button Color', 'alerts-dlx' ),
							value: colorAlt,
							onChange: ( value ) => {
								setAttributes( { colorAlt: value } );
							},
						},
						{
							label: __( 'Icon Color', 'alerts-dlx' ),
							value: colorBold,
							onChange: ( value ) => {
								setAttributes( { colorBold: value } );
							},
						},
						{
							label: __( 'Background Color', 'alerts-dlx' ),
							value: colorLight,
							onChange: ( value ) => {
								setAttributes( { colorLight: value } );
							},
						},
					] }
					colors={ BootstrapColors }
				/>
			) }
			<PanelBody initialOpen={ true } title={ __( 'Appearance', 'alerts-dlx' ) }>
				<>
					<UnitChooser
						label={ __( 'Maximum Width', 'alerts-dlx' ) }
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
					<BaseControl
						id="alerts-dlx-variants-button-group"
						label={ __( 'Set the Alert Variant', 'alerts-dlx' ) }
						className="alerts-dlx-bootstrap-variants"
					>
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
				{ iconEnabled && 'centered' !== variant && (
					<PanelRow>
						<BaseControl
							id="alerts-dlx-button-group-icon-alignment"
							label={ __( 'Icon Vertical Alignment', 'alerts-dlx' ) }
							className="alerts-dlx-material-variants"
						>
							<ButtonGroup>
								<Button
									variant={
										iconVerticalAlignment === 'top' ? 'primary' : 'secondary'
									}
									onClick={ ( e ) => {
										setAttributes( {
											iconVerticalAlignment: 'top',
										} );
									} }
								>
									{ __( 'Top', 'alerts-dlx' ) }
								</Button>
								<Button
									variant={
										iconVerticalAlignment === 'centered'
											? 'primary'
											: 'secondary'
									}
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
					<BaseControl
						id="alerts-dlx-mode-button-group"
						label={ __( 'Set Light or Dark Mode', 'alerts-dlx' ) }
						className="alerts-dlx-chakra-mode"
					>
						<ButtonGroup>
							<Button
								variant={ mode === 'light' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										mode: 'light',
									} );
								} }
							>
								{ __( 'Light Mode', 'alerts-dlx' ) }
							</Button>
							<Button
								variant={ mode === 'dark' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										mode: 'dark',
									} );
								} }
							>
								{ __( 'Dark Mode', 'alerts-dlx' ) }
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
			</PanelBody>
		</>
	);

	const advancedControls = (
		<PanelRow>
			<ToggleControl
				label={ __( 'Enable Flexible InnerBlocks', 'alerts-dlx' ) }
				checked={ innerBlocksEnabled }
				onChange={ ( value ) => {
					setAttributes( {
						innerBlocksEnabled: value,
					} );
				} }
				help={ __(
					'Enable this option to allow the use of any block within the alert.',
					'alerts-dlx'
				) }
			/>
		</PanelRow>
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
	const baseFontSizeStyles = `#${ uniqueId } { font-size: ${ parseInt(
		baseFontSize
	) }px; }`;
	const block = (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			<InspectorAdvancedControls>{ advancedControls }</InspectorAdvancedControls>
			<style>{ baseFontSizeStyles }</style>
			{ 'custom' === alertType && <style>{ styles }</style> }
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
				<section>
					{ closeButtonEnabled && (
						<div className="alerts-dlx-close">
							<BootstrapCloseIcon />
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

	/**
	 * Filter: alerts-dlx/block-classes
	 *
	 * This filter allows you to add custom classes to the block.
	 *
	 * @param {Object} blockClasses - The block classes.
	 * @param {Object} attributes   - The block attributes.
	 *
	 * @return {Object} The block classes.
	 */
	const blockClasses = applyFilters(
		'alerts-dlx/block-classes',
		{
			'custom-fonts-enabled': enableCustomFonts,
			'is-appearance-default': 'default' === variant,
			'is-appearance-centered': 'centered' === variant,
			'icon-vertical-align-top': 'top' === iconVerticalAlignment,
			'icon-vertical-align-centered': 'centered' === iconVerticalAlignment,
			'is-dark-mode': 'dark' === mode,
		},
		attributes
	);

	const blockProps = useBlockProps( {
		className: classnames(
			className,
			`alerts-dlx template-bootstrap is-style-${ alertType }`,
			blockClasses
		),
	} );

	return (
		<>
			<div { ...blockProps }>{ block }</div>
		</>
	);
};

export default BootstrapAlerts;
