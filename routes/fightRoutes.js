const { Router } = require('express');
const FightService = require('../services/fightService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');


const router = Router();

// OPTIONAL TODO: Implement route controller for fights
router.get('/', function (req, res) {
    res.send(' A list of fights!');
    const g = 1;
    if (g !== 0) {
        res.status(200).json({
          status: "success",
          data: ""
        });
      } else return next(new AppError("No data found with this ID", 404));
  });


module.exports = router;