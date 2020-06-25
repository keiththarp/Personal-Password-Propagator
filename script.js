// Assignment Code
/*
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


document.getElementById("generate").addEventListener("click", passwordFunction)
*/

// Setting strings for possible character types.
let specialCharString = `!"#$%&'(\`)*+,-./:;<=>?@[\\]^_{|}~`;
let numericString = "1234567890"
let lowerCaseString = "abcdefghijklmnopqrstuvwxyz"
let upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// converting character strings to arrays.
let specialCharArray = specialCharString.split("");
let numericArray = numericString.split("");
let lowerCaseArray = lowerCaseString.split("");
let upperCaseArray = upperCaseString.split("");




// function passwordFunction() {
//   let passwordLength = prompt("Between 8 - 128, how long must your password be?");
//   if (passwordLength < 8 || passwordLength > 128) {
//     passwordFunction();
//   }
//   else {
//     document.getElementById("password").innerHTML = passwordLength;
//   }
// }



/*
Generate btn clicked:
Question = Between 8 - 128, how long would you like your password to be?
Questions = Capitals, numbers, special char
*/


/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/