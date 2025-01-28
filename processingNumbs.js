// Function to process two numbers
function processNumbers(a, b) {
  if (a % 2 === 0 && b % 2 === 0) return a * b; // Both even
  if (a % 2 !== 0 && b % 2 !== 0) return a + b; // Both odd
  return a % 2 !== 0 ? a : b; // One even, one odd
}

// Function to convert seconds to days
function secondsToDays(seconds) {
  return Math.floor(seconds / 86400); // 86400 seconds in a day
}

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false; // Not prime
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false; // Not prime
  }
  return true; // Prime
}

// Function to find the smaller of two numbers
function printSmaller(a, b) {
  return a < b ? a : b; // Return smaller
}

// Function to generate an array of numbers from smaller to larger
function rangeArray(a, b) {
  const range = [];
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    range.push(i); // Add numbers to the array
  }
  return range;
}

// Handler functions
function handleNumbers() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("result1").innerText = `Result: ${processNumbers(
    num1,
    num2
  )}`;
}

function convertSeconds() {
  const seconds = parseInt(document.getElementById("seconds").value);
  document.getElementById(
    "result2"
  ).innerText = `Number of days: ${secondsToDays(seconds)}`;
}

function checkPrime() {
  const num = parseInt(document.getElementById("primeCheck").value);
  document.getElementById("result3").innerText = `Is prime: ${isPrime(num)}`;
}

function findSmaller() {
  const num1 = parseInt(document.getElementById("smallNum1").value);
  const num2 = parseInt(document.getElementById("smallNum2").value);
  document.getElementById(
    "result4"
  ).innerText = `Smaller number: ${printSmaller(num1, num2)}`;
}

function generateRange() {
  const num1 = parseInt(document.getElementById("rangeNum1").value);
  const num2 = parseInt(document.getElementById("rangeNum2").value);
  document.getElementById("result5").innerText = `Array: ${rangeArray(
    num1,
    num2
  ).join(", ")}`;
}
