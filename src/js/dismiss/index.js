// set up onload event.
import setCookie from 'set-cookie';

document.addEventListener( 'DOMContentLoaded', () => {
	const closeButtons = document.querySelectorAll('.alerts-dlx-close' );
	if ( null !== closeButtons ) {
		closeButtons.forEach( ( closeButton ) => {
			closeButton.addEventListener( 'click', () => {
				const alert = closeButton.closest( '.alerts-dlx' );

				// Add removal class.
				alert.classList.add( 'alerts-dlx-remove' );

				// Remove alert after animation.
				alert.addEventListener( 'animationend', () => {
					alert.remove();
				} );

				// Set cookie to remember alert dismissal.
				const cookieExpiration = parseInt( alert.getAttribute( 'data-expiration' ) );

				if ( 0 === cookieExpiration ) {
					return;
				}

				// Get the figure element.
				const figure = alert.querySelector( 'figure' );

				// Get the ID.
				const uniqueId = figure.getAttribute( 'id' );

				// Form Cookie name.
				const cookieName = `alerts-dlx-${ uniqueId }`;

				// Set cookie.
				setCookie( cookieName, 'dismissed', {
					expires: new Date( Date.now() + ( cookieExpiration * 1000 ) ),
					path: '/',
				} );
			} );
		} );
	}
} );
