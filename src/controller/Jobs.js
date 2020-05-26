const JobStore = require('../stores/Jobs');

class Jobs {
    static async addJob(newJobData) {
        const newJob = await JobStore.addJob(newJobData);

        return newJob;
    }
    
    static async getJob(job_id) {
        const JobQuery = await JobStore.getJobById(job_id);
        return JobQuery;
    }

    static async updateJob(job_id, changes){
        const updatedJob = await JobStore.updateJob(job_id, changes);
        return updatedJob;
    }
}

module.exports = Jobs;