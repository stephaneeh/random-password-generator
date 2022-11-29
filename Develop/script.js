// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// start function to generate password

function generatePassword() {

  var lower = ("abcdefghiklmnopqrstuvwxyz");
  var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var number = ("1234567890");
  var special = ( "!#$%&'*+,-./:;<=>?@\^_`{|}~" );

  //TODO: PROMPT user inpupt
  var inputLength = prompt("How many characters does your password need?", "Enter a number between 8 and 128");
  
  //  Password Length (8 - 128)
  if(inputLength >= 8 && inputLength <= 128) {
    var passwordContent = ("");
    var password = ("");
    console.log("inputLength =" + inputLength); //TODO: remove later

  } else { //failure call if password length not met
    window.alert("Password must be between 8 and 128 characters");
    console.log("Password is not long enough" + inputLength); //TODO: remove later
    generatePassword(); }

    //prompts for specific characters
    if(confirm("Does your password need to include lowercase characters?")) {
      passwordContent = passwordContent + lower; };
          
    if(confirm("Does your password need to include uppercase characters?")) {
      passwordContent = passwordContent + upper; };
    
    if(confirm("Does your password need to include numbers?")) {
      passwordContent = passwordContent + number; };
    
    if(confirm("Does your password need to include special characters?")) {
      passwordContent = passwordContent + special; };
    
    if(passwordContent==""){ //if user selects no for all options, no string is generated
      window.alert("Password must contain some characters - please try again");
      console.log("Password does not contain any characters" + passwordContent); //TODO: remove later
      generatePassword(); //goes back to beginning of function
    }; 

      // make password be a random result of above options based on above results
      for (let i = 0; i < inputLength; i++) {
        password = password + passwordContent[(Math.floor(Math.random() * passwordContent.length))];
      };
        return password;
      }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);