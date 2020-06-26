
// Setting strings for possible character types.
const lowerCaseString = "abcdefghijklmnopqrstuvwxyz"
const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numericString = "1234567890"
const specialCharString = `!"#$%&'(\`)*+,-./:;<=>?@[\\]^_{|}~`;

// converting character strings to arrays.
const lowerCaseArray = lowerCaseString.split("");
const upperCaseArray = upperCaseString.split("");
const numericArray = numericString.split("");
const specialCharArray = specialCharString.split("");

// Initiate the chosen password characters array to be filled by checkboxes.
let passwordArray = []

// Activating the button
let generateBtn = document.querySelector("#passwordGeneratorButton");
// generateBtn.addEventListener("click", displayPasswordResults);

generateBtn.addEventListener('click',() => {    
  displayPasswordResults();
  genCharArray();    
});

function genCharArray() {
  // let checkedBoxes = document.querySelectorAll('input[name="charType"]:checked');
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
  console.log(passwordArray);
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
let randomMax = passwordArray.length;

// This loop will build the password
for (i = 0; i < passwordLength; i++) {
  let randomSelection = Math.floor(Math.random() * randomMax);
  let passwordChar = passwordArray[randomSelection];

  // add characters to userPassword
  userPassword = userPassword.concat(passwordChar);
}
// Display the password
function displayPasswordResults() {
  document.getElementById("passwordDisplay").innerHTML = userPassword;
  console.log(passwordLength);
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
