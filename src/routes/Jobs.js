const router = require('express').Router();
const JobsController = require('../controller/Jobs');

// Add Job
router.post('/', async (req, res) => {
    const new_job = req.body;
    try {
        const job = await JobsController.addJob(new_job);
        if(!job){
            res.status(404).json({ message: 'Unable to add job' })
        }
    res.status(201).json({ message: 'New job added' })
    } catch {
        res.status(500).json({ error: 'Server Error' });
    }
})

// Update Job
router.put('/:job_id', async (req, res) => {
    const job_id = req.params.job_id;
    const changes = req.body;
    try{
        const updatedJob = await JobsController.updateJob(job_id, changes);
        if(!updatedJob){
            res.status(404).json({ message: 'Invalid request' })
        }
    res.status(201).json(await JobsController.getJob(job_id));
    }catch{
        res.status(500).json({ error: 'Server Error' })
    }
})


module.exports = router;
