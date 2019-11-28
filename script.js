var shift = 0;

var inputText = $("#input");
var outputText = $("#output");

var shiftUp = $("#shiftUp");
var shiftDown = $("#shiftDown");

var isEncodedInCaesar = false;

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

 // if (isEncodedInCaesar == false) {
    outputMessage = encodeCaesar(inputMessage, shift)
    isEncodedInCaesar = true;
  //} else {
  //  outputMessage = decodeCaesar(outputMessage, shift);
  //  isEncodedInCaesar = false;
 // }
  outputText.text(outputMessage);
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
