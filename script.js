let display_result = document.getElementById("display-result");
let button = document.getElementById("gen-btn");

button.addEventListener("click", () => {
  //getting input on run time
  let input_value = document.getElementById("userinput").value;
  // Convert input value to a number
  let num = parseInt(input_value);

  // Check if the input is a valid number
  if (isNaN(num) || num < 2) {
    display_result.innerHTML = "Invalid input";
    return;
  }

  // Check if the number is prime or composite
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  // Display the result
  if (isPrime) {
    display_result.innerHTML = "It's a prime!";
  } else {
    display_result.innerHTML = "It's a composite!";
  }
});
