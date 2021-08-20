/**
 * Many a times, you will have data structures in your code that will require different methods of traversal, some structured objects will be in the form of trees,
 * others in Graphs, others in plain list. In that case, we have a simple Iterator implementation.
 *
 * The iterator is a class that contains some standard fields and a few functions, and abstracts the iteration part from the user, so everything is a few standard calls to the Iterator object.
 *
 * References:
 * https://refactoring.guru/design-patterns/behavioral-patterns
 * https://www.dofactory.com/javascript/design-patterns/iterator
 */

class IteratorClass {
	private list: any[] = [];
	public currentIndex: number = 0;

	constructor(list: any[]) {
		this.list = list;
		this.currentIndex = 0;
	}

	public hasNext(): boolean {
		return this.currentIndex < this.list.length;
	}

	public reset(): void {
		this.currentIndex = 0;
	}

	public first(): void {
		return this.list[0];
	}

	public last(): void {
		return this.list[this.list.length - 1];
	}

	public next(): void {
		return this.list[this.currentIndex++];
	}

	public forEach(callback: (listItem: any) => any): void {
		for (let i = 0; i < this.list.length; i++) callback(this.list[i]);
	}
}

let iter = new IteratorClass([1, 2, 3]);
iter.forEach((element) => {
	console.log(element);
});
