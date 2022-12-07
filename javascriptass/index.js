alert("Hello c-13")

function signUpUser(){
    let username = prompt("Enter your username")
    validateUsername(username)
    
    while(!validateUsername(username)){
        username = prompt("Please enter a valid username")
    }
    
    console.log(username)
    
    var password = prompt("Enter your password")
    validateUsername(password)
    
    while(!validateUsername(password)){
        password = prompt("Please enter a valid password")
    }

    let confirmPassword = prompt("Confirm password")
    while(password !== confirmPassword){
        confirmPassword = prompt("Confirm password")
    }


    alert("You've signed up successfully!!!")
    console.log(password)  
}

signUpUser();


function validateUsername(name){
    if(name === null) return true;
    if(name.length < 10){
        return true;
    }
    return false;
}

function validatePassword(password){
    if(password === null) return false;
    if(password.length > 6){
        return true;
    }
    return false;
}