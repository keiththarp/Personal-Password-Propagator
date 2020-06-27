
// Setting strings for possible character types.
const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericString = "1234567890";
const specialCharString = `!"#$%&'(\`)*+,-./:;<=>?@[\\]^_{|}~`;

// converting character strings to arrays.
const lowerCaseArray = lowerCaseString.split("");
const upperCaseArray = upperCaseString.split("");
const numericArray = numericString.split("");
const specialCharArray = specialCharString.split("");

// Initiate the chosen password characters array to be filled by checkboxes.
let passwordArray = [];

// Initiate array length variable
let randomMax = 0;

// Activating the button
let generateBtn = document.querySelector("#passwordGeneratorButton");

// Button calls the following functions to build the password.
generateBtn.addEventListener('click', () => {
  // myFunction();
  // clearPasswordDisplay();
  genCharArray();
  passwordGenerator();
  displayPasswordResults()
});
// these functions and there related calls were trying to deal with the stacking passwords.
// function myFunction() {
//   document.getElementById("myForm").reset();
// }

// function clearPasswordDisplay() {
//   document.getElementById("passwordDisplay").innerHTML = "";
// }

// Check the checkboxes and build the character array.
function genCharArray() {
  if (document.getElementById("charType0").checked) {
    passwordArray = passwordArray.concat(lowerCaseArray);
  }
  if (document.getElementById("charType1").checked) {
    passwordArray = passwordArray.concat(upperCaseArray);
  }
  if (document.getElementById("charType2").checked) {
    passwordArray = passwordArray.concat(numericArray);
  }
  if (document.getElementById("charType3").checked) {
    passwordArray = passwordArray.concat(specialCharArray);
  }
  console.log(passwordArray)
  randomMax = passwordArray.length;
  console.log(randomMax);

}

// Live feedback display for user selected password length.
function genPassLength() {
  passwordLength = document.getElementById("passLength").value;
  document.getElementById("lengthDisplay").innerHTML = " " + passwordLength;
}

// Retrieving the password length.
let passwordLength = document.getElementById("passLength").value;

// initiate userPassword variable
let userPassword = "";

function passwordGenerator() {
  // This loop will build the password
  for (i = 0; i < passwordLength; i++) {
    if (passwordArray.length === 0) {
      alert("Select at least one character set.");
      clearPasswordDisplay();
      return;
    }
    let randomSelection = Math.floor(Math.random() * randomMax);
    let passwordChar = passwordArray[randomSelection];

    // add characters to userPassword
    userPassword = userPassword.concat(passwordChar);
  }
}

// Display the password
function displayPasswordResults() {
  document.getElementById("passwordDisplay").innerHTML = userPassword;
  console.log(passwordLength);
  console.log(passwordArray);
  console.log(userPassword);
}

// *** NOTES ***


/* Program process:
initiate userPassword variable
initiate character arrays
initiate base array to build on
1 - User clicks 'Generate Password' button.
  Results in prompt with parameter questions.
  Question 1 = How long would you like your password to be? >8 && <128
  Question 2 = What types of characters would you like to include? = lowerCase, upperCase, numbers, special char
2 - User types in number for password length, and selects character types (possibly Checkboxes?)
  Validate password length input and assign to passwordLength variable
  Build passwordArray based on user input
----
  Run function to generate password.
  Loop iterates passwordLength
  random passwordArray index chosen
  character at random index concatenates to userPassword string
----
3 - Display generated password (userPassword)
*/
