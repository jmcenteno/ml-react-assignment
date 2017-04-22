import React from 'react';
import { Link } from 'react-router';

import { APP_NAME } from '../../../config/constants';

import './home.styles.scss'

export class HomeView extends React.Component {

	constructor (props) {

		super(props);

	} 

	componentDidMount () {

	}

	render () {
	
		return (
			<div>
				<div className="container">
					<h1>Welcome to {APP_NAME}!</h1>
				</div>
			</div>
		);

	}

}

export default HomeView;
