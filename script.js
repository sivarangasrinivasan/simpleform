function validateForm(){
    //Get inputs
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
//reset error msg
document.getElementById('nameError').innerHTML='';
document.getElementById('emailError').innerHTML='';

//validate name
if(name===''){
    document.getElementById('nameError').innerHTML='Name is Required';
    return false;
}
var emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;{
    document.getElementById('emailError').innerHTML='Email Field is Required'
    return false;
}
}