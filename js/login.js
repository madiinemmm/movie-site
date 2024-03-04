  import {validate, getData} from "../js/functions.js"

const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const card = document.getElementById('card');
const rectangle = document.getElementById('rectangle');
const emailInput = document.querySelector('#email-input');
const form = document.getElementById('form');

btn && btn.addEventListener('click', function(e) {
e.preventDefault();
const isValid = validate(email, password);
if (isValid) {
     const user = {
       email: email.value,
       password: password.value
     }    
     
     let users = getData();
     users.push(user);

     localStorage.setItem('users', JSON.stringify(users));
     form.reset();
     let index = window.location.href.search('pages')
     let baseUrl = window.location.href.substring(0, index)
     window.location.assign(`${baseUrl}pages/signup.html`)
}
});


  