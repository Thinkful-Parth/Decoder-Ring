// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  let polybiusChart = { // create chart object for lookup
    charToNum: { // alpha to numeric
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    },
    numChar: { // numeric to alpha
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "i|j",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    },
  };

  function polybius(input, encode = true) {
    //initialize empty array for push ability
    let result = [];
    if (!encode) {
      //if encode is false we will be decoding
           if (input.replace(" ", "").length % 2 !== 0) { 
             //if odd amount of digits stop  and return false
             return false;
           }

     input.replace(" ", "  ").match(/.{1,2}/g)// first double up the spaces so we can match to every 2 characters
     .forEach(num =>{
       //for each index, push the related elements
         num == '  '? result.push(' '):result.push(polybiusChart.numChar[num]||'')
        })    

        return result.join('') // join to return string

    } else {
      input
        .toLowerCase() // no capitals
        .split("") // get each letter individually
        .forEach((char) => {
          // if space push space else find and push from chart above
          char == ' '? result.push(' '):result.push(polybiusChart.charToNum[char]);
        });
      return result.join(''); // join for string
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
