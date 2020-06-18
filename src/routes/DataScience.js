// Data Science Router (/api/ds)
const router = require('express').Router();
const DSController = require('../controller/DataScience');

router.get('/', async (req, res) => {
  try {
    const data = await DSController.getAllData();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const user = await DSController.getSingleUser(userId);
    if (!user) {
      res.status(400).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
