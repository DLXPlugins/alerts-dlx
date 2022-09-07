import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import BootstrapLogo from '../components/icons/BootstrapLogo';
import Edit from './edit';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <BootstrapLogo />,
} );
