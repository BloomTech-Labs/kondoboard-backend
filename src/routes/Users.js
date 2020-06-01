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
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ error: `Server error`, type: err.code, message: err.message });
  }
});

// Get User by id
router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await UserController.getUser(user_id);
    if (!user) {
      res.status(404).json({ message: 'There is no user with that id.' });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ error: `Server error`, type: err.code, message: err.message });
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
    res.status(500).json({ error: `Server error`, type: err.code, message: err.message });
  }
})

// Update User
router.put('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const changes = req.body;
  try {
    const updatedCount = await UserController.updateUser(user_id, changes);
    if (!updatedCount) {
      res.status(404).json({ message:'Invalid request' });
    } else {
      const updatedUser = await UserController.getUser(user_id);
      res.status(201).json(updatedUser);
    }
  } catch (err) {
    res.status(500).json({ error: `Server error`, type: err.code, message: err.message });
  }
});

// Delete User
router.delete('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const deletedCount = await UserController.deleteUser(user_id);
    if (!deletedCount) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  } catch (err) {
    res.status(500).json({ error: `Server error`, type: err.code, message: err.message });
  }
});

// ~~~~~~~~~~~ User Jobs ~~~~~~~~~~~

// Get User Favorite
router.get('/:user_id/favorite', async (req, res) => {
  const { user_id } = req.params;
  try {
    const jobs = await UserController.getFavoriteJobs(user_id);
    if (!jobs.length) {
      res.status(400).json({ message: 'No favorite jobs found for that user' });
    }
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: `Server error`, type: err.code, message: err.message });
  }
});

// Get User Irrelevant
router.get('/:user_id/irrelevant', async (req, res) => {
  const { user_id } = req.params;
  try {
    const jobs = await UserController.getIrrelevantJobs(user_id, 'irrelevant');
   if (!jobs.length) {
      res.status(400).json({ message: 'No irrelevant jobs found for that user' });
    }
    res.status(200).json( jobs );
  } catch (err) {
    res.status(500).json({ error: `Server error`, type: err.code, message: err.message });
  }
});


module.exports = router;
