const db = require('../database.js');

class UserDAL {
    constructor() {}

    async getUsers() {
        const [records] = await db.query('SELECT * FROM user');
        return records;
    }

    async getUserById(id) {
        
        if (isNaN(id)) {
            throw new Error('User ID must be a number');
        }
        const [record] = await db.query('SELECT * FROM user WHERE id= ?', [id]);
        return record;
    }
    
    
    async createUser(first_name,last_name) {
        const [newrecord] = await db.query('INSERT INTO user(first_name,last_name)  VALUES (?,?)', [first_name, last_name]);
        return newrecord;
    }

    async editUser(id, first_name, last_name) {
        const [editeduser] = await db.query('UPDATE user SET first_name = ?, last_name = ? WHERE id=?', [first_name, last_name, id]);
        return editeduser;
    }
}

module.exports = UserDAL;
