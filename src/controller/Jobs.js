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

  static async updateJob(job_id, changes) {
    const updatedJob = await JobStore.updateJob(job_id, changes);
    return updatedJob;
  }

  static async saveJob(data, userId) {
    const jobId = await this.findOrCreateJob(data);
    const userJob = {
      user_id: parseInt(userId), 
      jobs_id: jobId, 
      status: 'favorite',
    };
    const newUserJob = await this.markJob(userJob);
    return newUserJob;
  }

  static async irrelevantJob(data, userId) {
    const jobId = await this.findOrCreateJob(data);
    const userJob = {
      user_id: parseInt(userId), 
      jobs_id: jobId, 
      status: 'irrelevant',
    };
    const newUserJob = await this.markJob(userJob);
    return newUserJob;
  }

  //~~~~~~ Columns ~~~~~~

  static async addColumn(data) {
    const newColumn = await JobStore.newColumn(data);
    return newColumn;
  }

  static async getColumn(userId) {
    const columns = await JobStore.getColumn(userId);
    const fullData = [];
    for (const column of columns) {
      const data = {};
      let jobObjects = await JobStore.getJobsInColumns(column.id);
      let list = [];
      for (let jobs of jobObjects) {
        list.push(jobs.id)
      }
      data.column = column;
      data.column.savedJobs = list;
      fullData.push(data.column);
    }
    return fullData;
  }

  static async updateColumn(id, changes) {
    const updateColumn = await JobStore.updateColumn(id, changes);
    return updateColumn;
  }

  static async removeColumn(id) {
    const deleted = await JobStore.deleteColumn(id);
    return deleted;
  }

  static async newJobColumn(data) {
    const newJobColumn = await JobStore.newJobColumn(data);
    return newJobColumn;
  }

  static async getJobColumns(user_id) {
    const getJobColumns = await JobStore.getJobColumns(user_id);
    return getJobColumns;
  }

  static async updateJobColumn(id, column) {
    const updateJobColumn = await JobStore.updateJobColumn(id, column);
    return updateJobColumn;
  }

  static async findOrCreateJob(data) {
    const [existingJob] = await JobStore.getJobByDsId(data.ds_id);
    if (!existingJob) {
      const [newJob] = await JobStore.addJob(data);
      return newJob.id;
    } else {
      return existingJob.id;
    }
  }

  static async markJob(userJob) {
    const newUserJob = JobStore.saveJob(userJob);
    return newUserJob;
  }

}

module.exports = Jobs;
