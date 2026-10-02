/**
 * route.create.ticket
 * Saves a ticket built from the schema's defaults, which gives its ref a new uuid in the lambda's own isolate.
 * @class RouteCreateTicket
 */
class RouteCreateTicket {
  /**
   * Creates an instance of RouteCreateTicket
   */
  constructor() {}

  /**
   * execute
   * @return {Promise}
   */
  async execute() {
    const ticket = Buttress.getCollection('ticket').createObject();
    ticket.title = lambdaData.title;

    await Buttress.getCollection('ticket').save(ticket);
  }
}

module.exports = RouteCreateTicket;
