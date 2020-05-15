const router = require('express').Router();

const UserController = require('../controller/Users');

router.get('/', async (req, res) => {
  try {
    const examplePeopleList = await UserController.getUserList();
    if (!examplePeopleList.length) {
      res.status(404).json({ message: 'no people were found.' });
    }
    res.status(200).json(examplePeopleList);
  } catch {
    res.status(500).json({ error: 'something unexpected happened.' });
  }
});


module.exports = router;
