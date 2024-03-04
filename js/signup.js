import { getData, validateSignUp } from "./functions.js";

    
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const btn = document.getElementById('btn');



const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };





btn && btn.addEventListener('click', function(e) {
    e.preventDefault();
    const isValid = validateSignUp(email, password, repassword);
         
    if (isValid) {
        console.log(29);
        let users = getData();
        let user = users.find((el) => {
            return el.email == email.value && el.password == password.value
          
        })
        if (user?.name) {
            let fullUrl = window.location.href;
            let index = fullUrl.search('pages');
            let baseUrl = fullUrl.substring(0, index);
            window.location.assign(`${baseUrl}pages/movie.html`)
        } else {
            alert('password or email is invalid');
        }
    }
    
});


