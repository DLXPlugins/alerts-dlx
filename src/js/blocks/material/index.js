import { registerBlockType, createBlock } from '@wordpress/blocks';
import metadata from './block.json';
import MaterialIconsLogo from '../components/icons/MaterialIconsLogo';

import Edit from './edit';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <MaterialIconsLogo />,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-bootstrap' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'default';
					return createBlock( 'mediaron/alerts-dlx-material', props );
				},
			},
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-chakra' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'default';
					return createBlock( 'mediaron/alerts-dlx-material', props );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-chakra' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'subtle';
					return createBlock( 'mediaron/alerts-dlx-chakra', props );
				},
			},
			{
				type: 'block',
				blocks: [ 'mediaron/alerts-dlx-bootstrap' ],
				transform: ( props ) => {
					props.alertType = 'success';
					props.variant = 'default';
					return createBlock( 'mediaron/alerts-dlx-bootstrap', props );
				},
			},
		],
	},
} );
