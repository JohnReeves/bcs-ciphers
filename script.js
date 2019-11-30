var shift = 0;

var inputText = $("#input");
var outputText = $("#output");

var shiftUp = $("#shiftUp");
var shiftDown = $("#shiftDown");

// TODO: event handler to detect new input message

// click functions to call the cipher functions
shiftUp.click(function () {
  shift += 1;
  handleMessage();
});

shiftDown.click(function () {
  shift -= 1;
  handleMessage();
});

inputText.click(function () {
  handleMessage();
});

function handleMessage() {
  inputMessage = inputText.text();
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
