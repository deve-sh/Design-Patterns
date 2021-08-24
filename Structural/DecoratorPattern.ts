/**
 * The decorator is one of the most useful patterns when building large applications. Particularly APIs.
 *
 * A decorator is a wrapper around an object that adds specific functionality to it.
 *
 * Think of it like an API Framework 'decorating' a simple function with the ability to be called from an HTTP Endpoint.
 *
 * A simple way to think of it is to have a User class, and then a wrapper that adds functionality to print a welcome message, specific to the details of the User Object.
 *
 * References:
 * ------------
 * https://www.dofactory.com/javascript/design-patterns/decorator
 * https://refactoring.guru/design-patterns/decorator
 * https://www.datacamp.com/community/tutorials/decorators-python
 */

interface APIRequest {
	body: any;
}

interface APIResponse {
	send: (any?: any) => any;
}

class APIController {
	call(req: APIRequest, res: APIResponse) {
		console.log("API Controller called: ", req);
		return res.send("Hey There");
	}
}

class APIControllerDecorator {
	// This decorator gives the controller the ability to get and send responses from API HTTP Endpoints.

	constructor(controller: APIController) {
		let req: APIRequest = { body: {} };
		let res: APIResponse = { send: console.log };

		controller.call(req, res);
	}
}

const apiController = new APIController();
const callableAPIDecorator = new APIControllerDecorator(apiController);
