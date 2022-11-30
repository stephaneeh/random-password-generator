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
  } 
  //failure call if password length not met
  else { 
    window.alert("Password must be between 8 and 128 characters");
    generatePassword(); } //returns to beginning of function

    //prompts for specific characters
    if(confirm("Does your password need to include lowercase characters?")) {
      passwordContent = passwordContent + lower; };
          
    if(confirm("Does your password need to include uppercase characters?")) {
      passwordContent = passwordContent + upper; };
    
    if(confirm("Does your password need to include numbers?")) {
      passwordContent = passwordContent + number; };
    
    if(confirm("Does your password need to include special characters?")) {
      passwordContent = passwordContent + special; };
    
      //if user selects no for all options, no string is generated - return to beginning of function
    if(passwordContent==""){ 
      window.alert("Password must contain some characters - please try again");
      generatePassword();
    }; 

      // randomise password content based on true results above and inputLength
      for (let i = 0; i < inputLength; i++) {
        password = password + passwordContent[(Math.floor(Math.random() * passwordContent.length))];
      };

      return password;
        
      }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);