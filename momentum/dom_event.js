//document.getElementById("title")
//: html의 title이란 id를 가진 요소를 가져온다.
// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

//const hellos = document.getElementsByClassName("hello");
// ClassName이 hello인 요소들 가져옴(배열 형태로 가져옴)

//const title = document.getElementsByTagName("h1");
//태그 안의 h1 요소를 가져옴(배열 형태로 가져옴)
//태그는 div, a, p 등등이 있음.

const title2 = document.querySelector("div.hello:first-child h1");
//css 방식으로 ()안에 있는 요소를 가져옴
//2개 이상인 경우 첫번째 요소만 가져옴

//const title3 = document.querySelectorAll(".hello h1");
//css 방식으로 ()안에 있는 요소를 모두 가져옴

//title2.innerText = "hello"
//클래스가 hello인 h1의 innerText를 hello로 변경
//querySelector이기 때문에 첫번째 요소만 변경

// 스타일 변경
//title2.style.color = "blue";

// 클릭 이벤트
function handleTitleClick(){
    title2.style.color = "blue";
}

//마우스 이벤트(해당 요소에 마우스를 올려놓을 경우)
function handleMouseEnter(){
    title2.innerText = "Mouse is here!";
}

//마우스 이벤트2(해당 요소에 마우스가 벗어난 경우)
function handleMouseLeave(){
    title2.innerText = "Mouse is gone!";
}

//윈도우 이벤트(브라우저 창 크기조절하는 경우)
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

//윈도우 이벤트2(복사 발생하는 경우)
function handleWindowCopy(){
    alert("copier!");
}

//윈도우 이벤트3(오프라인 상태인 경우)
function handleWindowOffline(){
    alert("SOS no WIFI");
}

//윈도우 이벤트3(온라인 상태인 경우)
function handleWindowONline(){
    alert("ALL GOOD!!");
}

title2.onclick = handleTitleClick;
title2.addEventListener("mouseenter",handleMouseEnter);
title2.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowONline);