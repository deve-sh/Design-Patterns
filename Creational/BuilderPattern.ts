/**
 * Reference: https://refactoring.guru/design-patterns/builder
 */

class House {
	public windows: number = 4;
	public chimneys: number = 0;
	public hasGarage: boolean = false;
	constructor() {}
}

/**
 * This class basically gives us a house, but we have the options of getting whichever class of house we need. With however many windows, chimneys, garages etc.
 * Makes the code much cleaner.
 */

/**
let newHouse = new HouseBuilder();
newHouse.addGarage();
newHouse.addChimneys(2);
newHouse.getResult();

// instead of
let newHouse = new House(5, 2, true, true, ...)
**/
class HouseBuilder {
	private house: House = null;

	constructor() {
		this.reset();
	}

	private reset(): void {
		this.house = new House(); // Create a basic House Instance
	}

	public addChimney(nChimneys = 1): void {
		this.house.chimneys += nChimneys;
	}

	public addWindow(nWindows = 1): void {
		this.house.windows += nWindows;
	}

	public addGarage(): void {
		this.house.hasGarage = true;
	}

	public getResult(): House {
		let house = this.house;
		this.reset();
		return house;
	}
}

let myNewHouse = new HouseBuilder();
myNewHouse.addChimney(3);
myNewHouse.addWindow(2);
myNewHouse.addGarage();

console.log(myNewHouse.getResult());