// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //(zebra,-3,)
    if (shift == 0 || shift > 25 ||shift < -25 || !shift) {
      return false
    }
    //if we need to decode, flip the shift to go the other way

    //get each character in the same range to work with
    return input
      .toLowerCase()
      .split("")
      .map((char) => {
        // and subtract 97 that we will add back later
        let charCode = char.charCodeAt(0) - 97;
        //if char is not between our range at this point it must be a space or special character. leave it be
        if (charCode > 25 || charCode < 0) {
          //a is 0  and z is 25
          return char;
        }

        let newCharCode = charCode + shift * (!encode ? -1 : 1); // if set to decode flip the shift to the opposite of the negative /positive number

        newCharCode > 25 && (newCharCode -= 26); //over z and we need to wrap back to a
        newCharCode < 0 && (newCharCode += 26); //under a and we need to wrap back to z

        return String.fromCharCode(newCharCode + 97);
      })
      .join("");
    // your solution code here
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
