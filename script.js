// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// // Generator functions 


//DOM Elements
const resultEL=document.querySelectorAll('result')
const lengthEL=document.querySelectorAll('length')
const uppercaseEL=document.querySelectorAll('uppercase')
const lowercaseEL=document.querySelectorAll('lowercase')
const numbersEL=document.querySelectorAll('numbers')
const symbolsEL=document.querySelectorAll('symbols')
const generateEL=document.querySelectorAll('generate')
const clipboardEL=document.querySelectorAll('clipboard')

Const randomFunc={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
// get this from alerts and turn into a variable
};

generateEL.addEventlistener('click', (){
  //Obtain the length of the password (+) specifies that its a number
  const length= +lengthEL.value;
  const hasLower=lowercaseEL.checked
  const hasUpper=lowercaseEL.checked
  const hasNumber=numbersEL.checked
  const hasSymbol=symbolsEL.checked
  resultEL.innerText=generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
  
});

//Generator functions
//Generating random lower case letters
function getRandomLower(){
  // 26 represents the english letters, 97 represents the number corresponding with lower case starting with 'a' returing a string
return String.fromCharCode(Math.floor(Math.random()*26)+97);
}


//Generating random upper case letters
function getRandomUpper(){
    // 26 represents the english letters, 65 represents the number corresponding with lower case starting with 'A' returing a string
return String.fromCharCode(Math.floor(Math.random()*26)+65);
  }

//Generating random numbers 
function getRandomNumber(){
// Obtaining a random number between 0 and 9 from HTML characterset
return String.fromCharCode(Math.floor(Math.random()*10)+48);
    }
  
    // Generating random symbols
function getRandomSymbol(){
      // Obtaining a random number between 0 and 9 from HTML characterset
return String.fromCharCode(Math.floor(Math.random()*10)+33);
      // //Alternative 
      // const symbols='!@#$%^&*(){}[]+<>/,.';
      // return symbols[Math.floor(Math.random()*symbols.length)]
      }
    

//Console loging to check how the functions are working
console.log(getRandomSymbol());