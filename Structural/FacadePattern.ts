/**
 * As we program stuff, there are bound to be certain functionalities that get really complicated.
 * In this scenario, the best part about programming comes into play: Abstraction
 *
 * The Facade pattern basically involves creating abstrations on top of extremely complicated features
 * so that all the end consumer object has to do is make a few short function calls and that's it.
 *
 * This is one of the most useful patterns because all good software is built on top of the Facade pattern.
 *
 * References:
 * https://www.dofactory.com/javascript/design-patterns/facade
 * https://refactoring.guru/design-patterns/facade
 *
 * In this example I'm going to have an employee that needs to be onboarded, now the onboarding is a tedious task consisting of multiple systems.
 * But the onboarder just has to enter the basic information once and we are set.
 */

interface EmployeeRecord {
	name: string;
	id: string;
	salary: number;
}

class Database {
	public addEmployeeInformationToDatabase(
		employeeInfo: EmployeeRecord
	): EmployeeRecord {
		// Enter the information into the database.
		return employeeInfo;
	}
}

class AttendanceRoll {
	public addEmployeeToAttendanceRoll(
		employeeInfo: EmployeeRecord
	): EmployeeRecord {
		return employeeInfo;
	}
	// Add more complex funtionality like adding leaves, marking attendance etc.
}

class Payroll {
	public addEmployeeToPayroll(employeeInfo: EmployeeRecord): EmployeeRecord {
		return employeeInfo;
	}
	// Add more complex funtionality like adjusting salaries, adding bonuses.
}

/** Our Facade class */
class Onboarder {
	private employeeInfo: EmployeeRecord | null = null;
	constructor(employeeInfo: EmployeeRecord) {
		this.employeeInfo = employeeInfo;
	}

	public onboardEmployeeToAllSytems(): void {
		if (!this.employeeInfo) return;

		const database = new Database();
		database.addEmployeeInformationToDatabase(this.employeeInfo);
		const attendanceRoll = new AttendanceRoll();
		attendanceRoll.addEmployeeToAttendanceRoll(this.employeeInfo);
		const payroll = new Payroll();
		payroll.addEmployeeToPayroll(this.employeeInfo);

		// Done
		console.log(
			"Onboarded Employee to all concerned systems:",
			this.employeeInfo
		);
	}
}

// Add new employee to all our systems.
let newEmployee: EmployeeRecord = {
	name: "Devesh Kumar",
	id: "EMP0001",
	salary: 100000,
};
const onboarder = new Onboarder(newEmployee);
onboarder.onboardEmployeeToAllSytems();
