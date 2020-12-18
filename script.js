// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// This array has specialChars.length = 32 
var specialChars =  [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var charHolder = [];

  passwordText.value = password;

  // note to RAND: I will need a For loop that iterates through each index of the array/string(?) the number of times that the user inputs for the password length. Maybe have each randomly generated character populate an index of another array (with .push()), then run a .join() method (google this it might be called something else) to consolidate the array into one string again.
  function generatePassword(){
    var userLength = prompt("How many characters long do you want your password to be?");
    
    for (var i = 0; i < userLength; i++){
      charHolder.push()
    }

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
