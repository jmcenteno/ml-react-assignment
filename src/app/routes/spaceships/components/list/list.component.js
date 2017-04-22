import React from 'react';
import { Link } from 'react-router';

import { ProductListView, Spinner } from '../../../../components';

import './list.styles.scss'

export class SpaceshipsView extends React.Component {

	static propTypes = {
		spaceships: React.PropTypes.any
	}

	componentDidMount () {

		window.scroll(0, 0);
		this.props.actions.getSpaceships();

	}

	render () {
	
		return (
			<div>
				<div className="container">
					
					<div className="page-header">
						<h1>Spaceships</h1>
					</div>

					{
						this.props.spaceships && this.props.spaceships.length ?
						<ProductListView products={this.props.spaceships} /> :
						<div>No products found</div>
					}

					{
						!this.props.spaceships ?
						<Spinner /> :
						null
					}
				
				</div>
			</div>
		);

	}

}

export default SpaceshipsView;
