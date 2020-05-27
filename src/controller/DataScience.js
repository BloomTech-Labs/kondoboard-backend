const DSStore = require('../stores/DataScience');

class DataScience {
  static async getAllData() {
    const data = [];
    const users = await DSStore.getAllUsers();
    for (let user of users) {
      const dataPoint = {};
      dataPoint.user = user;
      dataPoint.savedJobs = await DSStore.getUserSavedJobs(user.id);
      dataPoint.irrelevantJobs = await DSStore.getUserIrrelevantJobs(user.id);
      data.push(dataPoint);
    }
    return data;
  }
}

module.exports = DataScience;