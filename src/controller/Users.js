const UserStore = require('../stores/Users');

class Users {

  // ~~~~~~~~~~~~~~~ Users ~~~~~~~~~~~~~~

  static async getUser(user_id) {
    const [user] = await UserStore.getById(user_id);
    return user;
  }

  static async getUserByEmail(email) {
    const [user] = await UserStore.getUserByEmail(email);
    return user;
  }

  static async addUser(newUser) {
    const [user] = await UserStore.insert(newUser);
    return user;
  }  

  static async updateUser(user_id, changes) {
    const updatedUser = await UserStore.update(user_id, changes);
    return updatedUser;
  }

  static async deleteUser(user_id){
    const user = await UserStore.remove(user_id);
    return user;
  }

  // ~~~~~~~~~~~~~ Users Info ~~~~~~~~~~~~

  static async addSkill(user_id, skill) {
    // Get user.skills, convert to array, push new skill on
    const currentSkills = await UserStore.getById(user_id);
    const skillsArray = currentSkills[0].skills.split(',');
    skillsArray.push(skill);
    // SkillsArray to string
    const updatedSkills = skillsArray.toString();
    // format for update query
    const changes = { "skills": updatedSkills };
   
    const updateSkills = await UserStore.update(user_id, changes);
    
    return updateSkills;
  }

  static async removeSkill(user_id, skill) {
    
    const updateSkills = await UserStore.update(user_id, skillsArray);

    return updateSkills;
  }  

  static async addLocation(user_id, location) {
   
    const updateLocations = await UserStore.update(user_id, locationsArray);
    
    return updateLocations;
  }

  static async removeLocation(user_id, location) {
    
    const updateLocations = await UserStore.update(user_id, locationsArray);

    return updateLocations;
  }

  static async toggleRemote(user_id) {
    const remoteStatus = await UserStore.toggleRemote(user_id);

    return remoteStatus;
  }

  // ~~~~~~~~~~~ Users Saved Jobs ~~~~~~~~~~
  
  static async getFavoriteJobs(user_id) {
    const getFavorited = await UserStore.getFavoriteJobs(user_id);

    return getFavorited; 
  }

  static async saveFavoriteJob(user_id, job_id) {
    const addFavorite = await UserStore.addFavoriteJob(user_id, job_id);

    return addFavorite;
  }

  static async getIrrelevantJobs(user_id) {
    const getIrrelevant = await UserStore.getIrrelevantJobs(user_id);

    return getIrrelevant;
  }

  static async saveIrrelevantJob(user_id, job_id) {
    const addIrrelevant = await UserStore.addIrrelevantJob(user_id, job_id);

    return addIrrelevant;
  }

  static async toggleArchive(saved_job_id) {
    const toggleArchive = await UserStore.archiveJob(saved_job_id);

    return toggleArchive;
  }

  // ~~~~~~~~~~~ Users Tags ~~~~~~~~~~

   static async getUserTags(user_id) {
    const userTags = await UserStore.getUserTags(user_id);

    return userTags; 
  }

  static async addUserTag(userTag) {
    const newUserTag = await UserStore.addUserTag(userTag);

    return newUserTag;
  }

  static async updateUserTag(tag_id, changes) {
    const updateUserTag = await UserStore.updateUserTag(tag_id, changes);

    return updateUserTag;
  }

  static async removeUserTag(tag_id) {
    const removeUserTag = await UserStore.removeUserTag(tag_id);

    return removeUserTag;
  }

}

module.exports = Users;
