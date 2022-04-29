//html 선택자 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//submit 클릭 시 실행되는 함수
function onLoginSubmit(event) {
    event.preventDefault(); // 기본 동작 막는 함수
    loginForm.classList.add(HIDDEN_CLASSNAME); // 폼에 클래스 추가
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
} 
    
function paintGreetings(username){
    //greeting.innerText = "Hello " + username + "!";
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit); //이벤트 연결
} else {
    paintGreetings(savedUsername);
}