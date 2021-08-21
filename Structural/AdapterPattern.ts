/**
 * Whenever you think of Adapter, think 'middleman' or 'converter' or 'transformer'.
 * It deals with two or more objects that use incompatible data to work with each other, in order to do so, there has to be an adapter in the middle.
 *
 * Think of it like your laptop charging from the power grid, needing an adapter in the middle to convert the power to the form it needs.
 *
 * Examples:
 * - Client and Servers that communicate with each other but the client needs JSON, whereas the server sends XML.
 * - Libraries that deal with time, but one requires milliseconds and the other nanoseconds.
 * - Libraries in which one needs data in camelCase, the other in snake_case, and other in PascalCase.
 * - Models that serve as data entry points are also examples of adapters.
 *
 * I can go on the whole day with examples since it's a very commonly used pattern even in functional programming.
 */

interface ServerData {
	n_users: Number;
	n_notes: Number;
}

interface ProcessedServerData {
	nUsers: Number;
	nNotes: Number;
}

class Server {
	public getData() {
		return {
			n_users: 5,
			n_notes: 25,
		};
	}
}

class Adapter {
	private processedData: ProcessedServerData | null = null;

	constructor(data: ServerData) {
		this.processedData = {
			nUsers: data.n_users,
			nNotes: data.n_notes,
		};
	}

	public getData() {
		return this.processedData;
	}
}

class Client {
	private data: ProcessedServerData | null = null;

	public fetchData() {
		const fetchedData = new Server().getData();
		this.data = new Adapter(fetchedData).getData();
	}

	public printData() {
		console.log(this.data);
	}
}

const client = new Client();
client.fetchData();
client.printData();