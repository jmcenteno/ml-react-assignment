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
				{ label: 'Class', value: spaceship.specs.class },
				{ label: 'Length', value: spaceship.specs.length },
				{ label: 'Max Acceleration', value: spaceship.specs.maxaccel },
				{ label: 'Megalights', value: spaceship.specs.MGLT },
				{ label: 'Max Atmospheric Speed', value: spaceship.specs.maxatmosphericspeed },
				{ label: 'Hull', value: spaceship.specs.hull },
				{ label: 'Sensor', value: spaceship.specs.sensor },
				{ label: 'Targeting', value: spaceship.specs.targeting },
				{ label: 'Armament', value: spaceship.specs.armament },
				{ label: 'Communications', value: spaceship.specs.communications },
			];

		} else {

			return [];

		}

	}

	render() {
		
		const specs = this.getSpecs(this.props.spaceshipDetails)
	
		return (
			this.props.spaceshipDetails ?
			<div>
				<div className="container">
					<ProductDetailsView 
						product={this.props.spaceshipDetails} 
						category={this.props.spaceshipDetails.class} 
						specs={specs} 
					/>
				</div>
			</div> :
			<Spinner />
		);

	}

}

export default SpaceshipDetailsView;
