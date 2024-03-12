import './js/blocks/material';
import './js/blocks/chakraui';
import './js/blocks/bootstrap';
import './js/blocks/shoelace';
import AlertsLogo from './js/blocks/components/icons/AlertsLogo';

( function() {
	wp.blocks.updateCategory( 'alertsdlx', { icon: <AlertsLogo width={ 16 } height={ 16 } /> } );
}() );
