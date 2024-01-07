// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

allUser = []


// Function for getting a random element from an array
const random = (n) => {
  let newArr = [];
  if (n >= allUser.length) {
    return allUser;
  }
  for (let i = 0; i < n; i++) {
    let newElem = allUser[Math.floor(Math.random() * allUser.length)];
    newArr.push(newElem);
  }
  return newArr;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector('#password');
  var userNumber = prompt("How many characters do you want your password to contain??? (Enter a number)");
  if (isNaN(userNumber)) {return(alert("It is not a number. Please enter a number."))}


  var q1 = confirm("Do you want to include numbers??");
  if (q1 == true) {allUser = allUser.concat(numericCharacters)
  } else {};


  var q2 = confirm("Do you want to include special characters??")
  if (q2 == true) {allUser = allUser.concat(specialCharacters)
  } else {};


  var q3 = confirm("Do you want to include lowercase characters??")
  if (q3 == true) {allUser = allUser.concat(lowerCasedCharacters)
  } else {};


  var q4 = confirm("Do you want to include uppercase characters??")
  if (q4 == true) {allUser = allUser.concat(upperCasedCharacters)
  } else {};
  

  passwordText.value = random(userNumber).join("");
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);