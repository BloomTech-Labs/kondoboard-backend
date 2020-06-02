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
        let jobId;
        const [getJob] = await JobStore.getJobByDsId(data.job.ds_id);
        if (!getJob) {
            const [newJob] = await JobStore.addJob(data.job);
            jobId = newJob.id;
        } else {
            jobId = getJob.id;
        }
        const userJob = {user_id: userId, jobs_id: jobId, status: data.status};
        const savedUserJob = await JobStore.saveJob(userJob);
        return savedUserJob;
    }
}

module.exports = Jobs;