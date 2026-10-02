

/**
 * route.hello.world
 * @class RouteHelloWorld
 */
 class RouteHelloWorld {
	/**
	 * Creates an instance of RouteHelloWorld
	 */
	constructor() {}

	/**
	 * execute
	 * @return {Promise}
	 */
	execute() {
		lambda.log(`Hello world`);
	}
}

module.exports = RouteHelloWorld;
