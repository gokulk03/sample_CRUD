const UserBAL = require('../BAL/user.bal.js');

class UserController {
    constructor() {
        this.userBAL = new UserBAL();
    }

    getUsers = async (req,res) => {
        
        return await this.userBAL.getUsers(req,res);
    }

    getUserById = async (req,res) => {
        const id = req.params.id;
        return await this.userBAL.getUserById(id);
    }

    addUser = async (first_name,last_name) => {
        return await this.userBAL.createUser(first_name, last_name);
    }

    editUser = async (id, first_name, last_name) => {
        return await this.userBAL.editUser(id, first_name, last_name);
    }

    deleteUser = async(id)=>{
        return await this.userBAL.deleteUser(id);
    }
}

module.exports = UserController;
