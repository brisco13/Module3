// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
  // begin criteria query

  var chars = parseInt(window.prompt("How many characters would you like your password to be? \n(Please input number between 8 and 128)"))
  
  //check for valid input 
    if (isNaN(chars) || chars < 8 || chars > 128)
    { window.alert("Invalid input: Please pick a number of characters between 8 and 128")
      return "Error in Password genertation. Please try again."
    }

  //want lower cases?
  var lowCases = window.confirm("Would you like to include lower case letters? \n(Ok for yes and cancel for no)")

  //want upper cases?
  var upCases = window.confirm("Would you like to include upper case letters? \n(Ok for yes and cancel for no)")

  //want special characters?
  var special = window.confirm("Would you like special characters included? \n(Ok for yes and cancel for no)");

  //want numbers?
  var num = window.confirm("Would you like numbers included? \n(Ok for yes and cancel for no)");

  //check for valid selection
  if(lowCases == false && upCases == false && special== false && num== false) {
    window.alert("Invalid input: Please pick at least one type of character.")
    return "Error in Password genertation. Please try again."
  }

    //define possible character sets
    var passwordList = ''
    var lowerCasesList = "abcdefghijklmnopqrstuvwxyz"
    var upperCasesList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var specialList = "!#$%&*+,-./:;<=>?@^_"
    var numList = "0123456789"

  // criteria defined - now determine character set
  //lower cases true 
  if (lowCases == true ) {
    passwordList = passwordList + lowerCasesList
  }
  //upper cases true
  if (upCases == true ) {
    passwordList = passwordList + upperCasesList
  }
  // special characters
  if (special == true) {
    passwordList = passwordList + specialList
  } 
  // numbers
  if (num == true) {
    passwordList = passwordList + numList
  } 

  console.log(passwordList)
  //generate password
  var newPassword = "";
  for (let i = 0; i < chars; i++) {
    //pick random index in string
    let randNum = Math.floor(Math.random()*passwordList.length);
    //pick random chacter in possible list
    let temp = passwordList.charAt(randNum);
    //concat to end of new password
    newPassword = newPassword + temp;
  }

  return newPassword;

  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
