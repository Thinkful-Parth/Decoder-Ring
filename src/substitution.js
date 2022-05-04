// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function encoder(char, alpha) {
    console.log(char,alpha);
    // entries provides arrays of array so the char matching at index 0 we want that arrays index 1
    return alpha.filter((entry) => entry[0] == char)[0][1];
  }
  function decoder(char, alpha) {
    console.log(char, alpha);

    // entries provides arrays of array so the char matching at index 1 we want that arrays index 0
    return alpha.filter((entry) => entry[1] == char)[0][0];
  }
  function substitution(input, alphabet = "", encode = true) {
    let array = [];
    let bool = true;
    //for each letter in the english Alphabet
    let alpha = [
      "a",  
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ].reduce((acc, char, i) => {
      // that letter is assigned to the matching index of the substitution alphabet
      acc.push([char, alphabet[i]]);
      bool = alphabet.split('').filter((char1) => char1 == char).length == 1; // setting bool to  evaluate to false later if we find a match more than 1 time.
      return acc;
    }, []);

    if (!bool || alphabet.length != 26) {
      //the bang bool argument evaluates to true here  if a match is found in the reduce function above. Allowing us to return false
      // also kicks us out for any length of alphabet that isnt 26, Default Parameters allows us to also kick out for lack of argument
      return false; //error handling
    }
    input.toLowerCase().split("").forEach((char) => {
      // check each character of input
      char == " " // if it is a space
        ? array.push(" ") // then push the space in to the array
        : encode // and if encode is true
        ? (array.push(encoder(char, alpha)), console.log(encoder(char, alpha))) // then push the char from the helper function above in parent scope
        : array.push(decoder(char, alpha), console.log(decoder(char, alpha))); // if encode not true, we need to go find the pair associated with this value.. see helper function in parent scope
    });
    return array.join(""); // return string
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
