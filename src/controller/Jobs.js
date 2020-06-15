const JobStore = require('../stores/Jobs');

class Jobs {
  static async getById(job_id) {
    const job = await JobStore.getJobById(job_id);
    return job;
  }

  static async addJob(newJobData) {
    const newJob = await JobStore.addJob(newJobData);
    return newJob;
  }    

  static async updateJob(job_id, changes){
    const updatedJob = await JobStore.updateJob(job_id, changes);
    return updatedJob;
  }

  static async saveJob(data, userId) {
    const jobId = await this.findOrCreateJob(data);
    const userJob = {
      user_id: parseInt(userId), 
      jobs_id: jobId, 
      status: "favorite"
    };
    const newUserJob = await this.markJob(userJob);
    return newUserJob;
  }

  static async irrelevantJob(data, userId) {
    const jobId = await this.findOrCreateJob(data);
    const userJob = {
      user_id: parseInt(userId), 
      jobs_id: jobId, 
      status: "irrelevant"
    };
    const newUserJob = await this.markJob(userJob);
    return newUserJob;
  }

  static async addColumn(data) {
    const newColumn = await JobStore.newColumn(data);
    return newColumn;
  }

  static async getColumn(userId) {
    const columns = await JobStore.getColumn(userId);
    return columns;
  }

  static async removeColumn(id) {
    const deleted = await JobStore.deleteColumn(id);
    return deleted;
  }

  static async newJobColumn(data) {
    const newJobColumn = await JobStore.newJobColumn(data);
    return newJobColumn;
  }

  static async updateJobColumn(id, changes) {
    const updateJobColumn = await JobStore.updateJobColumn(id, changes);
    console.log(changes);
    return updateJobColumn;
  }


  static async findOrCreateJob(data) {
    const [existingJob] = await JobStore.getJobByDsId(data.ds_id);
    if (!existingJob) {
      const [newJob] = await JobStore.addJob(data);
      console.log(newJob);
      return newJob.id;
    } else {
      return existingJob.id;
    }
  }

  static async markJob(userJob) {
    const newUserJob = JobStore.saveJob(userJob);
    return newUserJob
  }

}

module.exports = Jobs;
