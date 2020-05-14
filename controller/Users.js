const UserStore = require('../stores/Users');

export default class Users {
  static async getUserList() {
    const examplePeopleList = await UserStore.get();
    return examplePeopleList.data;
  }

}
