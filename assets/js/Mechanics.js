// inputed username
function usernamecheck() {
    var username = document.getElementById('userinput').value;
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    // no special characters
    if (format.test(username)){
        document.getElementById('error').style.display = 'block';
        return;
    }
    else {
        document.getElementById('error').style.display = 'none';
    }
}

