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
        try{
            this.userDAL = new UserDAL();
            const updatedUser =  await this.userDAL.editUser(id, first_name, last_name);
            return updatedUser;

        }
        catch(error){
            throw new Error('Error updating user'+error.message);
        }   
    }

    async deleteUser(id){
        this.userDAL = new UserDAL();
        return await this.userDAL.deleteUser(id);
    }
}



const generateRandomString = Math.random().toString(36).substring(2,7);
console.log(generateRandomString);
module.exports = UserBAL;
