//Create a function that receives one parameter.
  function UpperCaseForAllLetters(textinput) {
//Check if a given string has all symbols in upper case. 
//If the string is empty or doesn't have any letter in it - 
//the function should return false.
    if (!textinput || !/[a-zA-Z]/.test(textinput)) {
      return false;
    }

    return /^[A-Z]+$/.test(textinput);
  }
  
  console.log(UpperCaseForAllLetters('TEXTWITHAPPERCASE'))
  console.log(UpperCaseForAllLetters('TEXTWITHAPPERCASe'))