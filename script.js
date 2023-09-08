// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  // link of confirmed values
  var pwdvalues = ""
  var passwordText = document.querySelector("#password");
  var Length = prompt("Enter your password between 8 and 128 characters")
  if ((Length <= 128) && (Length >= 8)){
    console.log ("lenght is the correct value")
  if (confirm("Would you like to include lower case?")){
   // "add lower case characters criteria"
   pwdvalues += "abcdefghijklmnopqrstuvwxyz"
  }
  if (confirm("Would you like to include upper case?")){
    // "add upper case characters criteria"
    pwdvalues += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   } 
   if (confirm("Would you like to include numbers?")){
    // "add lower numbers criteria"
    pwdvalues += "0123456789"
   } 
   if (confirm("Would you like to include special characters?")){
    // "add special characters criteria"
    pwdvalues += "!@#$%^&*()"
     }
    if (!pwdvalues){ 
      alert("non acceptable values selected")      
      return
    }
     console.log (pwdvalues)
  } else{
    alert("non acceptable values selected")      
      return
  }
  
  // max = "128"
  // min = "8"
  function generatePassword() {
    // generate random number for our password
    Math.floor(Math.random()*Length)
    // Math.random() * (max - min) + min
    var userpassword = ""
    for(var i=0;i<Length;i++){
   var RandomNumber = Math.floor(Math.random()*pwdvalues.length)
   // var RandomNumber = Math.floor(Math.random() * (max - min) + min)
    userpassword += pwdvalues [RandomNumber]
    console.log (userpassword)
    }
    return userpassword
  }
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
