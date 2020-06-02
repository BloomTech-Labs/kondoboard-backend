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
        console.log(userId);
        const DS_id = data.job.ds_id;
        // console.log(DS_id);
        const [jobId] = await JobStore.getJobByDsId(DS_id);
        console.log(jobId, "~");
        if (!jobId) {
            const [newjobId] = await JobStore.addJob(data.job)
            console.log(jobId);
        }
        const userJob = {user_id: userId, jobs_id: jobId.id, status: data.status};
        console.log(userJob);
        const favoriteJob = await JobStore.saveJob(userJob);
        return favoriteJob;
    }
}

module.exports = Jobs;