// Assignment Code
var generateBtn = document.querySelector("#generate");

// password length prompt 
let passwordLength = prompt("How many characters would you like your password to be?")
let parsePasswordLength = parseInt(passwordLength)

// the other prompt values are stored here
let lowerCasePreference;
let upperCasePreference;
let numberPreference;
let specialCharactersPreference;

// if character length is correct is goes to display the other prompts but if false its brought back to the first prompt
isCorrectLength = false;
let isCorrectLength = checkLength(parsePasswordLength, isCorrectLength);
if (isCorrectLength) {
  displayPrompts();
}

function checkLength(parsePasswordLength, isCorrectLength) {
  if (parsePasswordLength < 8 || parsePasswordLength > 129) {
    alert("Refresh browser and try again! password length must be min 8 or max 129 characters")
    isCorrectLength = false;
  } else {
    isCorrectLength = true;
  }
  return isCorrectLength;
}

// all the arrays used to generate the password
let characterOptions = []
let newPasswordArray = []
let lowercaseArray = [...'abcdefghijklmnopqrstuvwxyz']
let uppercaseArray = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharactersArray = [..."!#$%&'()*+,-./:;<=>?@[^_`{|}~"]

// Write password to the #password input
function generatePassword() {
  if (passwordLowerCase === true) {
    characterOptions = characterOptions.concat(lowercaseArray)
    console.log(characterOptions)
  } else {
    console.log("no to lowercase")
  }
  if (upperCasePreference === true) {
    characterOptions = characterOptions.concat(uppercaseArray)
    upperCasePreference = console.log(characterOptions)
  } else {
    upperCasePreference = console.log("no to uppercase")
  }

  if (numberPreference === true) {
    characterOptions = characterOptions.concat(numberArray)
    numberPreference = console.log(characterOptions)
  } else {
    numberPreference = console.log("no to numbers")
  }

  if (specialCharactersPreference) {
    characterOptions = characterOptions.concat(specialCharactersArray)
    specialCharactersPreference = console.log(characterOptions);
  } else {
    specialCharactersPreference = console.log("no to special characters")
  }
  console.log(parsePasswordLength);
  if (parsePasswordLength < 8 || parsePasswordLength > 129) {
    alert("try again")
  } else {
    for (let i = 0; i < parsePasswordLength; i++) {
      newPasswordArray.push(characterOptions[Math.floor(Math.random() * (90 - 0))]);
    }
    return (newPasswordArray.join('').toString());
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  console.log("clicked");
}

// The other four display prompts 
function displayPrompts() {
  passwordLowerCase = confirm("Would you like lower case characters in your password??")
  upperCasePreference = confirm("Would you like uppercase characters in your password?")
  numberPreference = confirm("Would you like number in your password?")
  specialCharactersPreference = confirm("Would you like to add special characters?")
}

/* todo:

click generateBtn to generate password
prompt one is password length 8-128
prompt to use lowercase 
prompt to use uppercase
prompt to use numbers and or special characters
once all the prompts are done a password should generate 
it can be displayed as alert or in the text box 

todo part 2:

create a quit function if they don't enter the correct amount of characters
store the new password in a variable that can be used outside of the generate password function.
make the outcome a string 
add that variable to the click function so it displays on screen 
clean and test the code 
*/
