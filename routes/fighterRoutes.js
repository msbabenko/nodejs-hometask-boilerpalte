const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');
const { getAllFighters } = require('../services/fighterService');

const router = Router();

// TODO: Implement route controllers for fighter
router.get( '/', (req, res, next) => {
    try {
        res.body = FighterService.getAllFighters();   
    } catch (err) {
        res.err = err;     
    } finally {
        next();
    }
}, responseMiddleware);

router.get('/:id', function (req, res) {
    try {
        res.body = FighterService.getAllFighters();   
    } catch (err) {
        res.err = err;     
    } finally {
        next();
    }
  });

router.post('/', createFighterValid, (req, res, next) => {
    try {
        res.body = FighterService.createFighter(req.body);   
    } catch (err) {
        res.err = err;     
    } finally {
        next();
    }
    
}, responseMiddleware);

router.put('/:id', updateFighterValid, function (req, res) {
    try {
        res.body = FighterService.createFighter(req.body);   
    } catch (err) {
        res.err = err;     
    } finally {
        next();
    }
  });

router.delete('/:id', function (req, res) {
    try {
        res.body = FighterService.createFighter(req.body);   
    } catch (err) {
        res.err = err;     
    } finally {
        next();
    }
  });

module.exports = router;