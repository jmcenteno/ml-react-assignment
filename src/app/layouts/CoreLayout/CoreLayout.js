import React from 'react';
import { browserHistory } from 'react-router';

import { APP_NAME } from '../../config/constants';
import { Header, Footer } from '../../components';

import './CoreLayout.scss';
import '../../../scss/styles.scss';

export class CoreLayout extends React.Component {

	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	render() {

		return (
			<div style={{ minHeight: '100%' }}>
				<Header />
				<main>
					{this.props.children}
				</main>
				<Footer />
			</div>
		);

	}

}

export default CoreLayout;
