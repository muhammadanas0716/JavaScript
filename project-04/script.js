console.log("Hello");

const range = document.getElementById("range");
const rangeValue = document.getElementById("rangeValue");
const resultHTML = document.getElementById("result");

let randomNumber = Math.floor(Math.random() * range.value) + 1;
console.log("Initial random number:", randomNumber);

range.addEventListener("input", () => {
  rangeValue.textContent = range.value;

  randomNumber = Math.floor(Math.random() * range.value) + 1;
  console.log("New random number:", randomNumber);
});

const checkGuess = () => {
  const guess = parseInt(document.getElementById("guess").value);

  if (guess === randomNumber) {
    resultHTML.innerText = "YES";
  } else if (guess > randomNumber) {
    resultHTML.innerText = "TOO GREAT, GO LOWER";
  } else if (guess < randomNumber) {
    resultHTML.innerText = "TOO LESS, GO HIGHER";
  }
};
