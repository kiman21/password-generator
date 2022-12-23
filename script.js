// Assignment Code
var generateBtn = document.querySelector("#generate");
//Arrays of different characters by type
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = [".", ",", "?", "!", "/", "-", "_", "+", "=", "@", "#", "$", "%", "^", "<", ">", "&", "*", "(", ")"];

// Write password to the #password input
function writePassword() {
    function generatePassword() {
      // Ask user for password length
      var pwLengthInput = prompt("Please enter password length (numbers only)");
      //Converts user entry to a number
      var pwLength = number(pwLengthInput);
      //Confirm password is 8-128 characters
      if (pwLength >= 8 && pwLength <= 128) {
        //Ask user to confirm which characters to include in password
        var lowerCaseInclude = confirm("Include lower case letters?");
        var upperCaseInclude = confirm("Include upper case letters?");
        var numberInclude = confirm("Include numbers?");
        var characterInclude = confirm("Include special characters?");
        //While loop selects a random character one at a time from selected arrays until password is correct length
        var integer = 0;
        while (password.length < pwLength) {
          if(integer%4 == 0) {
            if (lowerCaseInclude){
              password = password.concat(lowerCase[math.floor(math.random()*lowerCase.length)]);
            }
          }
          if(integer%4 == 1) {
            if (upperCaseInclude){
              password = password.concat(upperCase[math.floor(math.random()*upperCase.length)]);
            }
          }
          if(integer%4 == 2) {
            if (numberInclude){
              password = password.concat(numbers[math.floor(math.random()*numbers.length)]);
            }
          }
          if(integer%4 == 3) {
            if (characterInclude){
              password = password.concat(characters[math.floor(math.random()*characters.length)]);
            }
          }
          integer++;
        }

      } else {
        //Alerts user that password is too long, too short, or invalid
        alert ("Invalid password.");
        return;
      }
    };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
