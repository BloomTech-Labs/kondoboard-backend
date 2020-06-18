//User Router (All start with /api/users)
const router = require('express').Router();
const UserController = require('../controller/Users');

// ~~~~~~~~~~~~~~~ Users ~~~~~~~~~~~~~~

// Get User By Email
router.get('/', async (req, res) => {
  const email = req.jwt.claims.sub;
  try {
    const user = await UserController.getUserByEmail(email);
    if (!user) {
      res.status(404).json({ message: 'There is no user with that email.' });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Get User by id
router.get('/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const user = await UserController.getUser(userId);
    if (!user) {
      res.status(404).json({ message: 'There is no user with that id.' });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Add New User
router.post('/', async (req, res) => {
  const newUser = req.body;
  try {
    const user = await UserController.addUser(newUser);
    if (!user) {
      res.status(404).json({ message: 'Unable to create new user.' });
    } else {
      res.status(201).json(user);
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: err.message });
  }
});

// Update User
router.put('/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  const changes = req.body;
  try {
    const updatedCount = await UserController.updateUser(userId, changes);
    if (!updatedCount) {
      res.status(404).json({ message:'Invalid request' });
    } else {
      const updatedUser = await UserController.getUser(userId);
      res.status(201).json(updatedUser);
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete User
router.delete('/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const deletedCount = await UserController.deleteUser(userId);
    if (!deletedCount) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ 'error': 'Server error' });
  }
});

// ~~~~~~~~~~~ User Jobs ~~~~~~~~~~~

// Get Favorite Jobs
router.get('/:user_id/favorite', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const jobs = await UserController.getFavoriteJobs(userId);
    if (!jobs.length) {
      res.status(404).json({ message: 'No favorite jobs found for that user' });
    } else {
      res.status(200).json(jobs);
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Irrelevant Jobs
router.get('/:user_id/irrelevant', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const jobs = await UserController.getIrrelevantJobs(userId);
    if (!jobs.length) {
      res.status(404).json({ message: 'No irrelevant jobs found for that user' });
    } else {
      res.status(200).json(jobs);
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Applied Jobs
router.get('/:user_id/applied', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const jobs = await UserController.getAppliedJobs(userId);
    if (!jobs.length) {
      res.status(404).json({ message: 'No applied jobs found for that user' });
    } else {
      res.status(200).json(jobs);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ~~~~~~~~~~~ User Tags ~~~~~~~~~~~

// Get All User's tags
router.get('/:user_id/tag/', async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const tag = await UserController.getTags(user_id);
    if (!tag) {
      res.status(400).json({ message: 'Unable to find tags for that user.' });
    } else {      
      res.status(201).json(tag);
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: err.message });
  }
});

// Add User tag
router.post('/:user_id/tag/', async (req, res) => {
  const newTag = req.body;
  newTag.user_id = req.params.user_id;
  console.log(newTag);
  try {
    const tag = await UserController.addTag(newTag);
    if (!tag) {
      res.status(400).json({ message: 'Unable to create new tag.' });
    } else {
      res.status(201).json(tag);
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server Error' });
  }
});

// Update Tag
router.put('/tag/:tag_id', async (req, res) => {
  const changes = req.body;
  const id = req.params.tag_id;
  try {
    const updateTag = await UserController.updateTag(id, changes);
    if (!updateTag) {
      res.status(400).json({ message:'Invalid request' });
    } else {
      res.status(201).json({ message:'Updated tag successfully' });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete Tag
router.delete('/tag/:tag_id', async (req, res) => {
  const tag_id = req.params.tag_id;
  try {
    const deletedCount = await UserController.deleteTag(tag_id);
    if (!deletedCount) {
      res.status(400).json({ message: 'Tag not found' });
    } else {
      res.status(200).json({ message: 'Tag deleted successfully' });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ 'error': 'Server error' });
  }
});

router.get('/saved_job/:users_jobs_id', async (req,res) => {
  const id = req.params.users_jobs_id;
  try {
    const [savedJob] = await UserController.getSavedJob(id);
    if (!savedJob) {
      res.status(400).json({ message: 'Unable to find saved job'});
    } else {
      res.status(200).json(savedJob);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update users_jobs (notes string & applied boolean)
router.put('/saved_job/:users_jobs_id', async (req,res) => {
  const id = req.params.users_jobs_id;
  const changes = req.body;
  try {
    const update = await UserController.updateSavedJob(id, changes);
    if (!update) {
      res.status(400).json({ message: 'Unable to update saved job'});
    } else {
      res.status(200).json({ message: 'Updated successfully' });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add tag to job (not currently used)
router.put('/tag/update/:users_jobs_id', async (req,res) => {
  const tagId = req.body.tag_id;
  const usersJobId = req.params.users_jobs_id;
  try {
    const tagJob = await UserController.addJobTag(tagId, usersJobId);
    if (!tagJob) {
      res.status(400).json({ message: 'Unable to tag job' });
    } else {
      res.status(200).json({ message: 'Added tag to job' });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ 'error': 'Server error' });
  }
});

//Delete tag on job
router.delete('/tag/delete', async (req,res) => {
  const tagId = req.body.tag_id;
  const usersJobId = req.body.users_jobs_id;
  try {
    const tagJob = await UserController.removeJobTag(tagId, usersJobId);
    if (!tagJob) {
      res.status(400).json({ message: 'Unable to delete tag from job' });
    } else {
      res.status(200).json({ message: 'Deleted tag from job' });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ 'error': 'Server error' });
  }
});

module.exports = router;
