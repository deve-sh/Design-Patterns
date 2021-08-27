/**
 * The factory pattern is exactly what it sounds like, it comprises of a class that generates objects of other classes based on inputs provided to it.
 *
 * This makes the creation of similar objects much simpler.
 * Ex: There can be multiple types of employees: Full-Time, Part-Time and Consultants, it's better to create a factory to create an employee object of the different types.
 * 
 * References:
 * https://www.dofactory.com/javascript/design-patterns/factory-method
 * https://refactoring.guru/design-patterns/factory-method
 */

class Bread {
	protected color: string = "white";
	protected toasted: boolean = false;
	protected hasButter: boolean = false;

	public eat(): void {
		console.log("Eating bread!");
	}
}

class BrownBread extends Bread {
	constructor() {
		super();
		this.color = "brown";
		this.toasted = false;
		this.hasButter = false;
	}
}

class FrenchToast extends Bread {
	constructor() {
		super();
		this.color = "brownish-yellow";
		this.toasted = true;
		this.hasButter = true;
	}
}

class BreadFactory {
	public getBread(orderType: string = "common") {
		let bread: Bread;
		switch (orderType) {
			case "common":
				bread = new Bread();
				break;
			case "french":
				bread = new FrenchToast();
				break;
			case "brown":
				bread = new BrownBread();
				break;
		}
		return bread;
	}
}

const breadFactory = new BreadFactory();
const commonBread = breadFactory.getBread("common");
const frenchTaostedBread = breadFactory.getBread("french");
const brownBread = breadFactory.getBread("brown");
