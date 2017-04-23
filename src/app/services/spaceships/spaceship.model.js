export default class Spaceship {

	constructor(id, name, price, manufacturer, pictures, description, specs, reviews) {
		
		this.id = id;
		this.name = name;
		this.price = price;
		this.manufacturer = manufacturer;
		this.category = 'Spaceship';
		this.pictures = pictures || [];
		this.description = description;
		this.specs = specs;
		this.reviews = reviews || [];

	}

}