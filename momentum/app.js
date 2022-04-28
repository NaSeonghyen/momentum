const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    // 방법1 classList 이용
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    // 방법2 toggle 이용(방법1과 결과는 같음)
    h1.classList.toggle("clicked");

}

h1.addEventListener("click",handleTitleClick);