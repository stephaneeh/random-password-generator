// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Set Variables
//  lowercase
var lower = ("abcdefghiklmnopqrstuvwxyz")
//  uppercase
var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
//  numeric
var number = ("01234567890")
//  special characters
var special = (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")


// start function to generate password

function generatePassword() {
  
}




//TODO: PROMPT user inpupt
//Criteria: 
//  Password Length (8 - 128)
var minLength = 8;
var maxLength = 128;
//Prompt for user input - how many characters
var inputLength = prompt("How many characters does your password need?", "Enter a number between 8 and 128")

if (inputLength < minLength || inputLength > maxLength ) {
  alert("Please enter a valid number between 8 and 128"); }
    else {
      return;
    }




// TODO: At least one of the above options must be true
// Loop back to start if criteria is not met

// TODO: Password is displayed in an alert or written to the page



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
