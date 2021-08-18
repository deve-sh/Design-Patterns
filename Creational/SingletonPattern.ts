/**
 * A singleton is a class that can only have one instance, very useful when you have a resource that needs to be initialized only once.
 * Like database connections.
 * 
 * Reference: https://refactoring.guru/design-patterns/singletons
 */

class DatabaseDriver {
	private databaseConnection: String = ""; // Without singleton, use a static variable for simplicity.

	connectToDatabase(connectionURI: String) {
		this.databaseConnection = connectionURI;
	}

	constructor(connectionURI: String) {
		this.connectToDatabase(connectionURI);
	}

	getConnection(): String {
		return this.databaseConnection;
	}
}

/**
 * Creating a singleton instance of the database driver, so all app components connect to one instance.
 */

let dbDriverInstance: DatabaseDriver = null;
function getDBDriverInstance() {
	if (!dbDriverInstance) {
		dbDriverInstance = new DatabaseDriver("connectionURI");
		return dbDriverInstance;
	} else return dbDriverInstance;
}

// Now however many times you call getDBDriverInstance, the instance returned to you will be the one that was initialized in the beginning.
