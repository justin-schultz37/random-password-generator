// This function returns a password based on random characters and a user-defined length
function generatePassword() {
  var pass = '';
  var pwChar = promptChar();
  var pwLength = promptLength();

  for (let i = 1; i <= pwLength; i++) {
    var char = Math.floor(Math.random() * pwChar.length);
    pass += pwChar.charAt(char);
  }

  return pass;
}
// This function creates a prompt that allows user to choose a password length between 8 and 128 characters
function promptLength() {
  var pwLength = prompt('Please enter a number in the range of 8 and 128 to set your password length: ');

  if (pwLength >= 8 && pwLength <= 128) {
    alert("Your chosen password length is " + pwLength + '.');
    console.log(pwLength);
  } else {
    alert('Please try again');
    pwLength = promptLength();
  }

  return pwLength;
}
// This function creates a Yes/No option to allow special characters when generating a password
function promptChar() {
  var scchoice = prompt('Would you like to include special characters? Type "Yes" or "No".');
  var pwCharchoice = ' ';

  if (scchoice = 'Yes' || scchoice == 'yes') {
    pwCharchoice += '!%&*()"~?@#$';
    alert('Your password will include special characters.');

  } else {
    alert('Your password will NOT include special characters');
  }
  var scchoice = prompt('Would you like to include UPPERCASE letters? Type "Yes" or "No".');
  if (scchoice == 'Yes' || scchoice == 'yes') {
    pwCharchoice += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alert('Your password will include UPPERCASE letters.');

  } else {
    alert('Your password will NOT include UPPERCASE letters');
  }
  var scchoice = prompt('Would you like to include lowercase letters? Type "Yes" or "No".');
  if (scchoice == 'Yes' || scchoice == 'yes') {
    pwCharchoice += 'abcdefghijklmnopqrstuvwxyz';
    alert('Your password will include lowercase letters.');

  } else {
    alert('Your password will NOT include lowercase letters');
  }
  var scchoice = prompt('Would you like to include numbers? Type "Yes" or "No".');
  if (scchoice == 'Yes' || scchoice == 'yes') {
    pwCharchoice += '0123456789';
    alert('Your password will include numbers.');

  } else {
    alert('Your password will NOT include numbers');
  }

  return pwCharchoice;
  console.log(pwCharchoice);
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
generateBtn.addEventListener("click", writePassword);
