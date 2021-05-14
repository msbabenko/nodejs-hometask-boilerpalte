const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user
    createUser (data){
        const newUser = UserRepository.create(data);
        return newUser;
    }

    getAllUsers() {
        const allUsers = UserRepository.getAll();
        return allUsers;
    }

    deleteUser(id){
        const deletedUser = UserRepository.delete(id);
        console.log("Deleted");
        return deletedUser;
    }

    updateUser(id, dataToUpdate) {
        if (!id)
        {
            const item = UserRepository.getOne(id);
           

        } else {
            console.log( `User with id:${id} not found`);
        }

        
    }
    

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();