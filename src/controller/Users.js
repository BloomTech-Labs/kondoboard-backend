const UserStore = require('../stores/Users');

class Users {
  static async getUser(user_id) {
    const [user] = await UserStore.getById(user_id);
    return user;
  }

  static async getUserByEmail(email) {
    const [user] = await UserStore.getUserByEmail(email);
    return user;
  }

  /*
    @TODO: make a UserHelpers class in utils and make this a static method where you pass a user and it returns a formated user.
    (used in getById and getUserByEmail)
    if (user.length) {
      user[0].skills = JSON.parse(user[0].skills);
      user[0].locations = JSON.parse(user[0].locations);
  */

  static async getFavoriteJobs(user_id) {
    const userJobs = await UserStore.getUserJobs(user_id, 'favorite');
    return userJobs;
  }

  static async getIrrelevantJobs(user_id, type) {
    const userJobs = await UserStore.getUserJobs(user_id, 'irrelevant');
    return userJobs;
  }

  static async addUser(newUser) {
    const [user] = await UserStore.insert(newUser);
    return user;
  }  

  static async updateUser(user_id, changes) {
    const updatedUser = await UserStore.update(user_id, changes);
    return updatedUser;
  }

  /*
    @TODO: make a UserHelpers class in utils and make this a static method where you pass user data object and it returns a formated object.
    (used in updateUser)
      if (changes.id || changes.email) {
        return null;
      };
      if (changes.skills) {
        changes.skills = JSON.stringify(changes.skills);
      };
      if (changes.locations) {
        changes.locations = JSON.stringify(changes.locations);
      };    
  */

  static async deleteUser(user_id){
    const user = await UserStore.remove(user_id);
    return user;
  }
}

module.exports = Users;
