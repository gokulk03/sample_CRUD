const ValidUserInput = require('../../utility/validators.js')
const convertToString = require('../../utility/validators.js')
describe("User Input Validation",function(){
    describe("ValidateUserInput Function",function(){
        it("should return true for valid user input",function(){
            const ValidInput = {
                first_name : 'Gokul',
                last_name : 'Srinivas'
            };
            const isValid = ValidUserInput(ValidInput);
            expect(isValid).toBe(true);
        });

        it("should return false for invalid user input",function(){
            const InvalidInput = {
                first_name: 123,
                last_name : 456
            };
            const isValid = ValidUserInput(InvalidInput);
            if(expect(isValid).toBe(false)){
                return convertToString(InvalidInput);
            }
            else{
                return true;
            }
        });
    });

});