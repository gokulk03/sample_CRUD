const {mysqlPool} = require('../database.js');


class UserDAL {
    constructor() {}

    async getUsers() {
        const [records] = await mysqlPool.query('SELECT * FROM user');
        return records;
    }

    async getUserById(id) {
        
        if (isNaN(id)) {
            throw new Error('User ID must be a number');
        }
        const [record] = await mysqlPool.query('SELECT * FROM user WHERE id= ?', [id]);
        return record;
    }
    
    
    async createUser(first_name,last_name) {
        const [newrecord] = await mysqlPool.query('INSERT INTO user(first_name,last_name)  VALUES (?,?)', [first_name, last_name]);
        const newUser = {
            id : newrecord.insertId,
            first_name: first_name,
            last_name: last_name
        }
        return newUser;
    }

    async editUser(id, first_name, last_name) {
        const [editeduser] = await mysqlPool.query('UPDATE user SET first_name = ?, last_name = ? WHERE id=?', [first_name, last_name, id]);
        return editeduser;
    }

    async deleteUser(id){
        const [deleteduser]=await mysqlPool.query('DELETE FROM user WHERE id = ?',[id]);
        return deleteduser;
    }
}

module.exports = UserDAL;
