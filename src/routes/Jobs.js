//Job Router (All start with /api/jobs)
const router = require('express').Router();
const JobsController = require('../controller/Jobs');

//Get job by ID
router.get('/:job_id', async (req, res) => {
  const jobId = req.params.job_id;
  try {
    const job = await JobsController.getById(jobId);    
    if (!job.length){
      res.status(400).json({ message: 'Unable to get job' });
    } else {
      res.status(201).json(job);
    }
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Add Job
router.post('/', async (req, res) => {
  const newJob = req.body;
  try {
    const job = await JobsController.addJob(newJob);
    if (!job){
      res.status(400).json({ message: 'Unable to add job' });
    } else {
      res.status(201).json(job);
    }
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Update Job -- probably not working, might not need
router.put('/:job_id', async (req, res) => {
  const jobId = req.params.job_id;
  const changes = req.body;
  try {
    const updatedJob = await JobsController.updateJob(jobId, changes);
    if (!updatedJob) {
      res.status(400).json({ message: 'Invalid request' });
    } else {
      res.status(201).json(await JobsController.getById(jobId));
    }
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Save new user_job
router.post('/:user_id/save_job', async (req, res) => {
  const data = req.body;
  const userId = req.params.user_id;    
  try {
    const newJob = await JobsController.saveJob(data, userId);
    if (!newJob.length) {
      res.status(400).json({ message: 'Invalid Request' });
    } else {
      res.status(200).json({ message: `Job saved as ${data.status}` });
    }
  } catch(err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: `Server error` });
  }
});


module.exports = router;
