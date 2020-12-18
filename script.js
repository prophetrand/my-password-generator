// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// This specialChars array has specialChars.length = 32 
var specialChars =  [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 
  function generatePassword(){
    
    var userLength = prompt("How many characters long do you want your password to be? \nYou must choose a number no smaller than 8 and no larger than 128.");
    var validator = false;
    var charHolder = [];
    var passBuilder = [];

    // This While loop checks if the boolean variable "validator" is set to false, which it is by default. It prompts the User to confirm their choice for each character type, and saves their choices in their respective variables. If at least one of the four variables returns true, then validator is set to true, ending the while loop. 
    // If none are confirmed then the else condition triggers, which is simply an alert to the User that they must choose at least one of the options. validator remains unchanged and the while loop runs again.
    while (validator === false){
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
        validator = true;
      } else {
        alert("DISFUNCTION. PLEASE ENTER AT LEAST ONE OK PLEASE");
      }
    }

    // Here are multiple if statements that add the contents of each character set array to the collective charHolder array, provided that the User confirmed the choice for the given character set. Each if statement also utilizes the push() and apply() methods to push the contents of each array into the collective charHolder array, which is empty prior to being accessed by these if statements.
    if (lowerYes){
      Array.prototype.push.apply(charHolder, lowerChars);
    }
    if (upperYes){
      Array.prototype.push.apply(charHolder, upperChars);
    }
    if (numYes){
      Array.prototype.push.apply(charHolder, numChars);
    }
    if (specialYes){
      Array.prototype.push.apply(charHolder, specialChars);
    }
    
    console.log(charHolder);
   
    
    for (var i = 0; i < userLength; i++){
      

       // note to RAND: This For loop iterates through each index of the array/string(?) the number of times that the User inputs for the password length. Maybe have each randomly generated character populate an index of another array (with .push()), then run a .join() method (google this it might be called something else) to consolidate the array into one string again. Also make this comment presentable =)
      passBuilder.push("character");
    }

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
