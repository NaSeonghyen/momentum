const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;


document.body.appendChild(bgImage); // 제일 아래쪽에 배치
//prepend는 제일 위쪽 배치