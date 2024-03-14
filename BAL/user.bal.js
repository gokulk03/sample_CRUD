const UserDAL = require('../DAL/user.dal.js');

class UserBAL {
    constructor() {
        
    }

    async getUsers() {
        this.userDAL = new UserDAL();
        return await this.userDAL.getUsers();
    }

    async getUserById(id) {
        this.userDAL = new UserDAL();
        return await this.userDAL.getUserById(id);
    }

    async createUser(first_name, last_name) {
        this.userDAL = new UserDAL();
        return await this.userDAL.createUser(first_name, last_name);
    }

    async editUser(id, first_name, last_name) {
        this.userDAL = new UserDAL();
        return await this.userDAL.editUser(id, first_name, last_name);
    }

    async deleteUser(id){
        this.userDAL = new UserDAL();
        return await this.userDAL.deleteUser(id);
    }
}

module.exports = UserBAL;
