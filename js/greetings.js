const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const weatherss = document.querySelector("#weather");
const weatherssss = document.querySelectorAll("#weather span");
const clocks = document.querySelector("#clock");
const quotess = document.querySelector("#quote");
const todotodo = document.querySelector("#todo"); 
const datess = document.querySelector("#date");
const greetings = document.querySelector("#greetings");
const greetingImage = document.querySelector("#greetings span");

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
    quotess.classList.remove(HIDDEN_CLASSNAME);
    todotodo.classList.remove(HIDDEN_CLASSNAME);
    datess.classList.remove(HIDDEN_CLASSNAME);
    greetings.classList.remove(HIDDEN_CLASSNAME);
    greetingImage.classList.remove(HIDDEN_CLASSNAME);
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

function ClickPrevious() {
    console.log(weatherssss);
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    weatherss.classList.add(HIDDEN_CLASSNAME);
    clocks.classList.add(HIDDEN_CLASSNAME);
    quotess.classList.add(HIDDEN_CLASSNAME);
    todotodo.classList.add(HIDDEN_CLASSNAME);
    datess.classList.add(HIDDEN_CLASSNAME);
    greetings.classList.add(HIDDEN_CLASSNAME);
    greetingImage.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";
    weatherssss.forEach(function(data){data.innerText="";});
}

greetingImage.addEventListener("click", ClickPrevious);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

