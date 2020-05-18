const UserStore = require('../stores/Users');

class Users {
  static async getUserList() {
    const userListQuery = await UserStore.getAllUsers();
    console.log(userListQuery);
    return userListQuery;
  }

  static async getUser(id) {
    const userQuery = await UserStore.getById(id);
    console.log(userQuery);
    return userQuery;
  }

  static async addUser(userData) {
    const user = await UserStore.insert(userData)
    console.log(user);
    return user;
  }

  static async updateUser(id, changes) {
    const user = await UserStore.update(id, changes);
    console.log(user);
    return user;
  }
}

module.exports = Users;