const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const weatherss = document.querySelector("#weather");
const clocks = document.querySelector("#clock");
const todoForm = document.querySelector("#todo-form");
const quotess = document.querySelector("#quote");
const toDoLists = document.querySelector("#todo-list");
     

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // greeting.innerText = "Hello " + username;
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `안녕하세요, ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    weatherss.classList.remove(HIDDEN_CLASSNAME);
    clocks.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    quotess.classList.remove(HIDDEN_CLASSNAME);
    toDoLists.classList.remove(HIDDEN_CLASSNAME);
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}