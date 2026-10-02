/**
 * task.hello.world
 * @class TaskHelloWorld
 */
class TaskHelloWorld {
  /**
   * Creates an instance of TaskHelloWorld
   */
  constructor() {}

  /**
   * execute
   * @return {Promise}
   */
  async execute() {
    const organisations = await Buttress.getCollection('organisation').search({
      status: {
        $eq: 'DISSOLVED',
      },
    });

    for await (const organisation of organisations) {
      await Buttress.getCollection('organisation').update(organisation.id, [{
        path: 'status',
        value: 'ACTIVE',
      }]);
    }
  }
}

module.exports = TaskHelloWorld;