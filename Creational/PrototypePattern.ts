/**
 * The protoype pattern is especially useful when you want to create an exact replica of an existing object.
 * It reduces the boilerplate involved in copying an object to another.
 *
 * References:
 * -----------
 * https://www.dofactory.com/javascript/design-patterns/prototype
 * https://refactoring.guru/design-patterns/prototype
 */

class Rectangle {
	height: number;
	width: number;

	constructor(source?: Rectangle) {
		if (source) {
			this.height = source.height;
			this.width = source.width;
		} else {
			this.height = 0;
			this.width = 0;
		}
	}

	clone() {
		return new Rectangle(this);
	}
}
