import { registerBlockType, createBlock } from '@wordpress/blocks';
import metadata from './block.json';
import BootstrapLogo from '../components/icons/BootstrapLogo';
import Edit from './edit';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <BootstrapLogo />,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-chakra' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'default';
					props.className = 'is-style-success';
					props.alertGroup = 'bootstrap';
					return createBlock( 'mediaron/alerts-dlx-bootstrap', props );
				},
			},
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-material' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'default';
					props.className = 'is-style-success';
					props.alertGroup = 'bootstrap';
					return createBlock( 'mediaron/alerts-dlx-bootstrap', props );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-material' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'default';
					props.className = 'is-style-success';
					props.alertGroup = 'material';
					return createBlock( 'mediaron/alerts-dlx-material', props );
				},
			},
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-chakra' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'subtle';
					props.className = 'is-style-success';
					props.alertGroup = 'material';
					return createBlock( 'mediaron/alerts-dlx-chakra', props );
				},
			},
		],
	},
} );
