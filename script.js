

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

// base array to build password array onto
let baseArray = [];

// Activating the button
let generateBtn = document.querySelector("#passwordGeneratorButton");
generateBtn.addEventListener("click", displayPasswordResults);

// This needs to accept user selections after .concat
// Building the password array
let passwordArray = baseArray.concat(numericArray, lowerCaseArray, specialCharArray, upperCaseArray);

// Live feedback display for user selected password length.
function genPass() {
  passwordLength = document.getElementById("passLength").value;
  document.getElementById("lengthDisplay").innerHTML = " " + passwordLength;
}

// Retrieving the password length.
let passwordLength = document.getElementById("passLength").value;

// initiate userPassword variable
let userPassword = "";
let randomMax = passwordArray.length;

// This loop will build the password
  for(i = 0; i < passwordLength; i++) {
    let randomSelection = Math.floor(Math.random() * randomMax);
    let passwordChar = passwordArray[randomSelection];

    // add characters to userPassword
    userPassword = userPassword.concat(passwordChar);
  }
  // Display the password
  function displayPasswordResults() {
  document.getElementById("passwordDisplay").innerHTML = userPassword;
  }

// working on retrieving and validating the checkboxes.

//   let arrayBuild = null; 
// for(let i = 0; i < 4; i++){
//   let userParameters = document.getElementsById('characterType' + i);
//       if(userParameters.checked){
//         arrayBuild = userParameters[i].value;
//            break;
//       }
// }

// function testCheckbox(oCheckbox)
// {
//     var checkbox_val = oCheckbox.value;
//     if (oCheckbox.checked == true)
//     {
//         alert("Checkbox with name = " + oCheckbox.name + " and value =" +
//                 checkbox_val + " is checked");
//     }
//     else
//     {
//         alert("Checkbox with name = " + oCheckbox.name + " and value =" +
//               checkbox_val + " is not checked");
//     }
// }


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
