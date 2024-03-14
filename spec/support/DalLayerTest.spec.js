const userDAL = require('../../DAL/user.dal');

describe('UserDAL',()=>{
    let UserDal;
    beforeEach(()=>{
        UserDal = new userDAL();
    })

    it('should fetch users from the database',async()=>{
        var users = await UserDal.getUsers();
        expect(users.length).toBeGreaterThan(0);
        console.log(users);
    });

    it('should get that particular user from the database',async()=>{
        var userid = 2;
        var user = await UserDal.getUserById(userid);
        expect(user.length).toBeGreaterThan(0);
        console.log(user)
    });

    it('should insert the user in the database',async ()=>{
        var userdata = {
            first_name:'testing',
            last_name:'new test',
        };
        

        var newuser = await UserDal.createUser(userdata.first_name,userdata.last_name);
        
        expect(newuser).toBeDefined();
        expect(newuser.id).toBeDefined();
        console.log(newuser);
    });
});
