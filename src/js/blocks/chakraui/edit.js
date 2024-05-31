/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/**
 * External dependencies
 */

import classnames from 'classnames';

import { useEffect, useRef } from '@wordpress/element';
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

import { rawHandler } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';

import {
	InspectorControls,
	InspectorAdvancedControls,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
	store,
	PanelColorSettings,
} from '@wordpress/block-editor';

import { useInstanceId } from '@wordpress/compose';

import AlertButton from '../components/AlertButton';
import UnitChooser from '../components/unit-picker';
import IconPicker from '../components/IconPicker';
import chakraColors from './colors';
import ChakraIcons from '../components/icons/ChakraIcons';
import { ChakraCloseIcon } from '../components/CloseButtonIcons';

// For storing unique IDs.
const uniqueIds = [];

const ChakraAlerts = ( props ) => {
	const innerBlocksRef = useRef( null );

	const { replaceInnerBlocks } = useDispatch( store );

	// Shortcuts.
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
		className,
		baseFontSize,
		enableCustomFonts,
		variant,
		mode,
		iconVerticalAlignment,
		colorPrimary,
		colorBorder,
		colorAccent,
		colorAlt,
		colorBold,
		colorLight,
		closeButtonEnabled,
		closeButtonExpiration,
		innerBlocksEnabled,
	} = attributes;

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

	/**
	 * Get a unique ID for the block for inline styling if necessary.
	 */
	useEffect( () => {
		if ( null === uniqueId || uniqueIds.includes( uniqueId ) ) {
			const newUniqueId = 'alerts-dlx-' + clientId.substr( 2, 9 ).replace( '-', '' );

			setAttributes( { uniqueId: newUniqueId } );
			uniqueIds.push( newUniqueId );
		} else {
			uniqueIds.push( uniqueId );
		}
	}, [] );

	const styles = `
		#${ uniqueId } {
			--alerts-dlx-chakra-color-primary: ${ colorPrimary };
			--alerts-dlx-chakra-color-border: ${ colorBorder };
			--alerts-dlx-chakra-color-accent: ${ colorAccent };
			--alerts-dlx-chakra-color-alt: ${ colorAlt };
			--alerts-dlx-chakra-color-bold: ${ colorBold };
			--alerts-dlx-chakra-color-light: ${ colorLight };
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
							help={ __( 'Enable this option to allow the alert to be dismissible.', 'alerts-dlx' ) }
						/>
					</PanelRow>
					{
						closeButtonEnabled && (
							<PanelRow>
								<TextControl
									label={ __( 'Set the Close Button save expiration', 'alerts-dlx' ) }
									value={ closeButtonExpiration }
									onChange={ ( value ) => {
										setAttributes( {
											closeButtonExpiration: parseInt( value ),
										} );
									} }
									help={ __( 'Set the expiration time in seconds for the close button to reappear. Set to zero to never expire.', 'alerts-dlx' ) }
									type={ 'number' }
								/>
							</PanelRow>
						)
					}
				</>
			</PanelBody>
			{
				'custom' === alertType && (
					<PanelColorSettings
						__experimentalIsRenderedInSidebar
						title={ __( 'Custom Color Settings', 'alerts-dlx' ) }
						colorSettings={
							[
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
							]
						}
						colors={ chakraColors }
					/>

				)
			}
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
					<BaseControl id="alerts-dlx-variants-button-group" label={ __( 'Set the Alert Variant', 'quotes-dlx' ) } className="alerts-dlx-chakra-variants">
						<ButtonGroup>
							<Button
								variant={ variant === 'subtle' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										variant: 'subtle',
									} );
								} }
							>
								{ __( 'Subtle', 'alerts-dlx' ) }
							</Button>
							<Button
								variant={ variant === 'solid' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										variant: 'solid',
									} );
								} }
							>
								{ __( 'Solid', 'alerts-dlx' ) }
							</Button>
							<Button
								variant={ variant === 'left-accent' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										variant: 'left-accent',
									} );
								} }
							>
								{ __( 'Left Accent', 'alerts-dlx' ) }
							</Button>
							<Button
								variant={ variant === 'top-accent' ? 'primary' : 'secondary' }
								onClick={ ( e ) => {
									setAttributes( {
										variant: 'top-accent',
									} );
								} }
							>
								{ __( 'Top Accent', 'alerts-dlx' ) }
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
				<PanelRow>
					<BaseControl id="alerts-dlx-mode-button-group" label={ __( 'Set Light or Dark Mode', 'quotes-dlx' ) } className="alerts-dlx-chakra-mode">
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
				help={ __( 'Enable this option to allow the use of any block within the alert.', 'alerts-dlx' ) }
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
		return ChakraIcons;
	};

	// Calculate max width.
	const maxWidthStyle = {
		maxWidth: maximumWidth + maximumWidthUnit,
	};
	const baseFontSizeStyles = `#${ uniqueId } { font-size: ${ parseInt( baseFontSize ) }px; }`;
	const block = (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			<InspectorAdvancedControls>{ advancedControls }</InspectorAdvancedControls>
			<style>{ baseFontSizeStyles }</style>
			{
				'custom' === alertType && (
					<style>{ styles }</style>
				)
			}
			<figure
				role="alert"
				className={ classnames( 'alerts-dlx-alert alerts-dlx-chakra', {
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
					{
						closeButtonEnabled && (
							<div className="alerts-dlx-close">
								<ChakraCloseIcon />
							</div>
						)
					}
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
							<div { ...innerBlockProps } />
						) }
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

	const blockProps = useBlockProps( {
		className: classnames( className, `alerts-dlx template-chakra is-style-${ alertType }`, {
			'is-dark-mode': 'dark' === mode,
			'custom-fonts-enabled': enableCustomFonts,
			'is-appearance-subtle': 'subtle' === variant,
			'is-appearance-solid': 'solid' === variant,
			'is-appearance-left-accent': 'left-accent' === variant,
			'is-appearance-top-accent': 'top-accent' === variant,
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

export default ChakraAlerts;
