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
}

module.exports = Jobs;