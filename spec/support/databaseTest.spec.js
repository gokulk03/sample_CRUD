const db = require('../../database.js');

describe('Database',()=>{
    it('should connect to the database',()=>{
        expect(db.isConnected()).toBe(true);
    })
})