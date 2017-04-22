import BaseService from '../base.service';
import { Utils } from '../utils';

import Spaceship from './spaceship.model';

class SpaceshipsService extends BaseService {

	constructor () {

		super();

		this.url = `${this.baseUrl}/spaceships`;

	}

	getSpaceships () {

		return new Promise((resolve, reject) => {
			
			this.request.get(this.url)
				.then((response) => {
					resolve(response.body.products.map((item, i) => {
						
						return new Spaceship(
							i, 
							item.name, 
							item.price || null, 
							item.manufacturer, 
							item.class, 
							`http://facetheforce.today/random/300?r=${i}`, 
							item.techspecs
						);

					}));
				})
				.catch((error) => {
					reject(error);
				});

		});

	}

	getSpaceshipDetails (id) {

		return new Promise((resolve, reject) => {
			
			this.request.get(`${this.url}/${id}/`)
				.then((response) => {

					const movie = Utils.addRecordId(response.body);
					
					resolve(movie);

				})
				.catch((error) => {
					reject(error);
				});
				
		});

	}

}

export default new SpaceshipsService();
