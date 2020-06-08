const UserStore = require('../stores/Users');
const UserFunctions = require('../utils/UserFunctions');

class Users {
  static async getUser(userId) {
    const [user] = await UserStore.getById(userId);
    if (user) {      
      return UserFunctions.userParse(user);
    }
    return null;
  }

  static async addUser(newUser) {
    const formattedUser = UserFunctions.userStringify(newUser);
    const user = await UserStore.insert(formattedUser);
    return user;
  } 

  static async updateUser(userId, changes) {
    if (changes.id || changes.email) { 
      return null; 
    }
    const formattedChanges = await UserFunctions.userStringify(changes);
    const updatedUser = await UserStore.update(userId, formattedChanges);
    return updatedUser;
  }

  static async deleteUser(userId){
    const user = await UserStore.remove(userId);
    return user;
  } 

  static async getUserByEmail(email) {
    const [user] = await UserStore.getUserByEmail(email);
    if (user) {      
      const formattedUser = UserFunctions.userParse(user);
      return formattedUser;
    }
    return null;
  }

  // V User to Jobs V

  static async getFavoriteJobs(userId) {
    const userJobs = await UserStore.getUserJobs(userId, 'favorite');
    return userJobs;
  }

  static async getIrrelevantJobs(userId) {
    const userJobs = await UserStore.getUserJobs(userId, 'irrelevant');
    return userJobs;
  }
  
  // static async saveJob(data) {
  //   const favoriteJob = await UserStore.saveJob(data);
  //   return favoriteJob;
  // }
}

module.exports = Users;
