const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');
//const { UserRepository } = require('../repositories/userRepository');

const router = Router();

// TODO: Implement route controllers for user
router.get('/:id', function (req, res) {
    try {
        res.body = UserService.search(req.params.id);     
    } catch (err) {
        res.err =  `User id:${req.params.id} is not found`;
        
    } finally {
        next();
    }
}, responseMiddleware);
    



    
  router.get('/', (req, res, next) => {
   
    try {
        res.body = UserService.getAllUsers();     
    } catch (err) {
        res.err = "Users are not found";
        
    } finally {
        next();
    }
}, responseMiddleware);
    
    
   



router.post('/', createUserValid, (req, res, next) => {
    
    try {
        res.body = UserService.createUser(req.body);     
    } catch (err) {
        res.err = err;      
    } finally {
        next();
    }
}, responseMiddleware);

router.put('/:id', updateUserValid, function (req, res) {
    try {
        res.body = UserService.createUser(req.body);     
    } catch (err) {
        res.err = err;      
    } finally {
        next();
    }
  });

router.delete('/:id', function (req, res) {
    try {
        res.body = UserService.deleteUser(req.params.id);
    } catch (err) {
        res.err = err;      
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;