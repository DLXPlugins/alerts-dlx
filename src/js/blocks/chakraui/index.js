import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import ChakraUILogo from '../components/icons/ChakraUILogo';
import Edit from './edit';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <ChakraUILogo />,
} );
