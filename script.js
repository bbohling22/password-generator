
// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  var userInput = window.prompt("How many characters would you like your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("This is not a number. Please try again")
    return
  }

  if (passwordLength < 8 || passwordLength > 128 ){
    window.alert("Password length must be between 8 and 128 characters")
    return
  }

  var userWantsNumbers = window.confirm("would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("would you like to include uppaercase letters in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", ]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var options = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    options.push(numberList)
  }

  if (userWantsSymbols === true) {
    options.push(symbolList)
  }

  if (userWantsLowercase === true) {
    options.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    options.push(uppercaseList)
  }

  if (options.length === 0) {
    options.push(lowercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(options)
    var randomCharacter = getRandomItem(randomList)
    generatedPassword += randomCharacter
  }
 
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);