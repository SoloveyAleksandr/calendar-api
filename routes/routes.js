const DayController = require('../controllers/DayController');

const router = app => {
  app.get('/', DayController.getNumberOfDays);
};

module.exports = router;