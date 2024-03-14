function userValidInput(UserInput){
    if(UserInput!=null){
        if(typeof UserInput.first_name === 'string' && typeof UserInput.last_name ==='string'){
            return true;
        }else{
            return false;
        }
    }

    return false;

}
function convertToString(UserInput){
    if(typeof UserInput.first_name!=='string'){
        UserInput.first_name = String(UserInput.first_name);
    }if(typeof UserInput.last_name!=='string'){
        UserInput.last_name = String(UserInput.last_name);
    }
    else{
        return UserInput;
    }
}

module.exports = userValidInput;