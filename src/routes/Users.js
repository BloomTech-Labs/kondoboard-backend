//User Router (All start with /api/users)
const UserController = require('../controller/Users');

const router = require('express').Router();
const bcrypt = require('bcryptjs');


// ~~~~~~~~~~~~~~~ Users ~~~~~~~~~~~~~~

// Get All User Info
router.get('/', async (req, res) => {    
    try {
        const userList = await UserController.getUserList();
        if (!userList.length) {
            res.status(404).json({ message: 'no people were found.' });
        }
        res.status(200) .json(userList);
    } catch {
        res.status(500).json({ error: 'Server Error' });
    }
})

// Get Single User Info
router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;

    try {
        const user = await UserController.getUser(user_id);
        if (!user) {
            res.status(404).json({ message: 'there is no user with that id.' });
        }
        res.status(200).json(user);
    } catch {
        res.status(500).json({ error: 'Server Error' })
    }
})

// Update User
router.put('/:user_id', async (req, res) => {
    const user_id = req.params.id;
    const changes = req.body;

    try {
        const updatedUser = await UserController.updateUser(user_id, changes);
        if(!updatedUser){
            res.status(404).json({ message:'Invalid request' })
        }
    res.status(201).json(await UserController.getUser(user_id));
    } catch {
        res.status(500).json({ error: 'Server Error' })
    }
})

// Delete User
router.delete('users/:user_id', async (req, res) => {
    const user_id = req.params.id;

    try {
        const user = await UserController.deleteUser(user_id);
        if(!user){
            res.status(404).json({ message: "User not found" })
        }
    res.status(201).json({ message: "User deleted successfully"});
    } catch {
        res.status(500).json({ error: 'Server Error' })
    }
})

// ~~~~~~~~~~~~~ Users Info ~~~~~~~~~~~~

// Add Skill
router.put('/:user_id/skills', async (req, res) => {
    const { id } = req.params;
    const skill = req.body.skill;

    try {
        const skills = await UserController.addSkill(user_id, skill);
        if(!skills){
            res.status(404).json({ message: 'Unable to add skill'})
        }
    res.status(201).json(skills);
    } catch {
        res.status(500).json({ error: 'Server Error' });
    }
});

// Delete Skill
router.delete('/:user_id/skills', async (req, res) => {
  const { id } = req.params;
  const skill = req.body.skill;

  try {
    const skills = await UserController.removeSkill(user_id, skill);
    if(!skills){
      res.status(404).json({ message: 'Unable to remove skill'});
    }
  res.status(201).json(skills);
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
<<<<<<< HEAD
});
//Get user saved jobs
//Get user tags
=======

});


// Add City
router.put('/:user_id/cities', async (req, res) => {
    const { user_id } = req.params;
    const city = req.body.city;

    try {
        const skills = await UserController.addCity(user_id, city);
        if(!skills){
            res.status(404).json({ message: 'Unable to add city'})
        }
    res.status(201).json(skills);
    } catch {
        res.status(500).json({ error: 'Server Error' });
    }
});

// Delete City
router.delete('/:id/cities', async (req, res) => {
  const { user_id } = req.params;
  const city = req.body.city;
>>>>>>> 61686e899d13efb32c191598e0f16ca6160cdc51

  try {
    const skills = await UserController.removeCity(user_id, city);
    if(!skills){
      res.status(404).json({ message: 'Unable to delete city'});
    }
  res.status(201).json(skills);
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }

});

// Toggle Remote On/Off
router.get('/:user_id/remote', async (req, res) => {
  const { user_id } = req.params;

  try {
    const remote = await UserController.toggleRemote(user_id);
    if(!remote){
      res.status(404).json({ message: 'Unable to change remote status'});
    }
  res.status(201).json(remote);
  } catch {
    res.status(500).json({ error: 'Server Error' });
  }
<<<<<<< HEAD
});

//------------PUT-----------
//Update user
router.put('/:id', async (req, res) => {
  const userData = req.body;
  const id = req.params.id;
  try {
    const user = await UserController.updateUser(id, userData);
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' })
  }
});
//Update user_tag

//------------DELETE----------
//Delete user
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserController.deleteUser(id);
    res.status(201).json({ message: "User deleted successfully"});
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' })
  }
});

//Delete user_tag

module.exports = router;
=======

});

// ~~~~~~~~~~~ Users Saved Jobs ~~~~~~~~~~

// Get Favorite User Jobs
router.get('/:user_id/favorite', async (req, res) => {
  const { user_id } = req.params;
  //Check if job exists in jobs table, if not then create job

  //try catch to get jobs 
})

// Save Favorite User Job
router.post('/:user_id/favorite', async (req, res) => {
  const { user_id } = req.params;
  //Check if job exists in jobs table, if not then create job

  //try catch to insert job
})

// Get Irrelevant User Jobs
router.get('/:user_id/irrelevant', async (req, res) => {
  const { user_id } = req.params;
  //Check if job exists in jobs table, if not then create job

  //try catch to get jobs 
})

// Save Irreleant User Jobs
router.post('/:user_id/irrelevant', async (req, res) => {
  const { user_id } = req.params;
  //Check if job exists in jobs table, if not then create job

  //try catch to insert job
})

// Archive User Job
router.get('/:saved_job_id/archive', async (req, res) => {
  const { saved_job_id } =req.params
  
  //try catch to change archived to true
})

// ~~~~~~~~~~~~~~~~ User Tags ~~~~~~~~~~~~~~~
// View User Tag

// Create User Tag

// Update User Tag

// Delete User Tag


module.exports = router;
>>>>>>> 61686e899d13efb32c191598e0f16ca6160cdc51
