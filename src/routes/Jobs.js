// Job Router (/api/jobs)
const router = require('express').Router();
const JobsController = require('../controller/Jobs');

// Get job by ID
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

// Save as favorite 
router.post('/:user_id/save_job', async (req, res) => {
  const data = req.body;
  const userId = req.params.user_id;    
  try {
    const newJob = await JobsController.saveJob(data, userId);
    if (!newJob.length) {
      res.status(400).json({ message: 'Invalid Request' });
    } else {
      res.status(200).json({ message: `Job saved as favorite` });
    }
  } catch(err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: `Server error` });
  }
});

// Save as irrelevant
router.post('/:user_id/irrelevant_job', async (req, res) => {
  const data = req.body;
  const userId = req.params.user_id;    
  try {
    const newJob = await JobsController.irrelevantJob(data, userId);
    if (!newJob.length) {
      res.status(400).json({ message: 'Invalid Request' });
    } else {
      res.status(200).json({ message: `Job saved as irrelevant` });
    }
  } catch(err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: `Server error` });
  }
});


module.exports = router;
