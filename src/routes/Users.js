//User Router (All start with /api/users)
const router = require('express').Router();
const UserController = require('../controller/Users');

// ~~~~~~~~~~~~~~~ Users ~~~~~~~~~~~~~~

// Get User By Email
router.get('/', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserController.getUserByEmail(email);
    if (!user) {
      res.status(404).json({ message: 'There is no user with that email.' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: `Server error`});
  }
});

// Get User by id
router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await UserController.getUser(user_id);
    if (!user) {
      res.status(404).json({ message: 'There is no user with that id.' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: `Server error`});
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
      res.status(200).json({ message: `Account for ${newUser.first_name} created successfully` });
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: `Server error`});
  }
})

// Update User
router.put('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const changes = req.body;
  try {
    const updatedUser = await UserController.updateUser(user_id, changes);
    if (!updatedUser) {
      res.status(404).json({ message:'Invalid request' });
    }
    res.status(201).json(await UserController.getUser(user_id));
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: `Server error`});
  }
});

// Delete User
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserController.deleteUser(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    res.status(201).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ "error": `Server error`});
  }
});

// ~~~~~~~~~~~ User Jobs ~~~~~~~~~~~

// Get Favorite Jobs
router.get('/:user_id/favorite', async (req, res) => {
  const { user_id } = req.params;
  try {
    const jobs = await UserController.getFavoriteJobs(user_id);
    if (!jobs.length) {
      res.status(200).json({ message: 'No favorite jobs found for that user' });
    }
    res.status(200).json(jobs);
  } catch (err) {
    //console.log(err.message); //err.code
    res.status(500).json({ error: `Server error`});
  }
});

// Get Irrelevant Jobs
router.get('/:user_id/irrelevant', async (req, res) => {
  const { user_id } = req.params;
  try {
    const jobs = await UserController.getIrrelevantJobs(user_id, 'irrelevant');
    if (!jobs.length) {
      res.status(404).json({ message: 'No irrelevant jobs found for that user' });
    } else {
      res.status(200).json( jobs );
    }
  } catch (err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: `Server error`});
  }
});

// Save new user_job
router.post('/savejob', async (req, res) => {
  const data = req.body;
  try {
    const newJob = await UserController.saveJob(data);
    if (!newJob.length) {
      res.status(404).json({ message: 'No job found' })
    } else {
      res.status(200).json({ message: `Job saved as ${data.status}`});
    }
  } catch(err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: `Server error` });
  }
});


module.exports = router;
