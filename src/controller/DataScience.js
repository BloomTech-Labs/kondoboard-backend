const DSStore = require('../stores/DataScience');

class DataScience {
  static async getAllData() {
    const users = await DSStore.getAllUsers();
    const data = [];
    for (const user of users) {
      const dataPoint = {};
      dataPoint.user = user;
      dataPoint.savedJobs = await DSStore.getUserSavedJobs(user.id);
      dataPoint.irrelevantJobs = await DSStore.getUserIrrelevantJobs(user.id);
      data.push(dataPoint);
    }
    return data;
  }

  static async getSingleUser(userId) {
    const userData = {};
    const [user] = await DSStore.getSingleUser(userId);
    if (!user) {
      return null;
    } else {      
      userData.user = user;
      userData.savedJobs = await DSStore.getUserSavedJobs(userId);
      userData.irrelevantJobs = await DSStore.getUserIrrelevantJobs(userId);
      return userData;
    }    
  }
}

module.exports = DataScience;
