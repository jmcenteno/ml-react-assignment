import React from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';

import { APP_NAME, APP_TAGLINE } from '../../config/constants';

import './header.component.scss';

export class Header extends React.Component {

	static propTypes = {
		user: React.PropTypes.any
	};

	constructor (props) {

		super(props);

	}

	render () {

		return (
			<Navbar fixedTop={true} fluid={true} collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand className="custom-navbar-brand">
						<Link to="/">
							{APP_NAME}
							<span className="tagline">{APP_TAGLINE}</span>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<ul className="nav navbar-nav">
						<li><Link to="/spaceships" activeClassName="active">Spaceships</Link></li>
					</ul>
				</Navbar.Collapse>
			</Navbar>
		);

	}

}

export default Header;
