import {
	ToggleControl,
	PanelBody,
	Fill,
	Button,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import useMediaUploader from '../hooks/useMediaUploader';
registerPlugin( 'custom-slot-fills', {
	render: () => {
		return (
			<Fill name="alertsDLXSettingsPanelAfter">
				{ ( { attributes, setAttributes } ) => {
					const { iconSource, imageUrl, imageId } = attributes;

					const { openMediaUploader } = useMediaUploader();

					const getImageButtons = () => {
						return (
							<>
								{ imageUrl && (
									<Button
										variant="secondary"
										isDestructive={ true }
										onClick={ () => {
											setAttributes( { imageUrl: '', imageId: 0 } );
										} }
									>
										{ __( 'Remove Image', 'alerts-dlx' ) }
									</Button>
								) }
								<Button
									variant="secondary"
									onClick={ () => {
										openMediaUploader(
											{
												title: __( 'Set Your Image', 'alerts-dlx' ),
												buttonLabel: __( 'Save Image', 'alerts-dlx' ),
												removeLabel: __( 'Remove Image', 'alerts-dlx' ),
												suggestedWidth: 96,
												suggestedHeight: 96,
												aspectRatio: '1:1',
												attachmentId: imageId || 0,
											},
											( attachment ) => {
												setAttributes( { imageUrl: attachment.url, imageId: attachment.id } );
											}
										);
									} }
								>
									{ __( 'Select Image', 'alerts-dlx' ) }
								</Button>
							</>
						);
					};
					const getImage = () => {
						if ( ! imageUrl ) {
							return null;
						}
						return (
							<>
								<img
									className="alerts-dlx-icon-image"
									src={ imageUrl }
									alt="Alerts DLX icon"
								/>
							</>
						);
					};
					return (
						<>
							<PanelBody title={ __( 'Icon and Image Selector', 'alerts-dlx' ) }>
								<ToggleGroupControl
									value={ iconSource }
									onChange={ ( value ) => {
										setAttributes( { iconSource: value } );
									} }
									label={ __( 'Icon Source', 'alerts-dlx' ) }
									className="alerts-dlx-icon-source-toggle-group"
									help={ __(
										'Select the source of the icon or image for the alert.',
										'alerts-dlx'
									) }
								>
									<ToggleGroupControlOption
										value="icon"
										label={ __( 'Icon', 'alerts-dlx' ) }
									/>
									<ToggleGroupControlOption
										value="image"
										label={ __( 'Image', 'alerts-dlx' ) }
									/>
								</ToggleGroupControl>
								{ iconSource === 'image' && (
									<>
										{ getImage() }
										{ getImageButtons() }
									</>
								) }
							</PanelBody>
						</>
					);
				} }
			</Fill>
		);
	},
} );
