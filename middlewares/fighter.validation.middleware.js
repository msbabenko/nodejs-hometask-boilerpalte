const { fighter } = require('../models/fighter');

const powerValidation = (power) => {
    return (power > 1 && power < 100) ? true : false;
}

const defenseValidation = (defense) => {
    return (defense > 1 && defense < 100) ? true : false;
}

const healthValidation = (defense) => {
    return (health > 80 &&  health < 120) ? true : false;
}

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    console.log("Hello Create Fighter");


    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    console.log("Hello Update Fighter");


    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;