var shift = 0;
var key = "a"; // thank you Simon B

var inputText = $("#input");
var outputText = $("#output");

var inputMessage = $("#input").val();
var outputMessage = $("#output").val();

var shiftUp = $("#shiftUp");
var shiftDown = $("#shiftDown");
var vigenere = $("#vigenere");
var removeSpaces = $("#spaces");

// TODO: textarea/text input for the vigenere cypher key
// TODO: design an output space for candidate deciphering
// TODO: verify deciphering with a standard message
// TODO: separate into functional files
// TODO: bootstrap template

// populate the output box once to show what it does
handleMessage();

// event handler to detect new input message
inputText.change(function () {
  inputMessage = $("#input").val();
  handleMessage();
});

// click functions to call the cipher functions
shiftUp.click(function () {
  shift += 1;
  handleMessage();
});

shiftDown.click(function () {
  shift -= 1;
  handleMessage();
});

vigenere.click(function () {
  shift -= 1;
  handleVigenere();
});

removeSpaces.click(function () {
  outputMessage = handleSpaces(inputMessage)
  outputText.text(outputMessage);
});

function handleMessage() {
  outputMessage = encodeCaesar(inputMessage, shift)
  outputText.text(outputMessage);
}

function handleVigenere() {
  outputMessage1 = encodeVignere(outputMessage, key)
  outputText.text(outputMessage1);
}

// encode / decode functions
function handleSpaces(phrase) {
  let ret = '';
  let space = " ";

  for (letter of phrase) {
    if (letter != space) ret += letter;
  }
  return ret;
}

function encodeCaesar(phrase, shift) {
  /**
   *  Encode the Caesar Cipher by shifting
   *   each character by a fixed amount 
  */
  var ret = '';

  for (letter of phrase) {
    ret += String.fromCharCode(letter.charCodeAt(letter) + shift);
  }
  return ret;
}

function decodeCaesar(str, shift) {
  /**
   *  Decode the Caesar Cipher by shifting
   *  by shifting each character back again
   *  by the same amount
  */
  var ret = '';
  var i = 0;

  for (letter of phrase) {
    ret += String.fromCharCode(letter.charCodeAt(letter) - shift);
  }
  return ret;
}

function encodeVignere(phrase, key) {
  /**
   *  Encode the Vignere Cipher
   *  by shifting each character in yourPhrase
   *  by the corresponding character in the 
   *  repeating key
  */
  var ret = '';
  var keyIndex = 0;

  for (letter of phrase) {
    // we want A as the first letter of the alphabet,
    // A is ASCII 65, so subtract 65 from each charCodeAt in the key
    ret += String.fromCharCode(letter.charCodeAt(letter) + key.charCodeAt(keyIndex) - 65);

    keyIndex++;

    if (keyIndex == key.length) {
      keyIndex = 0;
    }
  }
  return ret;

}
