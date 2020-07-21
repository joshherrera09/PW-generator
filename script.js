
// initial alert asking user to help generate password
alert("Hello, please help us generate your password");

//const assigning the length of the password determined bby the user
const passLength = parseInt(prompt("Please enter a number 8-128, to determine the length of your password"));

// empty array which will be assigned character types to be used in the password, later determined by the user
let charTypes = [];


// empty password 
let password = '';

// arrays of all possible characters
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['!', '$', '%', '&', '_', '?', '#', '@'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Assignment Code
const generateBtn = document.querySelector("#generate");

// function to generate a random integer 
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// function to determine the characters the user would liek to include in their password
function getPasswordRequirements() {
 
  // prompts the user of each character type
  let useUpper = confirm('Do you want upper case letters?');
  let useLower = confirm('Do you want lower case letters?');
  let useSpecialChar = confirm('Do you want special characters?');
  let useNumbers = confirm('Do you want numbers?');

  // series of if statements, 
  // for all character types that equal true, the according array will be pushed to array charTypes
  // this will create one array of all possible character types available to generate the password at random from
  
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

  // 4 empty variables to be later assigned value in the function generatePassword()
  let charType;
  let index;
  let newChar;
  let pWord = '';
  
  // gets a random charType from charTypes
  for (var i = 0; i < passLength; i++) {
    index = getRandomInt(charTypes.length);
    charType = charTypes[index];
    
  // use 'charType' to determine whcih array to use
    if (charType === 'lowerCase') {
      // get random 'index' from that array
      index = getRandomInt(lowerCase.length);
      // get 'newChar from array using that 'index'
      newChar = lowerCase[index];
      // Append 'newChar to 'password'
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
  //return the password
  return pWord;

}

  // Write password to the #password input
  function writePassword() {
    // reset charTypes to empty everytime the 'Generate Password' button is clicked, to reset the array of possible character types
    charTypes = [];
    // run the getPasswordRequirements function
    getPasswordRequirements()
    // set password to = generatePassword function
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

