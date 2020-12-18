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

 
  function generatePassword(){
    
    var userLength = prompt("How many characters long do you want your password to be?");
    var lowerYes = confirm("Would you like to use lowercase letters?");
    var upperYes = confirm("Would you like to use uppercase letters?");
    var numYes = confirm("Would you like to use numbers?");
    var specialYes = confirm("Would you like to use special characters?");

    if (lowerYes || upperYes || numYes || specialYes){
      console.log("It works! Results below");
      console.log(lowerYes);
      console.log(upperYes);
      console.log(numYes);
      console.log(specialYes);
    } else {
      console.log("DISFUNCTION");
    }


    for (var i = 0; i < userLength; i++){
      

       // note to RAND: This For loop iterates through each index of the array/string(?) the number of times that the user inputs for the password length. Maybe have each randomly generated character populate an index of another array (with .push()), then run a .join() method (google this it might be called something else) to consolidate the array into one string again. Also make this comment presentable =)
      charHolder.push("character")
    }

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
