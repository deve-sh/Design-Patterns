/**
 * The State Pattern is a behavioral design-pattern that dictates or changes the behaviour of an object based on its state.
 * For example: A variable inside the object reflects a change in the functionality, it seems as if the object has changed its class.
 *
 * Example: Traffic Lights, State Machines
 */

class TrafficLight {
	lightColor: string = "red";

	constructor() {
		// Let's initialize the traffic light, this is the moment it is put on the road and configured to show a sequence of colours.
		setInterval(this.showSignal, 1000);
	}

	showSignal(): void {
		// State machine, shows the signal based on the current light active.
		switch (this.lightColor) {
			case "red":
				console.log("Stop!");
				this.lightColor = "green";
				break;
			case "yellow":
				console.log("Wait.");
				this.lightColor = "red";
				break;
			case "green":
				console.log("Go!");
				this.lightColor = "yellow";
				break;
			default:
				break;
		}
	}
}

let streetTrafficLight = new TrafficLight();