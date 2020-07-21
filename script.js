alert("Hello, please help us generate your password");
const passLength = parseInt(prompt("Please enter a number 8-128, to determine the length of your password"));

let charTypes = [];



let password = '';

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['!', '$', '%', '&', '_', '?', '#', '@'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Assignment Code
const generateBtn = document.querySelector("#generate");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getPasswordRequirements() {
 
  let useUpper = confirm('Do you want upper case letters?');
  let useLower = confirm('Do you want lower case letters?');
  let useSpecialChar = confirm('Do you want special characters?');
  let useNumbers = confirm('Do you want numbers?');

  if (useUpper === true) {
    charTypes.push('upperCase');
  }

  if (useLower === true) {
    charTypes.push('lowerCase');
  }

  if (useSpecialChar === true) {
    charTypes.push('specialCharacters');
  }

  if (useNumbers === true) {
    charTypes.push('numbers');
  }
}

//generate password

function generatePassword() {
  let charType;
  let index;
  let newChar;
  let pWord = '';
  
  for (var i = 0; i < passLength; i++) {
    index = getRandomInt(charTypes.length);
    charType = charTypes[index];
    
    if (charType === 'lowerCase') {
      index = getRandomInt(lowerCase.length);
      newChar = lowerCase[index];
      pWord = pWord + newChar;
    }

    if (charType === 'upperCase') {
      index = getRandomInt(upperCase.length);
      newChar = upperCase[index];
      pWord = pWord + newChar;
    }

    if (charType === 'specialCharacters') {
      index = getRandomInt(specialCharacters.length);
      newChar = specialCharacters[index];
      pWord = pWord + newChar;
    }

    if (charType === 'numbers') {
      index = getRandomInt(numbers.length);
      newChar = numbers[index];
      pWord = pWord + newChar;
    }
  }
  return pWord;

}

  // Write password to the #password input
  function writePassword() {
    charTypes = [];
    getPasswordRequirements()
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

