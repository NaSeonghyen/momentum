const h1 = document.querySelector("div.hello:first-child h1");

// 클릭 이벤트를 이용하여 h1의 색상 변경
function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click",handleTitleClick);