const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const linearGradient = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))`;
const backgroundImage = `img/${chosenImage}`;

document.body.style.backgroundImage = `${linearGradient},url(${backgroundImage})`;

// 2022.08.23 NSH 이미지 배경처리로 인한 주석처리

// const bgImage = document.createElement("img");
// bgImage.src = BACKGROUNDIMAGE;
//document.body.appendChild(bgImage);



