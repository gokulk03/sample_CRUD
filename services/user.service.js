const UserController = require('../controllers/user.controller.js');

class UserService {
    constructor() {
        this.userController = new UserController();
    }

    getUsers = async () => {
        return await this.userController.getUsers();
    }

    getUserById = async (id) => {
        return await this.userController.getUserById(id);
    }

    createUser = async (first_name, last_name) => {
        return await this.userController.addUser(first_name, last_name);
    }

    deleteUser = async(id)=>{
        return await this.userController.deleteUser(id);
    }


    editUser = async (id, first_name, last_name) => {
        return await this.userController.editUser(id, first_name, last_name);
    }
}

module.exports = UserService;
