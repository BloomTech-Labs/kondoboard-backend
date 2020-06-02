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
  } catch(error) {
    console.log(error.message)
    res.status(500).json({ error: 'Server Error' });
  }
});

// Get Single User Info
router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await UserController.getUser(user_id);
    if (!user) {
      res.status(404).json({ message: 'There is no user with that id.' });
    }
    res.status(200).json(user);
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Add New User
router.post('/', async (req, res) => {
  const newUser = req.body;
  try {
    const user = await UserController.addUser(newUser);
    if (!user) {
      res.status(404).json({ message: 'Unable to create new user.' });
    }
    res.status(200).json({ message: 'User created successfully' });
  } catch {
    res.status(500).json({ error: 'Server Error' });
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
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Delete User
router.delete('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await UserController.deleteUser(user_id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    res.status(201).json({ message: 'User deleted successfully' });
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});

// ~~~~~~~~~~~~~ Users Info ~~~~~~~~~~~~

// Add Skill
router.put('/:user_id/add_skill', async (req, res) => {
  const { user_id } = req.params;
  const skill = req.body.skill;

  try {
    const skills = await UserController.addSkill(user_id, skill);
    if(!skills){
      res.status(404).json({ message: 'Unable to add skill'})
    }
  res.status(201).json({ message: `${skill} has been added to skills`});
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Delete Skill
router.delete('/:user_id/delete_skill', async (req, res) => {
  const { user_id } = req.params;
  const skill = req.body.skill;
  try {
    const skills = await UserController.removeSkill(user_id, skill);
    if (!skills) {
      res.status(404).json({ message: 'Unable to remove skill' });
    }
    res.status(201).json(skills);
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Add Location
router.put('/:user_id/add_location', async (req, res) => {
  const { user_id } = req.params;
  const location = req.body.location;

  try {
    const skills = await UserController.addLocation(user_id, location);
    if(!skills){
      res.status(404).json({ message: 'Unable to add location'})
    }
  res.status(201).json(skills);
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Delete Location
router.delete('/:user_id/delete_location', async (req, res) => {
  const { user_id } = req.params;
  const location = req.body.location;
  try {
    const skills = await UserController.removeLocation(user_id, location);
    if (!skills) {
      res.status(404).json({ message: 'Unable to delete location'});
    }
    res.status(201).json(skills);
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
});


// ~~~~~~~~~~~ Users Saved Jobs ~~~~~~~~~~

// Get Favorite User Jobs
router.get('/:user_id/favorite', async (req, res) => {
  const { user_id } = req.params;
  //Check if job exists in jobs table, if not then create job

  //try catch to get jobs 
});

// Save Favorite User Job
router.post('/:user_id/favorite', async (req, res) => {
  const { user_id } = req.params;
  //Check if job exists in jobs table, if not then create job

  //try catch to insert job
});

// Get Irrelevant User Jobs
router.get('/:user_id/irrelevant', async (req, res) => {
  const { user_id } = req.params;
  //Check if job exists in jobs table, if not then create job

  //try catch to get jobs 
});

// Save Irreleant User Jobs
router.post('/:user_id/irrelevant', async (req, res) => {
  const { user_id } = req.params;
  //Check if job exists in jobs table, if not then create job

  //try catch to insert job
});

// ~~~~~~~~~~~~~~~~ User Tags ~~~~~~~~~~~~~~~
// View User Tag

// Create User Tag

// Update User Tag

// Delete User Tag


module.exports = router;
