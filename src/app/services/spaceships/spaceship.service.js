import BaseService from '../base.service';
import { Utils } from '../utils';
import lipsum from 'simple-lipsum';

import Spaceship from './spaceship.model';

class SpaceshipsService extends BaseService {

	placeholderImages = [
		'http://facetheforce.today/luke',
		'http://facetheforce.today/han',
		'http://facetheforce.today/leia',
		'http://facetheforce.today/yoda',
		'http://facetheforce.today/darthvader',
		'http://facetheforce.today/r2d2',
		'http://facetheforce.today/c3po',
		'http://facetheforce.today/chewbacca-alt',
		'http://facetheforce.today/luke-old',
		'http://facetheforce.today/han-old',
		'http://facetheforce.today/leia-old',
		'http://facetheforce.today/obiwan-old',
		'http://facetheforce.today/rey',
		'http://facetheforce.today/rey-alt',
		'http://facetheforce.today/finn',
		'http://facetheforce.today/poe',
		'http://facetheforce.today/bb8',
		'http://facetheforce.today/chewbacca',
		'http://facetheforce.today/kylo',
		'http://facetheforce.today/kylo-alt',
		'http://facetheforce.today/lando',
		'http://facetheforce.today/obiwan',
		'http://facetheforce.today/anakin',
		'http://facetheforce.today/c3po-alt',
		'http://facetheforce.today/amidala',
		'http://facetheforce.today/darthmaul',
		'http://facetheforce.today/macewindu',
		'http://facetheforce.today/quigon',
		'http://facetheforce.today/bail',
		'http://facetheforce.today/palpatine',
		'http://facetheforce.today/stormtrooper',
		'http://facetheforce.today/jaba',
		'http://facetheforce.today/boba',
		'http://facetheforce.today/boba-alt',
		'http://facetheforce.today/jawa',
		'http://facetheforce.today/ewok',
		'http://facetheforce.today/greedo',
		'http://facetheforce.today/stormtrooper-alt',
		'http://facetheforce.today/unkarplutt',
		'http://facetheforce.today/jyn',
		'http://facetheforce.today/saw',
		'http://facetheforce.today/orson',
		'http://facetheforce.today/chirrut',
		'http://facetheforce.today/mon',
		'http://facetheforce.today/cassian',
		'http://facetheforce.today/phasma'
	];

	constructor () {

		super();

		this.url = `${this.baseUrl}/spaceships`;

	}

	getSpaceships () {

		return new Promise((resolve, reject) => {
			
			this.request.get(this.url)
				.then((response) => {
					resolve(response.body.products.map((item, i) => {

						const images = _.shuffle(this.placeholderImages)
							.slice(0, 4)
							.map((img) => img += '/300');

						const description = lipsum.getParagraph();
						const reviews = [];
						
						return new Spaceship(
							i, 
							item.name, 
							item.price || null, 
							item.manufacturer, 
							item.class, 
							images, 
							description,
							item.techspecs,
							reviews
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
