const router = require('express').Router();

const UserController = require('../controller/Users');

router.get('/', async (req, res) => {
  try {
    const userListQuery = await UserController.getUserList();
    if (!userListQuery.length) {
      res.status(404).json({ message: 'no people were found.' });
    }
    res.status(200).json(userListQuery);
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const userQuery = await UserController.getUser(id);
    if (!userQuery) {
      res.status(404).json({ message: 'there is no user with that id.' });
    }
    res.status(200).json(userQuery);
  } catch {
    res.status(500).json({ error: 'somthing unexpected happened.' })
  }
})

router.post('/', async (req, res) => {
  const { userData } = req.body;
  try {
    const user = await UserController.addUser(userData);
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' });
  }
});

router.put('/:id', async (req, res) => {
  const { userData } = req.body;
  try {
    const user = await UserController.updateUser(userData);
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' })
  }
})
module.exports = router;
