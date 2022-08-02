import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import AlertsLogo from '../components/icons/AlertsLogo';

import Edit from './edit';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <AlertsLogo />,
} );
