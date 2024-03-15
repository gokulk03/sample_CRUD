const UserBAL = require('../../BAL/user.bal');
const {generateRandomString}=require('../../BAL/user.bal');

describe('UserBAL',()=>{
    let userBalInstance;
    let UserId;
    let first_name='test';
    let last_name = 'user';
    
    userBalInstance = new UserBAL();

    beforeEach(async()=>{
  
        
        // await userBalInstance.createUser(UserId,first_name,last_name);
        
    })

    describe('getUsers',()=>{
        it('should get all the users from the database',async ()=>{
            var users = await userBalInstance.getUsers();
            expect(users).toBeDefined();
            expect(users.length).toBeGreaterThanOrEqual(0);
            
        });
    });

    describe('createUser',()=>{
        it('should create new user into the database',async ()=>{
            first_name = 'test';
            last_name = 'user';
            var newuser = await userBalInstance.createUser(first_name,last_name);
            UserId = newuser.id;
            // console.log(newuser);
            expect(newuser).toBeDefined();
            if(newuser.first_name && newuser.last_name){
                expect(newuser.first_name).toBeDefined();
                expect(newuser.last_name).toBeDefined();
            }else{
                fail('first name and last name not provided');
            }
            
        });
        
    });

    describe('getUserById',()=>{
        it('should get that particular user from the database',async()=>{
            var userId = UserId;
            
            console.log(userId);
                var user = await userBalInstance.getUserById(userId);
                console.log(user);
                expect(user).toBeDefined();
                if(user && user[0]){
                    expect(user[0].id).toBe(userId)
                    expect(user[0].first_name).toBeDefined();
                }else{
                    fail('User not found in the database');
                }
                      
        });
        
    });

    

    describe('updateUser',()=>{
        it('should update the user in the database',async()=>{
            let userId = UserId;
            console.log(userId);
            const updatedFirstName =  generateRandomString;
            const updatedLastName = generateRandomString;
            console.log(generateRandomString);

            const updatedUser = await userBalInstance.editUser(userId,updatedFirstName,updatedLastName);
            // console.log(updatedUser);
            expect(updatedUser).toBeDefined();
            
            
        })
        
    });

    describe('deleteUser',()=>{
        // it('should delete the user from the database',async ()=>{
        //     const userId = 7;
        //     const deletedUser = await userBalInstance.deleteUser(userId);
        //     console.log(deletedUser);
        //     expect(deletedUser).toBeDefined();
        //     if(expect(deletedUser.affectedRows).toBe(1)){
        //         console.log('User deleted Successfully')
        //     }else{
        //         console.log('User already deleted');
        //     }
            
        // })

        var testUserId;
        beforeAll(async()=>{
            const newUser = await userBalInstance.createUser('test','user');
            testUserId = newUser.id;
            
        });
        // beforeEach(async()=>{
        //     const newUser = await userBalInstance.createUser(first_name,last_name);

        // })
        it('should delete the user from the database',async ()=>{
            
            const deletedUser = await userBalInstance.deleteUser(testUserId);
            // console.log(deletedUser);
            expect(deletedUser).toBeDefined();
            expect(deletedUser.affectedRows).toBe(1);
            // console.log('User deleted Successfully');
            
        });
    });
});
