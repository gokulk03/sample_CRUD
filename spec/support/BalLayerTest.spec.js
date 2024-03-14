const userBAL = require('../../BAL/user.bal.js')

describe('UserBAL',()=>{
    let userBALInstance;

    beforeEach(()=>{
        userBALInstance = new userBAL();
    })

    describe('getUsers',()=>{
        it('should return users from the database', async()=>{
            // spyOn(userDAL.prototype,'getUsers').and.returnValue(Promise.resolve(['user1','user2']));
            const result = await userBALInstance.getUsers();

            expect(result).toEqual([
                {id:1,first_name:'123',last_name:'456'},
                {id:2,first_name:'def',last_name: 'test2'},
                
            ]);

        });
    });

    describe('getUserById',()=>{
        it('should return a particular user from the database',async()=>{
            // spyOn(userDAL.prototype,'getUserById').and.returnValue(Promise.resolve(['user1']));
            const userId = 1;

            const result = await userBALInstance.getUserById(userId);

            expect(result).toEqual([
                {id:1,first_name:'123',last_name:'456'}
            ]);
        });
    });

    describe('deleteUser',()=>{
        it('should delete a particular user from the database',async()=>{
            const userId = 1;
            const result = await userBALInstance.deleteUser(userId);

            expect(result.affectedRows).toBe(0);
        })
    })
})