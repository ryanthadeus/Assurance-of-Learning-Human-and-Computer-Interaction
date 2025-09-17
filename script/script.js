document.getElementById("register")
.addEventListener('submit', function(event){
    event.preventDefault();
    
    var valName = document.register.name.value;
    var valEmail = document.register.email.value;
    var valAge = document.register.age.value;
    var valGender = document.querySelector('input[name="gender"]:checked');
    var valPw = document.register.pw.value;
    var valConfirm = document.register.confirm.value;

    console.log(valPw);

    let isValid = true;

    if(valName.length < 6){
        document.getElementById("name")
        .innerHTML = "name must be longer than 6 characters";

        isValid = false;
    }
    else{
        document.getElementById("name")
        .innerHTML = "";
    }

    if(valEmail === ""){
        document.getElementById("email")
        .innerHTML = "email must be filled";
        isValid = false;
    } 
    else if (valEmail.endsWith("@gmail.com") === false){
        document.getElementById("email")
        .innerHTML = "must end with @gmail.com";
        isValid = false;
    }
    else{
        document.getElementById("email")
        .innerHTML = "";
    }

    if(isNaN(valAge) || valAge <= 0){
        document.getElementById("age")
        .innerHTML = "age must be number and greater than 0";
        isValid = false;
    }
    else{
        document.getElementById("age")
        .innerHTML = "";
    }

    if(!valGender){
        document.getElementById("gender")
        .innerHTML = "gender must be checked";
        isValid = false;
    }
    else{
        document.getElementById("gender")
        .innerHTML = "";
    }

    if(!validatePass(valPw)){
        document.getElementById('password')
        .innerHTML = "password must be alphanumerical";
        isValid = false;
    }
    else{
        document.getElementById('password')
        .innerHTML = "";
    }

    if(valConfirm != valPw){
        document.getElementById('password')
        .innerHTML = "password doesn't match";
        isValid = false;
    }
    else{
        document.getElementById('password')
        .innerHTML = "";
    }

    if(isValid == true) {
        window.location.href = "../pages/index.html";
    }
})

function validatePass(pwd){
    let haveNum = false;
    let haveLetter = false;
    let haveSym = false;

    for(let i = 0; i < pwd.length; i++){
        const chars = pwd[i];
        if(chars >= 'a' && chars <= 'z' || chars >= 'A' && chars <= 'Z'){
            haveLetter = true;
        }
        else if(chars >= 0 && chars <= 9){
            haveNum = true;
        }
        else{
            haveSym = true;
        }
    }
    return haveLetter && haveNum && !haveSym;
}

function unHide(){
    const elem = document.getElementById("pwd");
    if(elem.type === "password"){
        elem.setAttribute("type", "text");
    }
    else{
        elem.setAttribute("type", "password")
    }
}