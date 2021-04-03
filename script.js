// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase= ["a", "b", "c",];
var upperCase= ["A","B","C"];
var numbers= ["1","2","3"];
var special= ["!","@","#"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
function randomized (arr) {
  var i= Math.floor (Math.random()*arr.length);
  var random= arr[i];
  return random;
}

function generatePassword() {
  var passwordLength = parseInt (prompt("What is the length of the password"));
  console.log(passwordLength);
  var hasLowerCase = confirm("Do you want lower case letters?")
  var hasUpperCase = confirm("Do you want upper case letters? ")
  var hasNumbers = confirm("Do you want numbers?")
  var hasSpecial = confirm("Do you want special characters?")
  // make a variable for password criteria
  var allChar = [];
  if (hasLowerCase===true) {
    allChar= allChar.concat(lowerCase)  
  } 
  if (hasUpperCase===true) {
    allChar= allChar.concat(upperCase)  
  } 
  if (hasNumbers===true) {
    allChar= allChar.concat(numbers)  
  } 
  if (hasSpecial===true) {
    allChar= allChar.concat(special)  
  } 


  var word = "";
  for (var i=0; i< passwordLength; i++) {
    console.log(i)
    word= word + randomized(allChar); 

  }

  return word;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
