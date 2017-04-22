export default class Spaceship {

	constructor(id, name, price, manufacturer, className, pictures, description, techspecs, reviews) {
		
		this.id = id;
		this.name = name;
		this.price = price;
		this.manufacturer = manufacturer;
		this.class = className;
		this.pictures = pictures || [];
		this.description = description;
		this.techspecs = techspecs;
		this.reviews = reviews = [];

	}

}