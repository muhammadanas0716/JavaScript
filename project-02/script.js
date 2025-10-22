console.log("Hello");

const resultHTML = document.getElementById("result");

const getBMI = () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  if (weight && height && weight > 0 && height > 0) {
    const bmi = weight / (height * height);
    resultHTML.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  } else {
    resultHTML.innerHTML = `Please give proper values bro`;
  }
};
