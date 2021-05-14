const { user } = require('../models/user');


const emailValidation = (email) => {
    const regexp = /^[\w.+\-]+@gmail\.com$/;
    return regexp.test(email)
}

const phoneNumValidation = (phoneNum) => {
    const regexp = /\+380\d{9}/;
    return regexp.test(phoneNum)
}

const pswdValidation = (pswd) => {
    return pswd.length >= 3 ? true : false;
}



const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    if (!req.body) {
       
       
       
      // console.log(req.body.password);

      
        //next();
    }
    else {
    res
        .status(404)
        .send({error: true, message: message});

    }
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update
    
    if (!req.body) {
       // const result = UserRepository.update(req.params.id, req.body);       
       next();
     } else {
        res
        .status(404)
        .send({error: true, message: message})       
     }
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;