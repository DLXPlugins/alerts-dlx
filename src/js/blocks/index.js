import './material';
import AlertsLogo from './components/icons/AlertsLogo';

( function() {
	wp.blocks.updateCategory( 'alertsdlx', { icon: <AlertsLogo width={ 16 } height={ 16 } /> } );
}() );
