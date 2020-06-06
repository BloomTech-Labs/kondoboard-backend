const DSStore = require('../stores/DataScience');

class DataScience {
  static async getAllData() {
    const users = await DSStore.getAllUsers();
    const data = [];
    for (let user of users) {
      const dataPoint = {};
      dataPoint.user = user;

      dataPoint.user.skills = JSON.parse(dataPoint.user.skills);
      dataPoint.user.locations = JSON.parse(dataPoint.user.locations);

      dataPoint.savedJobs = await DSStore.getUserSavedJobs(user.id);
      dataPoint.irrelevantJobs = await DSStore.getUserIrrelevantJobs(user.id);
      data.push(dataPoint);
    }
    return data;
  }
}

module.exports = DataScience;
