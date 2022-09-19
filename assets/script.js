var charsLcaseString = "qwertyuiopasdfghjklzxcvbnm";
var charsLcaseArr = charsLcaseString.split("");
var charsUcaseString = "QWERTYUIOPASDFGHJKLZXCVBNM";
var charsUcaseArr = charsUcaseString.split("");
var charsNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charsSpec = " !'()*+,-./:;<=>?@[^_`{|}~";
var charsSpecArr = charsSpec.split("");
const generatePWBtn = document.getElementById("generate");

function askPrompts() {
  let password = "";
  let charsSelected = [];
  let pwLength = prompt(
    "How many characters wound you like your password to be? (Enter a number between 8 and 128.)"
  );
  if (isNaN(pwLength) == true) {
    alert("Please ensure input is a number.");
  } else {
    if (parseInt(pwLength) > 7 && parseInt(pwLength) < 129) {
      let includeLC = confirm(
        "Would you like your password to potentially include lowercase letters? (OK for yes, Cancel for no.)"
      );
      if (includeLC == true) {
        for (let i = 0; i < charsLcaseArr.length; i++) {
          charsSelected.push(charsLcaseArr[i]);
        }
      }

      let includeUC = confirm(
        "Would you like your password to potentially include uppercase letters? (OK for yes, Cancel for no.)"
      );
      if (includeUC == true) {
        for (let i = 0; i < charsUcaseArr.length; i++) {
          charsSelected.push(charsUcaseArr[i]);
        }
      }

      let includeNumbers = confirm(
        "Would you like your password to potentially include numerical characters? (OK for yes, Cancel for no.)"
      );
      if (includeNumbers == true) {
        for (let i = 0; i < charsNumber.length; i++) {
          charsSelected.push(charsNumber[i]);
        }
      }

      let includeSpec = confirm(
        "Would you like your password to potentially include special characters (i.e. '!' or '@')? (OK for yes, Cancel for no.)"
      );
      if (includeSpec == true) {
        for (let i = 0; i < charsSpecArr.length; i++) {
          charsSelected.push(charsSpecArr[i]);
        }
      }
    } else {
      alert("Please ensure input is between 8 and 128.");
    }
  }

  // console.log(charsSelected);

  function generatePassword() {
    for (var i = 0; i < parseInt(pwLength); i++) {
      var randomNumber = Math.floor(Math.random() * charsSelected.length);
      password += charsSelected[randomNumber];
    }
    return password;
  }
  const passwordText = document.getElementById("password");

  passwordText.innerHTML = generatePassword();
}
generatePWBtn.addEventListener("click", askPrompts);
