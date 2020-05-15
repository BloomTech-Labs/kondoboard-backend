const UserStore = require('../stores/Users');

class Users {
  static async getUserList() {
    const userListQuery = await UserStore.get();
    console.log(userListQuery);
    return userListQuery;
  }
}

module.exports = Users;