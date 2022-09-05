import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import MaterialIconsLogo from '../components/icons/MaterialIconsLogo';

import Edit from './edit';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <MaterialIconsLogo />,
} );
