const bg = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
const body = document.body.style;

const randomBg = function () {
  const randomPickBgNum = Math.floor(Math.random() * bg.length);
  body.backgroundImage = `url("./assets/${bg[randomPickBgNum]}.jpg")`;
}

randomBg();