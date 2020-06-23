// Job Router (/api/jobs)
const router = require('express').Router();
const JobsController = require('../controller/Jobs');

// ~~~~~~~~~~~~~~ Jobs ~~~~~~~~~~~~

// Get job by ID
router.get('/:job_id', async (req, res) => {
  const jobId = req.params.job_id;
  try {
    const job = await JobsController.getById(jobId);    
    if (!job.length) {
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
    if (!job) {
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
      res.status(200).json({ message: 'Job saved as favorite' });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
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
      res.status(200).json({ message: 'Job saved as irrelevant' });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// ~~~~~~~~~~~~ Columns ~~~~~~~~~~~~

// Get user columns
router.get('/:user_id/column', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const columns = await JobsController.getColumn(userId);
    if (!columns) {
      res.status(400).json({ message: 'Unable to get columns' });
    } else {
      res.status(200).json( columns );
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Add column
router.post('/:user_id/column', async (req, res) => {
  const data = req.body;
  data.user_id = req.params.user_id;
  try {
    const newColumn = await JobsController.addColumn(data);
    if (!newColumn) {
      res.status(400).json({ message: 'Unable to add column' });
    } else {
      res.status(200).json({ message: 'Column has been added' });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Update Column
router.put('/column/:column_id', async (req, res) => {
  const id = req.params.column_id;
  const data = req.body;
  try {
    const updated = await JobsController.updateColumn(id, data);
    if (!updated) {
      res.status(400).json({ message: 'Unable to make column changes' });
    } else {
      res.status(200).json(({ message: 'Updated column' }));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Delete column
router.delete('/column/:column_id', async (req, res) => {
  const id = req.params.column_id;
  try {
    const deleted = await JobsController.removeColumn(id);
    if (!deleted) {
      res.status(400).json({ message: 'Unable to find column' });
    } else {
      res.status(200).json({ message: 'Column deleted' });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// ~~~~~~~~~~ Job to Column ~~~~~~~~~~

// Get user job columns
router.get('/column/:user_id', async (req,res) => {
  const user_id = req.params.user_id;
  try {
    const jobColumns = await JobsController.getJobColumns(user_id);
    if (!jobColumns) {
      res.status(400).json({ message: 'Unable to find job columns' });
    } else {
      res.status(200).json(jobColumns);
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Add job to column
router.post('/column', async (req, res) => {
  const data = {};
  data.columns_id = req.body.columns_id;
  data.users_jobs_id = req.body.users_jobs_id;
  try {
    const newJob = await JobsController.newJobColumn(data);
    if (!newJob) {
      res.status(400).json({ message: 'Unable to add job to column' });
    } else {
      res.status(200).json({ message: 'Job added to column' });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Change column
router.put('/column/update/job', async (req, res) => {
  const id = req.body.users_jobs_id;
  const column = req.body.columns_id;
  try {
    const updated = await JobsController.updateJobColumn(id, column);
    if (!updated) {
      res.status(400).json({ message: 'Unable to change column' });
    } else {
      res.status(200).json({ message: 'Job column changed' });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
