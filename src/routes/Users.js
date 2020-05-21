const router = require('express').Router();
const bcrypt = require("bcryptjs");
const UserController = require('../controller/Users');

//------------GET----------

//get all users
router.get('/', async (req, res) => {
    
    try {
        const userList = await UserController.getUserList();
        if (!userList.length) {
        res.status(404).json({ message: 'no people were found.' });
    }
    res.status(200) .json(userList);
    } catch {
        res.status(500).json({ error: 'something unexpected happened.' });
    }
});

//Get user by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserController.getUser(id);
    if (!user) {
      res.status(404).json({ message: 'there is no user with that id.' });
    }
    res.status(200).json(user);
  } catch {
    res.status(500).json({ error: 'somthing unexpected happened.' })
  }
})

//Get user saved jobs
router.get('/:id/saved_jobs', async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const savedJob = await UserController.getUserSavedJobs(id);
    if(!savedJob) {
      res.status(404).json({ message: 'there is no saved jobs for user with that id.' });
    }
    res.status(200).json(savedJob);
  } catch {
    res.status(500).json({ error: 'somthing unexpected happened.' })
  }
})

// Add favorited job
router.post('/:id/saved_jobs', async (req, res) => {
  const {id} = req.params;
  const favorited = req.body;

  console.log(favorited)

  try {
    const newFavorited = await UserController.addUserFavorited(id, favorited)
    if (!newFavorited) {
      res.status(404).json({ message: 'error adding favorited job for user with that id.' });
    }
    res.status(200).json(newFavorited);
  } catch {
    res.status(500).json({ error: 'somthing unexpected happened.' })
  }
})


//------------POST----------

//Create new user
router.post('/', async (req, res) => {
  const userData = req.body;
  const rounds = process.env.HASH_ROUNDS || 8;
  const hash = bcrypt.hashSync(userData.password, rounds);
  userData.password = hash;

  try {
    const user = await UserController.addUser(userData);
    if(!user){
      res.status(404).json({ message: 'Unable to create user'})
    }
    res.status(201).json({ message: 'User has been created!'});
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' });
  }

});






//Create user_tag
router.post('/tags', async (req, res) => {
  const userId = req.params.id;
  const newTag = req.body;

  try {
    const createTag = await UserController.addTag(newTag);
    if(!createTag){
      res.status(404).json({ message: 'Unable to create tag'})
    }
    res.status(201).json({ message: 'Tag has been created!'});
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' });
  }
})


//------------UPDATE-----------

//Update user
router.put('/:id', async (req, res) => {
  const userData = req.body;
  const id = req.params.id;

  try {
    const user = await UserController.updateUser(id, userData);
    if(!user){
      res.status(404).json({ message:'Invalid request' })
    }
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' })
  }
})

//Add new skill
router.put('/:user_id/skills', async (req, res) => {
  const { user_id } = req.params;
  const newSkill = req.body.newSkill;

   try {
    const skills = await UserController.addSkill(user_id, newSkill);
    if(!skills){
      res.status(404).json({ message: 'Unable to view skill'})
    }
    res.status(201).json(skills);
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' });
  }

})

//Update user_tag

//------------DELETE----------

//Delete user
router.delete('users/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserController.deleteUser(id);
    if(!user){
      res.status(404).json({ message: "User not found" })
    }
    res.status(201).json({ message: "User deleted successfully"});
  } catch {
    res.status(500).json({ error: 'Server Error' })
  }
})

//Delete user_tag
module.exports = router;