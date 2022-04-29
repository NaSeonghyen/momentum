const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date(); //date 객체 생성(날짜 정보 불러오기 위해 이용)
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`; //변수와 문자열을 한꺼번에 나타낼때는 '${변수} 문자열'형태로 사용
    /*
    1) String() : 괄호 안에 있는 내용을 문자열로 변경
    2) date.getHours() : 현재 시간을 가져옴
    3) date.getMinutes() : 현재 분을 가져옴
    4) date.getSeconds() : 현재 초를 가져옴
    5) 문자열.padStart(length, 넣을 문자열): 문자열 length를 확인하고 length 미만이면 넣을 문자열로 왼쪽에서 채워줌
    6) 문자열.padEnd(length, 넣을 문자열): 문자열 length를 확인하고 length 미만이면 넣을 문자열로 오른쪽에서 채워줌
    */
}

getClock();
setInterval(getClock, 1000); //setInterval(실행할 함수, 몇초마다 실행[ms])

//setTimeout(sayHello,5000); //setTimeout(실행할 함수, 몇초 기다릴지[ms])



