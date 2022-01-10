// Assignment Code
var generateBtn = document.querySelector("#generate");
var charsLcaseString = "qwertyuiopasdfghjklzxcvbnm";
var charsLcaseArr = charsLcaseString.split("");
var charsUcaseString = "QWERTYUIOPASDFGHJKLZXCVBNM";
var charsUcaseArr = charsUcaseString.split("");
var charsNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charsSpec = " !'()*+,-./:;<=>?@[^_`{|}~";
var charsSpecArr = charsSpec.split("");

// Write password to the #password input
function writePassword() {
  var password = function generatePassword() {};
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
