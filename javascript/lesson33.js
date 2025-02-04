function validation(){
    var name = document.getElementById('name').value;
    var age= document.getElementById('age').value;
    var valid_name= /^[A-Za-z]+$/;
    var valid_age= /^[0-9]+$/;
    // if(name.match(valid_name)){
    //     return true;
    // }else{
    //     document.getElementById('name_error').style.visibility='visible';
    //     document.getElementById()
    // }


    if(name.match(valid_name) && age.match(valid_age)){
        return true;
}else if(!(name.match(valid_name))){
    document.getElementById('name_error').style.visibility='visible';
    document.getElementById('name').style.borderColor = 'red';
    return false;
}else if(!(age.match(valid_age))){
    document.getElementById('age_error').style.visibility='visible';
    document.getElementById('age').style.borderColor = 'red';
    return false;
}
}