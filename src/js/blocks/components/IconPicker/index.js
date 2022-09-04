import './editor.scss';
import successSvgs from '../icons/success';
import { __ } from '@wordpress/i18n';
import { renderToString } from '@wordpress/element';
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
	const {
		defaultSvg,
		setAttributes,
		alertType,
	} = props;

	const getIcons = () => {
		switch ( alertType ) {
			case 'success':
				return successSvgs;
			default:
				return successSvgs;
		}
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
				<Popover
					noArrow={ false }
					className="alerts-dlx-icon-popover"
				>
					<BaseControl className="alerts-dlx-icon-picker">
						<h2>{ __( 'Select an Icon', 'alerts-dlx' ) }</h2>
						<ul className="alerts-dlx-icon-list">
							{
								Object.keys( icons ).map( ( svg, i ) => {
									return (
										<li key={ `alerts-dlx-icon-${ i }` }>
											<Tooltip text={ ( icons[ svg ].label ) }>
												<Button
													className="editor-block-list-item-button"
													onClick={ () => {
														setAttributes( {
															[ this.props[ 'attrIcon' ] ]: renderToString( icons[ svg ][ 'icon' ] ), // eslint-disable-line dot-notation
															'hasIcon': true, // eslint-disable-line quote-props
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
								} )
							}
						</ul>
					</BaseControl>
				</Popover>
			) }

		</>
	);
};
export default IconPicker;
