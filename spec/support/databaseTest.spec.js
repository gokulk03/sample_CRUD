const {databaseInstance} = require('../../database.js');

describe('Database',()=>{

    let db;
    beforeEach(()=>{
        db = databaseInstance;
    })
    it('should connect to the database',()=>{
        
        expect(db.isConnected()).toBe(true);

    })
    
})