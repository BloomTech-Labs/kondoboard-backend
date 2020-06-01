const UserStore = require('../stores/Users');
const UserFunctions = require('../utils/UserFunctions');

class Users {

  static async getUser(user_id) {
    const user = await UserStore.getById(user_id);
    if (user.length) {      
      return UserFunctions.userParse(user[0]);
    }
    return null;
  }

  static async addUser(newUser) {
    UserFunctions.userStringify(newUser);
    const user = await UserStore.insert(newUser)
    return user;
  } 

  static async updateUser(user_id, changes) {
    if (changes.id || changes.email) { return null; };
    UserFunctions.userStringify(changes);

    const updatedUser = await UserStore.update(user_id, changes);
    return updatedUser;
  }

  static async deleteUser(id){
    const user = await UserStore.remove(id);
    return user;
  } 

  static async getUserByEmail(email) {
    const user = await UserStore.getUserByEmail(email);
    if (user.length) {      
      return UserFunctions.userParse(user[0]);
    }
    return null;
  }

  // V User to Jobs V

  static async getFavoriteJobs(user_id) {
    const userJobs = await UserStore.getUserJobs(user_id, 'favorite');
    return userJobs;
  }

  static async getIrrelevantJobs(user_id) {
    const userJobs = await UserStore.getUserJobs(user_id, 'irrelevant');
    return userJobs;
  }
  
  static async saveJob(data) {
    const favoriteJob = await UserStore.saveJob(data);
    return favoriteJob;
  }

}

module.exports = Users;
