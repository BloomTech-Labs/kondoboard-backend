const UserStore = require('../stores/Users');
const UserFunctions = require('../utils/UserFunctions');

class Users {
  static async getUser(userId) {
    const [user] = await UserStore.getById(userId);    
    return user;
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
    return user;
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
  
  // User Tags

  static async getTags(user_id) {
    const tag = await UserStore.getTags(user_id);
    return tag;
  }

  static async addTag(newTag) {
    const [tag] = await UserStore.addTag(newTag);
    return tag;
  }

  static async updateTag(id, changes) {
    const updatedTag = await UserStore.updateTag(id, changes);
    return updatedTag;
  }

  static async deleteTag(tag_id){
    const tag = await UserStore.removeTag(tag_id);
    return tag;
  } 

  static async addJobTag(tagId, usersJobId) {
    const [savedJob] = await UserStore.getJobTags(usersJobId);
    const updatedTags = savedJob.tags;
    updatedTags.push(tagId);
    const formattedUpdatedTags = await UserFunctions.tagsStringify(updatedTags);


    const newTag = await UserStore.updateJobTag(usersJobId, formattedUpdatedTags);
    return newTag;
  }

  static async removeJobTag(tagId, usersJobId) {
    const [savedJob] = await UserStore.getJobTags(usersJobId);
    const tagsArray = savedJob.tags;
    console.log(tagsArray);

    // const formattedUpdatedTags = await UserFunction.tagsStringify(updatedTags);
    // const [removedTag] = await UserStore.updateJobTag(tagId, formattedUpdatedTags);
    
    return removedTag;
  }


}

module.exports = Users;
