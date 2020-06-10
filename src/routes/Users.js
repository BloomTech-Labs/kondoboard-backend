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
  } catch(err) {
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
  } catch(err) {
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
  } catch(err) {
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
  } catch(err) {
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
  } catch(err) {
    console.log(err.message); //err.code
    res.status(500).json({ "error": 'Server error' });
  }
});

// ~~~~~~~~~~~ User Jobs ~~~~~~~~~~~

// Get Favorite Jobs
router.get('/:user_id/favorite', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const jobs = await UserController.getFavoriteJobs(userId);
    if (!jobs.length) {
      res.status(200).json({ message: 'No favorite jobs found for that user' });
    } else {
      res.status(200).json(jobs);
    }
  } catch(err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Irrelevant Jobs
router.get('/:user_id/irrelevant', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const jobs = await UserController.getIrrelevantJobs(userId, 'irrelevant');
    if (!jobs.length) {
      res.status(404).json({ message: 'No irrelevant jobs found for that user' });
    } else {
      res.status(200).json(jobs);
    }
  } catch(err) {
    console.log(err.message); //err.code
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
