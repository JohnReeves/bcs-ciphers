var shift = 0;
var key = "AARDVARK"; // thank you Simon B

var inputText = $("#input");
var outputText = $("#output");

var inputMessage = $("#input").val();
var outputMessage = $("#output").val();

var shiftUp = $("#shiftUp");
var shiftDown = $("#shiftDown");
var vigenere = $("#vigenere");
var removeSpaces = $("#spaces");

// TODO: add a button to remove spaces
// TODO: textarea/text input for the vigenere cypher key
// TODO: click functions to call the vigenere cypher
// TODO: design an output space for candidate deciphering

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
function handleSpaces(str) {
  /**
   *  Encode the Caesar Cipher by shifting
   *   each character by a fixed amount 
  */
  var ret = '';
  var i = 0;

  while (i < str.length) {
    ch = String.fromCharCode(str.charCodeAt(i));
    if (ch != " ") {
      ret += ch;
    }
    i += 1;
  }
  return ret;
}

function encodeCaesar(str, shift) {
  /**
   *  Encode the Caesar Cipher by shifting
   *   each character by a fixed amount 
  */
  var ret = '';
  var i = 0;

  while (i < str.length) {
    ret += String.fromCharCode(str.charCodeAt(i) + shift);
    i += 1;
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

  while (i < str.length) {
    ret += String.fromCharCode(str.charCodeAt(i) - shift);
    i += 1;
  }
  return ret;
}

function encodeVignere(str, key) {
  /**
   *  Encode the Vignere Cipher
   *  by shifting each character in yourPhrase
   *  by the corresponding character in the 
   *  repeating key
  */
  var ret = '';
  var phraseIndex = 0;
  var keyIndex = 0;

  while (phraseIndex < str.length) {
    // we want A as the first letter of the alphabet,
    // A is ASCII 65, so subtract 65 from each charCodeAt in the key
    ret += String.fromCharCode(str.charCodeAt(phraseIndex) + key.charCodeAt(keyIndex) - 65);

    phraseIndex++;
    keyIndex++;

    if (keyIndex == key.length) {
      keyIndex = 0;
    }
  }
  return ret;

}
