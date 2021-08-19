/**
 * The proxy design-pattern is a useful pattern that employs the concept of putting one object in front of another object
 * that mimics the functionality of the other object.
 *
 * Ex: A backend server acting on behalf of the database, or one server acting on behalf of the database.
 * But the biggest use case of this pattern is the caching mechanism in front of databases and memoizations.
 */

interface DataEntry {
	id: number;
	name: string;
}

class Database {
	private data: DataEntry[] = [
		{ id: 1, name: "abc" },
		{ id: 2, name: "def" },
	];

	getData(id: number): DataEntry {
		return this.data.find((entry) => entry.id === id);
	}
}

class DBCache {
	// Any request to the database, goes through this cache first.
	// The cache checks whether it has the value already, otherwise forwards the request to the database.
	private cache: { [id: number]: DataEntry } = {};
	private database: Database = null;

	constructor() {
		this.database = new Database();
	}

	getData(id: number) {
		if (this.cache[id]) return this.cache[id];
		let fetchedData = this.database ? this.database.getData(id) : null;
		if (fetchedData) this.cache[id] = fetchedData;
		return fetchedData;
	}
}

let newDatabase = new DBCache();
console.log(newDatabase.getData(1));
console.log(newDatabase.getData(2));
console.log(newDatabase.getData(3));
