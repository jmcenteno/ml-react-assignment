import React from 'react';

import { APP_NAME } from '../../config/constants'; 

import './footer.component.scss';

class Footer extends React.Component {

	render() {
		
		return (
			<footer className="footer">
				<hr/>
				<div className="container">
					<p className="text-center">
						&copy;
						{' ' + (new Date()).getFullYear() + ' ' + APP_NAME + ' - All rights reserved.'}
					</p>
				</div>
			</footer>
		);

	}

}

export default Footer;
