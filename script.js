// Assignment code here
function generatePassword() {
  var pass = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz' + '0123456789@#$';

  for (let i = 1; i <= promptLength; i++) {
    var char = Math.floor(Math.random()
      * str.length + 1);

    pass += str.charAt(char)
  }

  return pass;
}
function promptLength() {
  var pwlength = prompt('Please enter a number between 8 and 128 to set your password length: ');

  if (pwlength >= 8 && pwlength <= 128) {
    alert("Your chosen password length is " + pwlength + '.');
    console.log(pwlength);
  } else {
    alert('Please try again');
  }

  return pwlength;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", promptLength);
