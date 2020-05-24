


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {

  var pw = '';
  var charLower = 'abcdefghijklmnopqrstuvwxyz';
  var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charSpecial = '@#$%&';
  var charNumber = '0123456789';
  var userPick = false;

  var passwordSet = prompt("How long would you like your password length to be ? ");
  // checks to see if the user put a number greater than 7 and less than 129
  while (passwordSet < 8 || passwordSet > 128) {

    var passwordSet = prompt("please select a character length between 8 and 128");
    if (passwordSet < 8 || passwordSet > 128) {
      alert("Sorry password length must be between 8 to 128.");
     
    }

  }
  //checks and stores if the user wants uppercase letters
  var upper = confirm('would you like uppercase characters in your password?')
  if (upper == true) {
    pw += charUpper;
    userPick = true;
    alert('Uppercase characters will be logged');
  }
  //checks and stores if the user wants lowercase letters
  var lower = confirm('would you like lower case characters in your password?')
  if (lower == true) {
    pw += charLower;
    userPick = true;
    alert('Lowercase characters will be logged');
  }
  //checks and stores if the user wants special characters
  var special = confirm('would you like special characters in your password?')
  if (special == true) {
    pw += charSpecial;
    userPick = true;
    alert('Special characters will be logged');
  }
  //checks and stores if the user wants numbers
  var number = confirm('would you like numbers in your password?')
  if (number == true) {
    pw += charNumber;
    userPick = true;
    alert('Numbers will be logged');
    //checks and stores if the user wants
  }
  //checks if the user has selected atleast one of the criteria if not returns the user to the start of the function 
  if(upper == false && lower == false && special == false && number == false){
    alert('sorry you must select atleast one of the criteria')
    generatePassword()
  }  
  //takes stored user info and randomly generates a password from the criteria 
    var password = ''
    for (i = 0; i < parseInt(passwordSet); i++){
      console.log('here is a random num', Math.floor(Math.random() * pw.length))
      password += pw[Math.floor(Math.random() * pw.length)]
    }
    
    return password;
    
  }
  














// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
