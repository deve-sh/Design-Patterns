/**
 * The Visitor pattern adds additional operable functionality to a program without altering
 * the actual objects themselves.
 *
 * For example: You might need JSON, XML Exports for ceratin Objects which are meant to do something else,
 * so you can simply write a new Class called Visitor to do it not just for one object, but for many of the same type.
 *
 * References:
 * https://www.dofactory.com/javascript/design-patterns/visitor
 * https://refactoring.guru/design-patterns/visitor
 */

class User {
	private name: string = "";
	private city: string = "";

	constructor(name: string, city: string) {
		this.name = name;
		this.city = city;
	}

	getData(): { name: string; city: string } {
		return { name: this.name, city: this.city };
	}
}

class Admin {
	private name: string = "";
	private level: string = "";

	constructor(name: string, level: string) {
		this.name = name;
		this.level = level;
	}

	getData(): { name: string; level: string } {
		return { name: this.name, level: this.level };
	}
}

class JSONVisitor {
	visit(instance: User | Admin): string {
		let objData = instance.getData();
		return JSON.stringify(objData);
	}
}

const user = new User("Dev", "Van Couver");
const admin = new Admin("Ayu", "New York");

const JSONVisitorInstance = new JSONVisitor();

console.log(JSONVisitorInstance.visit(user));
console.log(JSONVisitorInstance.visit(admin));
