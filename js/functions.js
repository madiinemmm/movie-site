const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validate(email, password) {
    if (!email.value) {
        alert('Please enter a email');
        email.focus(); 
        return false;
    }

    if (email.value.trim().length < 3) {
        alert('email must be at least 3 characters')
        email.focus();
        return false;
    }

    if (!validateEmail(email.value)) {
        alert('email is invalid');
        email.focus();

        return false;
    }
        if (!password.value) {
        alert('Please enter a password');
        password.focus(); 
        return false;
    }

    if (password.value.trim().length < 4) {
        alert('password must be at least 4 characters')
        password.focus();
        return false;
    }

    let users = getData();
    if (users.length) {
       let isExist =  users.some(user => {
        return user.email == email.value
       })

       if (isExist) {
        alert('email already exists')
        return false;
       }
    }




    return true;
}

function validateSignUp(email, password, repassword) {
    if (!email.value) {
        alert('Please enter a email');
        email.focus(); 
        return false;
    }

    if (email.value.trim().length < 3) {
        alert('email must be at least 3 characters')
        email.focus();
        return false;
    }

    if (!validateEmail(email.value)) {
        alert('email is invalid');
        email.focus();

        return false;
    }


    if (password.value.trim().length < 4) {
        alert('password must be at least 4 characters')
        password.focus();
        return false;
    }

    
    if (repassword.value.trim().length < 4) {
        alert('repassword must be at least 4 characters')
        repassword.focus();
        return false;
    }

    if (password.value != repassword.value) {
        alert('password did not match');
        password.focus();
        repassword.value = '';
        return false;
    }

    let users = getData();
    if (users.length) {
       let isExist =  users.some(user => {
        return user.email == email.value
       })

       if (isExist) {
        alert('email already exists')
        return false;
       }
    }

    return true;

}

function getData() {
    let data = [];
    if (localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'));
    }

    return data;
}

export {validate, getData, validateSignUp}