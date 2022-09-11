import { registerBlockType, createBlock } from '@wordpress/blocks';
import metadata from './block.json';
import ChakraUILogo from '../components/icons/ChakraUILogo';
import Edit from './edit';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <ChakraUILogo />,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-material' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'subtle';
					props.className = 'is-style-success';
					return createBlock( 'mediaron/alerts-dlx-chakra', props );
				},
			},
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-bootstrap' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'subtle';
					props.className = 'is-style-success';
					return createBlock( 'mediaron/alerts-dlx-chakra', props );
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
					return createBlock( 'mediaron/alerts-dlx-material', props );
				},
			},
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-bootstrap' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'default';
					props.className = 'is-style-success';
					return createBlock( 'mediaron/alerts-dlx-bootstrap', props );
				},
			},
		],
	},
} );
