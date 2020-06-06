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

  // @NOTE: lets make this 4 methods
  //    1 - a public saveJob that FE calls when a user clicks the save button.
  //    2 - a public irrelevantJob that FE calls when a user marks it irrelevant.
  //    3 - a private findOrCreateJob that does lines 27-34.
  //    4 - a private markJob that does lines 40-41.
  // So the FE calls endpoint 1 or 2 depending on how they want to save the job, then we find the job id, 
  // or create the job.  After that then back in 1 or 2, build the object on 35-39 and pass it into markJob.
  static async saveJob(data, userId) {
    let jobId;
    const [getJob] = await JobStore.getJobByDsId(data.job.ds_id);
    if (!getJob) {
      const [newJob] = await JobStore.addJob(data.job);
      jobId = newJob.id;
    } else {
      jobId = getJob.id;
    }
    const userJob = {
      user_id: userId, 
      jobs_id: jobId, 
      status: data.status,
    };
    const savedUserJob = await JobStore.saveJob(userJob);
    return savedUserJob;
  }
}

module.exports = Jobs;
