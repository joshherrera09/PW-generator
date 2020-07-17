alert("Hello, please help us generate your password")
var passLength = parseInt(prompt("Please enter a number 8-128, to determine the length of your password")
var upperCaseLet = 



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//generate password

generateBtn.addEventListener("click", writepassword);

function generatePassword() {
    var lowerCaseLetters = ();
    var upperCaseLetters = ();
    var specialChar =();
    
    var passLength = 0;

    var password = ""

    for var i=0; i < passLength; i++) {
        var xletter = Math.floor(Math.random() * lowerCaseLetters.length);
        generatePassword += lowerCaseLetters.substring(xletter, xletter+1);
    }
    document.getElementsByTagName('textarea')[0].value = '#password'

}



