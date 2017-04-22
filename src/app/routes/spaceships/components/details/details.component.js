import React from 'react';

import { ProductDetailsView, Spinner } from '../../../../components';

import './details.component.scss';

export class SpaceshipDetailsView extends React.Component {

	static propTypes = {
		spaceshipDetails: React.PropTypes.any
	}

	componentDidMount() {
		
		window.scroll(0, 0);
		this.props.actions.getSpaceshipDetails(this.props.params.id);

	}

	getSpecs(spaceship) {

		if (spaceship) {

			return [
				{ label: 'Length', value: spaceship.techspecs.length },
				{ label: 'Max Acceleration', value: spaceship.techspecs.maxaccel },
				{ label: 'Megalights', value: spaceship.techspecs.MGLT },
				{ label: 'Max Atmospheric Speed', value: spaceship.techspecs.maxatmosphericspeed },
				{ label: 'Hull', value: spaceship.techspecs.hull },
				{ label: 'Sensor', value: spaceship.techspecs.sensor },
				{ label: 'Targeting', value: spaceship.techspecs.targeting },
				{ label: 'Armament', value: spaceship.techspecs.armament },
				{ label: 'Communications', value: spaceship.techspecs.communications },
			];

		} else {

			return [];

		}

	}

	render() {
		
		const techspecs = this.getSpecs(this.props.spaceshipDetails)
	
		return (
			this.props.spaceshipDetails ?
			<div>
				<div className="container">
					<ProductDetailsView 
						product={this.props.spaceshipDetails} 
						category={this.props.spaceshipDetails.class} 
						specs={techspecs} 
					/>
				</div>
			</div> :
			<Spinner />
		);

	}

}

export default SpaceshipDetailsView;
