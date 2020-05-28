const UserStore = require('../stores/Users');

class Users {

  static async getUser(user_id) {
    const user = await UserStore.getById(user_id);
    if (user.length) {
      user[0].skills = JSON.parse(user[0].skills);
      user[0].locations = JSON.parse(user[0].locations);
      return user[0];
    }

    return null;
  }

  static async getUserByEmail(email) {
    const user = await UserStore.getUserByEmail(email);
    if (user.length) {
      user[0].skills = JSON.parse(user[0].skills);
      user[0].locations = JSON.parse(user[0].locations);
      return user[0];
    }

    return null;
  }

  static async addUser(newUser) {
    const user = await UserStore.insert(newUser)
    return user;
  }  

  static async updateUser(user_id, changes) {
    if(changes.id || changes.email){
      return null;
    };
    const updatedUser = await UserStore.update(user_id, changes);
    return updatedUser;
  }

  static async deleteUser(user_id){
    const user = await UserStore.remove(user_id);
    return user;
  }

}

module.exports = Users;
