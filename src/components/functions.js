

function newInput(e){
    setEmail(e.target.value);
    if(!isValidEmail(e.target.value)){
        setError("Email is invalid");
    }
    else{
        setError(null);
}

function isValidEmail(email){
    return /\S+@\S+\.\S+/.test(email)
}
