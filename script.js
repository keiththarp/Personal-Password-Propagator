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

// Activating the button
let generateBtn = document.querySelector("#passwordGeneratorButton");

// Button click starts the password build process.
generateBtn.addEventListener("click", genCharArray);

// Initiate the chosen password characters array to be filled by checkboxes.
let passwordArray = [];

// Assess the checkboxes and build the character array.
function genCharArray() {
  //Clear the array of prior use.
  passwordArray = [];

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
  displayPasswordResults();
}

// Live feedback display for user selected password length, called by HTML.
function genPassLength() {
  passwordLength = document.getElementById("passLength").value;
  document.getElementById("lengthDisplay").innerHTML = " " + passwordLength;
}

// Retrieving the password length.
let passwordLength = document.getElementById("passLength").value;

// initializing display variable.
const passwordEl = document.getElementById("passwordDisplay");

// initializing variable to help hide/display copy button
const copyButton = document.getElementById("copyButton");

function passwordGenerator() {
  let userPassword = [];
  // This loop will build the password
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordArray.length);
    let passwordChar = passwordArray[randomIndex];

    // add characters to userPassword
    userPassword.push(passwordChar);
  }
  return userPassword.join("");
}

// Display the password
function displayPasswordResults() {
  const password = passwordGenerator();

  // dealing with display of "undefined" when no character set is chosen/
  if (passwordArray.length === 0) {
    passwordEl.classList.add("alert");
    passwordEl.innerHTML = "!- Select at least one character set -!";
    return;
  }
  //print the password to the screen.
  passwordEl.classList.remove("alert");
  copyButton.classList.remove("hideButton");
  passwordEl.innerHTML = password;
}

// Select and copy function called by HTML.
function copyPassword() {
  passwordEl.select();
  document.execCommand("copy");
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
