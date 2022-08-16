const colors = ["red", "green", "blue", "white", "yellow"];
const hexCode = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const btn = document.querySelector("#btn");
const color = document.getElementById("color");
const hexBtn = document.getElementById("hexBtn");
function simpleAction() {
  let randomNumber = Math.floor(Math.random() * colors.length);
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}

function hexAction() {
  let randomNumber = "#";
  for (let index = 0; index < 6; index++) {
    randomNumber += hexCode[Math.floor(Math.random() * hexCode.length)];
  }
  console.log(randomNumber);
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
}
