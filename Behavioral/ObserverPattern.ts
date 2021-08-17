/**
 * The Observer 'Behavioral' Design pattern is a useful pattern for communication between parts of a system.
 * It Behaves exactly like a pub-sub model, where a receiver defines/requests to be notified whenever an "event" occurs.
 * The publisher class maintains a list of subscriptions by event and notifies the subscribers based on that.
 */

interface BookData {
	name: string;
}

class BookStore {
	private subscribers: Function[] = []; // Maintains list of people that have subscribed to whenever a new book arrives.

	subscribe(callback: () => void): boolean {
		// Check if the person has not already subscribed.
		for (let i = 0; i < this.subscribers.length; i++)
			if (this.subscribers[i] === callback) return false;
		this.subscribers.push(callback);
		return true;
	}

	unsubscribe(callback: () => void): boolean {
		this.subscribers = this.subscribers.filter((func) => func !== callback);
		return true;
	}

	publishNewBookEvent(data: BookData): void {
		for (let callback of this.subscribers) {
			callback("A New Book has been added: " + data.name);
		}
	}
}

let bookStore = new BookStore();
bookStore.subscribe(console.log);
bookStore.publishNewBookEvent({ name: "Hey There Pam & Jim!" });
