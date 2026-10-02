/**
 * path.mutation.edit.organisation.name
 * @class PathMutationEditOrganisationName
 */
class PathMutationEditOrganisationName {
	/**
	 * Creates an instance of PathMutationEditOrganisationName
	 */
	constructor() {}

	/**
	 * execute
	 * @return {Promise}
	 */
	async execute() {
		if (!lambdaData.some((item) => item.values.some((v) => v === 'DPC LTD'))) return;

		const organisations = await Buttress.getCollection('organisation').search({
			name: {
				$eq: 'DPC LTD',
			},
		});

		for await (const organisation of organisations) {
			await Buttress.getCollection('organisation').update(organisation.id, [{
				path: 'name',
				value: 'Test Lambda Path Mutation',
			}]);
		}
	}
}

module.exports = PathMutationEditOrganisationName;