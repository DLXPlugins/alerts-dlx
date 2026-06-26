import { __ } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';

const Loader = ( { title = '', label = __( 'Loading…', 'alerts-dlx' ) } ) => {
	return (
		<div className="alerts-dlx-admin-content-wrapper">
			<div className="alerts-dlx-admin-content-panel">
				<div className="alerts-dlx-admin-content-heading">
					<h1>
						<span className="alerts-dlx-admin-content-heading-text">{ title }</span>
					</h1>
				</div>
				<div className="alerts-dlx-admin-content-body">
					<div className="alerts-dlx-admin-component-row">
						<Spinner />
						<span>{ label }</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
