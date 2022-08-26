const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const weatherDisplay = document.querySelectorAll("#weather span");
const clockDisplay = document.querySelector("#clock");
const quoteDisplay = document.querySelector("#quote");
const todoDisplay = document.querySelector("#todo"); 
const dateDisplay = document.querySelector("#date");
const previousImage = document.querySelector("#greetings span");

const HIDDEN_CLASSNAME = "hidden";
const WEATHER_HIDDEN_CLASSNAME = "weather--hidden";
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
    weatherDisplay.forEach(function(data){data.classList.remove(WEATHER_HIDDEN_CLASSNAME);});
    clockDisplay.classList.remove(HIDDEN_CLASSNAME);
    quoteDisplay.classList.remove(HIDDEN_CLASSNAME);
    todoDisplay.classList.remove(HIDDEN_CLASSNAME);
    dateDisplay.classList.remove(HIDDEN_CLASSNAME);
    previousImage.classList.remove(HIDDEN_CLASSNAME);
}

function ClickPrevious() {
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    weatherDisplay.forEach(function(data){data.classList.add(WEATHER_HIDDEN_CLASSNAME);});
    clockDisplay.classList.add(HIDDEN_CLASSNAME);
    quoteDisplay.classList.add(HIDDEN_CLASSNAME);
    todoDisplay.classList.add(HIDDEN_CLASSNAME);
    dateDisplay.classList.add(HIDDEN_CLASSNAME);
    previousImage.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";
    
}

previousImage.addEventListener("click", ClickPrevious);

const savedUsername = localStorage.getItem(USERNAME_KEY);
loginForm.addEventListener("submit", onLoginSubmit);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUsername);
}

