const quotes = [
    {
        quote: "강한자가 살아남는 것이 아니라 살아남는 자가 강한 것이다.",
        author: "김유신",
    },
    {
        quote: "세월을 헛되이 보내지 마라, 청춘은 다시 돌아오지 않는다.",
        author: "안중근",
    },
    {
        quote: "진실은 반드시 따르는 자가 있고 정의는 반드시 이루는 날이 있다.",
        author: "안창호",
    },
    {
        quote: "삶이 있는 한 희망은 있다",
        author: "키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘존슨",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author: "찰리 채플린",
    },
    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author: "엘버트 허버드",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다",
        author: "켄러",
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

