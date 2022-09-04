import './editor.scss';
import successSvgs from '../icons/success';
import { __ } from '@wordpress/i18n';
import { renderToString, useState } from '@wordpress/element';
import {
	BaseControl,
	SelectControl,
	ToggleControl,
	TextControl,
	Tooltip,
	Button,
	PanelBody,
	PanelRow,
	Popover,
} from '@wordpress/components';
import sanitizeSVG from '../../utils/sanitize-svg';

const IconPicker = ( props ) => {
	const [ isCustomIcon, setIsCustomIcon ] = useState( false );
	const [ selectedIcon, setSelectedIcon ] = useState( props.defaultSvg );

	const { defaultSvg, setAttributes, alertType } = props;

	const getIcons = () => {
		switch ( alertType ) {
			case 'success':
				return successSvgs;
			default:
				return successSvgs;
		}
	};

	/**
	 * Retrieve popover content for custom icons or regular icons.
	 *
	 * @return {string} Popover content.
	 */
	const getPopoverContent = () => {
		if ( ! isCustomIcon ) {
			return (
				<>
					<ul className="alerts-dlx-icon-list">
						{ Object.keys( icons ).map( ( svg, i ) => {
							return (
								<li key={ `alerts-dlx-icon-${ i }` }>
									<Tooltip text={ icons[ svg ].label }>
										<Button
											className="editor-block-list-item-button"
											onClick={ () => {
												setAttributes( {
													icon: renderToString( icons[ svg ].icon ),
												} );
											} }
										>
											<span className="editor-block-types-list__item-icon">
												{ icons[ svg ].icon }
											</span>
										</Button>
									</Tooltip>
								</li>
							);
						} ) }
					</ul>
					<Button
						className="alerts-dlx-custom-icon-button"
						variant="secondary"
						showTooltip={ true }
						label={ __(
							'Add in a custom SVG instead of selecting an icon.',
							'alerts-dlx'
						) }
						onClick={ () => {
							setIsCustomIcon( true );
						} }
					>
						{ __( 'Set a Custom Icon', 'alerts-dlx' ) }
					</Button>
				</>
			);
		}
		// Return custom icon interface.
		return (
			<>
				<div className="alerts-dlx-custom-icon-preview">
					<span
						dangerouslySetInnerHTML={ { __html: sanitizeSVG( selectedIcon ) } }
					/>
				</div>
				<div className="alerts-dlx-custom-icon-input">
					<TextControl
						label={ __( 'SVG Code', 'alerts-dlx' ) }
						value={ sanitizeSVG( selectedIcon ) }
						onChange={ ( value ) => {
							setSelectedIcon( value );
						} }
					/>
					<Button
						isPrimary
						onClick={ () => {
							setAttributes( {
								icon: sanitizeSVG( selectedIcon ),
							} );
							setSelectedIcon( selectedIcon );
						} }
					>
						{ __( 'Set Icon', 'alerts-dlx' ) }
					</Button>
					<Button
						variant="tertiary"
						onClick={ () => {
							setIsCustomIcon( false );
						} }
					>
						{ __( 'Back to Icons', 'alerts-dlx' ) }
					</Button>
				</div>
			</>
		);
	};

	const icons = getIcons();

	return (
		<>
			<BaseControl className="alerts-dlx-icon-preview">
				<div className="gb-icon-preview">
					<span dangerouslySetInnerHTML={ { __html: sanitizeSVG( defaultSvg ) } } />
				</div>
			</BaseControl>
			{ true && (
				<Popover noArrow={ false } className="alerts-dlx-icon-popover">
					<BaseControl className="alerts-dlx-icon-picker">
						<h2>{ __( 'Select an Icon', 'alerts-dlx' ) }</h2>
						{ getPopoverContent() }
					</BaseControl>
				</Popover>
			) }
		</>
	);
};
export default IconPicker;
