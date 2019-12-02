var shift = 0;

var inputText = $("#input");
var outputText = $("#output");

var inputMessage = $("#input").val();
var outputMessage = $("#output").val();

var shiftUp = $("#shiftUp");
var shiftDown = $("#shiftDown");

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

function handleMessage() {
  outputMessage = encodeCaesar(inputMessage, shift)
  outputText.text(outputMessage);
}

// encode / decode functions
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

function encodeVignere(str) {
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
