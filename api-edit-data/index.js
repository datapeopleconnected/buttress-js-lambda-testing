/**
 * route.edit.organisation
 * @class RouteEditOrganisation
 */
class RouteEditOrganisation {
	/**
	 * Creates an instance of RouteEditOrganisation
	 */
	constructor() {}

	/**
	 * execute
	 * @return {Promise}
	 */
	async execute() {
		const organisations = await Buttress.getCollection('organisation').search({
			status: {
				$eq: 'LIQUIDATION',
			},
		});

		for await (const organisation of organisations) {
			await Buttress.getCollection('organisation').update(organisation.id, [{
				path: 'name',
				value: 'Test Lambda API',
			}]);
		}
	}
}

module.exports = RouteEditOrganisation;