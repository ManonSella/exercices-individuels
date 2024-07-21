// Encoding and decoding morse code.
// Morse code is based on a coded alphabet that replaces characters by impulsions represented by points or dashes,
// depending on how short or long these implusions are.

function handleTranslation() {
  let textarea = document.querySelector("#input");
  let textareaResult = document.querySelector("#output");
  textareaResult.value = encode(textarea.value.toUpperCase());
}

let translationButton = document.querySelector(".click-for-translation");
translationButton.addEventListener("click", handleTranslation);

function handleSecondButton() {
  //   console.log("Gin Gin");
  let secondTextArea = document.querySelector("#output");
  let secondTextAreaResult = document.querySelector("#input");

  //   console.log(secondTextArea.value);
  secondTextAreaResult.value = decode(secondTextArea.value);
}

let secondButton = document.querySelector(".second-button-for-translation");
console.log(secondButton);
secondButton.addEventListener("click", handleSecondButton);

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};
const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

// STEP 1: Write a function taking as a parameter some text and returning an array that contains every single character.

// Test this function by giving it the string `Hello, world`.
//Make sure it does return ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"].

function getLatinCharacterList() {
  let greeting = "Hello, world";
  // First step
  // Using .split() method to separate each letter.
  // Elements that will be separated according to what will be into the (" "), ("/")
  console.log(greeting.split(""));
}
getLatinCharacterList();
// JS reads line 79 + 82 and then gets into the function ("return" knowing the value of the variable "letter" as "A")
// JS Buddy gets into the function and will see that there is a variable called "letter" as a parameter

// STEP 2: Create a function `translateLatinCharacter`that takes as a parameter a character and returns its corresponding letter in morse.
function translateLatinCharacter(letter) {
  // "[]" = I want the key
  return latinToMorse[letter];
}
translateLatinCharacter("A");

//STEP 3: Add a new function `encode`that takes some text as a parameter and that will use the function from STEP 1.
//For each character, use the function from STEP 2 and get its equivalence in morse.
//Keeping in mind that the corresponding array only contains CAPITAL letters.

function encode(text) {
  // value "text" = hard value given in the called function
  let result = ""; // declare an empty string to be manipulated later
  for (let i = 0; i < text.length; i++) {
    // looping through the given hard value (= argument) (NOT THE OBJECT)
    let letterValue = text[i]; // Store the letter index of the given hard value (argument)
    let oneLetter = translateLatinCharacter(letterValue); // reusing previous function to translate with the parameter of lette rindex of the given argument when the function is called
    // add oneLetter to result
    result = result + oneLetter + " "; // updating the value of "result" by injecting in its empty string the value of oneLetter
  }

  return result.replaceAll(" / ", "/").trim(); // returning the result of the given argument
  // console.log(translateLatinCharacter(textValue));
}

let encoded = encode("GINA"); // storing in a variable the value of the function called with "Gina" as an argument
//console.log(encoded); // the result of the function was stored in "encoded" to allow us to do a console.log
//console.log(encode("Gina")); // Exactly the same result

// STEP 4
// Create a function decode.
// Create functions getMorseCharacterList and translateMoreCharacter.

function getMorseCharacterList(invertedSentence) {
  let resultSentence = invertedSentence.split("/");

  for (let i = 0; i < resultSentence.length; i++) {
    let wordInMorse = resultSentence[i]; // if i == 0: --. .. -. .-
    let wordInMorseSplit = wordInMorse.split(" "); // if i == 0: ["--.", "..", "-.", ".-"]
    resultSentence[i] = wordInMorseSplit;
  }

  return resultSentence;
}

function translateMorseCharacter(symbol) {
  return morseToLatin[symbol];
}

function decode(morseText) {
  let decodedVersion = "";
  let splitCharacters = getMorseCharacterList(morseText);

  for (let i = 0; i < splitCharacters.length; i++) {
    let word = splitCharacters[i];
    for (let j = 0; j < word.length; j++) {
      let character = word[j];
      let letterInLatin = translateMorseCharacter(character);
      decodedVersion = decodedVersion + letterInLatin;
    }
    decodedVersion = decodedVersion + " ";
  }

  return decodedVersion;
}
let decoded = decode("--. .. -. .-/. ... -/-... . .-.. .-.. .");
console.log(decoded);

// STEP 5: create in HTML a more code translator in both ways (encoding and decoding) by using inputs and buttons
// To be finished next week !
