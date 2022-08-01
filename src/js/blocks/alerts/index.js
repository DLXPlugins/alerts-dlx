import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import AlertsLogo from '../components/icons/AlertsLogo';

registerBlockType( metadata, {
	edit: () => {
		return ( <>test</> );
	},
	save() {
		return null;
	},
	icon: <AlertsLogo />,
} );
