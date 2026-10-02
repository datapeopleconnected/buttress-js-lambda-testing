/**
 * route.add.organisation
 * @class RouteAddOrganisation
 */
class RouteAddOrganisation {
  /**
   * Creates an instance of RouteAddOrganisation
   */
  constructor() {}

  /**
   * execute
   * @return {Promise}
   */
  async execute() {
    await Buttress.getCollection('organisation').save(lambdaData);
  }
}

module.exports = RouteAddOrganisation;