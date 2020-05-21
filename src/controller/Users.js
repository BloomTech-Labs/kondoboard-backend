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
    const user = await UserStore.insert(userData);
    console.log(user);
    return user;
  }

  //------------------
  static async getUserSavedJobs(id) {
    const user = await UserStore.getUserFavorited(id);
    console.log(user);

    return user;
  }
  //------------------

  static async addUserFavorited(id, favorited) {
    const user = await UserStore.addUserFavorited(id, favorited);
    console.log(user);

    return user;
  }
  //not working
  static async addSkill(user_id, newSkill) {
   const user = await UserStore.getById(user_id);
   const skills = user[0].skills;
   const skillsArray = skills.split(",");
   skillsArray.push(newSkill);

    const skill = await UserStore.updateUserSkills(user_id, skillsArray);
    console.log(skillsArray);

    return skill
  }

  static async addTag(newTag) {
    const tag = await UserStore.insertTag(newTag);
    console.log(tag);
    return tag;
  }

  static async updateUser(id, changes) {
    const user = await UserStore.update(id, changes);
    console.log(user);
    return user;
  }

  static async deleteUser(id){
    const user = await UserStore.remove(id);
    console.log("Deleted user: ", user);
    return user;
  }
}

module.exports = Users;