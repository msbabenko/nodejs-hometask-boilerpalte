const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    createFighter (data){
        const newFighter = FighterRepository.create(data);
        return newFighter;
    }

    getAllFighters() {
        const allFighters = FighterRepository.getAll();
        return allFighters;
    }

}

module.exports = new FighterService();