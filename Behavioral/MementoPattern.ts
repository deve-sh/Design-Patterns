/**
 * There are times when you want to save the state of an object and use it or revert to it later.
 * For example: State Management Tools have their states destroyed the moment the user closes the browser.
 * Another example: Text Editors that need functionality to go to a previous state in case the user messes up.
 *
 * In all the above cases we can have a save and revert to previous state functionality where the object stores its state in an external store
 * and then uses the stored state to revert. This is what's called the Memento Design Pattern!
 *
 * References:
 * https://refactoring.guru/design-patterns/memento
 * https://www.dofactory.com/javascript/design-patterns/memento#participants
 */

class Database {
	// We'll store state on a 'commit' call to localStorage.
	// You can revert to the last stored instance using 'revert'.
	data: any = null;

	constructor(initialData?: any) {
		if (initialData) this.data = initialData;
	}

	updateData(data: any): any {
		this.data = data;
		return this.data;
	}

	commit(): void {
		try {
			let JSONifiedData = JSON.stringify(this.data);
			localStorage.setItem("stored-data", JSONifiedData);
		} catch (err) {
			console.error(err);
		}
	}

	revert(): void {
		try {
			let previouslyStoredData = localStorage.getItem("stored-data");
			if (!previouslyStoredData) throw new Error("No savepoints found.");

			let data = JSON.parse(previouslyStoredData);
			this.data = data;
		} catch (err) {
			console.error(err);
		}
	}

	getData(): any {
		return this.data;
	}
}

let db = new Database({ isOK: true });
db.commit(); // Save database state.
db.updateData({ isOK: false }); // Mess up our data.
db.revert(); // Revert from store to previous saved state.
console.log(db.getData());
