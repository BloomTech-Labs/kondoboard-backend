const router = require('express').Router();
const DSController = require('../controller/DataScience');

router.get('/', async (req, res) => {
  try {
    const data = await DSController.getAllData();
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
