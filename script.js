// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// This specialChars array has specialChars.length = 32 
var specialChars =  [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 
  function generatePassword(){
    // These initial "validator" values act as gates for the while loops that follow, both preventing the User from progressing without giving valid criteria for the password.
    var validator1 = false;
    var validator2 = false;
    var charHolder = [];
    var passBuilder = [];

    // This while loop checks if the boolean variable "validator1" is set to false, which it is by default. If the User answers the prompt with a number outside the bounds declared in the if condition, or if the User clicks "Cancel" instead of "OK" causing a null value, then validator1 is not changed and the while loop runs again after alerting the User of the rules again. A response of a number between 8 and 128 (inclusive) will trigger the else condition and validator1 will be set to true, ending the while loop.
    while (validator1 === false){
      var userLength = prompt("How many characters long do you want your password to be? \nYou must enter a number no smaller than 8 and no larger than 128.");
      
      if (userLength < 8 || userLength > 128 || userLength === null){
        alert("PLEASE ENTER A NUMBER FROM 8 TO 128...");
      } else {
        validator1 = true;
      }
    }

    // This while loop checks if the boolean variable "validator2" is set to false, which it is by default. It prompts the User to confirm their choice for each character type, and saves their choices in their respective variables. If at least one of the four variables returns true, then validator is set to true, ending the while loop. 
    // If none are confirmed then the else condition triggers, which is simply an alert to the User that they must choose at least one of the options. validator remains unchanged and the while loop runs again.
    while (validator2 === false){
      var lowerYes = confirm("Would you like to use lowercase letters?");
      var upperYes = confirm("Would you like to use uppercase letters?");
      var numYes = confirm("Would you like to use numbers?");
      var specialYes = confirm("Would you like to use special characters?");
      
      if (lowerYes || upperYes || numYes || specialYes){
        validator2 = true;
      } else {
        alert("DYSFUNCTION... PLEASE ACCEPT AT LEAST ONE CHARACTER SET...");
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

    // This For loop iterates for the number of times that the User inputs as the password length, represented by userLength.
    // The Math methods called here for the variable randomizer generate a random number between 0 and 1, multiplied by charHolder.length, and then round the number down to the nearest integer. The variable finalChar is set to the index of charHolder specified by randomizer, and then finalChar is pushed into the passBuilder array. The for loop then repeats until i = userLength, effectively generating a number of characters equal to userLength and pushing them into passBuilder one by one.
    for (var i = 0; i < userLength; i++){
      var randomizer = Math.floor(Math.random() * charHolder.length);
      var finalChar = charHolder[randomizer];
      passBuilder.push(finalChar);
    }

    // Finally, the array elements of passBuilder are consolidated into one string with the .join() method, with an empty string passed through it so that nothing is inserted between the array elements. The result will be a continuous string whose length is equal to userLength, and is stored in the variable finalPass. finalPass is returned so that the final output of generatePassword() is the password to be displayed to the User.
    var finalPass = passBuilder.join('');
    return finalPass;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
