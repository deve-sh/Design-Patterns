/**
 * The mediator pattern is a useful pattern to communicate/orchestrate different objects.
 * Kind of like a traffic policeman controlling multiple instances of vehicles.
 *
 * Other notable examples include: Chat Rooms, Client-Server-Client, Microservice Orchestration.
 */

class Vehicle {
	public name: string = "";

	constructor(name: string) {
		this.name = name;
	}

	public go(): void {
		console.log(`${this.name} moving.`);
	}

	public stop(): void {
		console.log(`${this.name} stopping.`);
	}
}

class Car extends Vehicle {
	constructor() {
		super("Car");
	}
}

class Bus extends Vehicle {
	constructor() {
		super("Car");
	}
}

/** The Traffic Policeman mediator class */
class TrafficPoliceman {
	public car = new Car();
	public bus = new Bus();

	work(): void {
		this.bus.stop();
		this.car.go();
		this.car.stop();
		this.bus.go();
		this.car.go();
	}
}

let policeMan = new TrafficPoliceman();
policeMan.work();
