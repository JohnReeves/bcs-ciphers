alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var shift = 0;
var vigenereKey = "abc"; // thank you Simon Buist

var inputText = $("#input");
var vigenereText = $("#vigenereKey");
var outputText = $("#output");

var inputMessage = $("#input").val();
var vigenereKey = $("#vigenereKey").val();
var outputMessage = $("#output").val();

var shiftUp = $("#shiftUp");
var shiftDown = $("#shiftDown");
var vigenereEncode = $("#vigenereEncode");
var removeSpaces = $("#spaces");

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

// event handler to detect new vigenere key
vigenereText.change(function () {
  vigenereKey = $("#vigenereKey").val();
  handleVigenere();
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

vigenereEncode.click(function () {
  //shift -= 1;
  handleVigenere();
});

removeSpaces.click(function () {
  outputMessage = handleSpaces(inputMessage)
  outputText.text(outputMessage);
  inputMessage = outputMessage;
});

function handleMessage() {
  outputMessage = encodeCaesar(inputMessage, shift)
  outputText.text(outputMessage);
}

function handleVigenere() {
  outputMessage = encodeVignere(inputMessage, vigenereKey)
  outputText.text(outputMessage);
}

// steps over the input phrase ignoring spaces
function handleSpaces(phrase) {
  let ret = '';
  let space = " ";

  for (letter of phrase) {
    if (letter != space) ret += letter;
  }
  return ret;
}

function encodeCaesar(phrase, shift) {
  let ret = '';
 
  for (letter of phrase) {
    ret +=
    alphabet.charAt((
      alphabet.indexOf(letter)+
      shift)%
      alphabet.length
      );  }
  return ret;
}

function encodeVignere(phrase, keyPhrase) {
  let ret = '';
  keyIndex = 0;

  for (letter of phrase) {
    ret +=
    alphabet.charAt((
      alphabet.indexOf(letter)+
      alphabet.indexOf(keyPhrase[keyIndex]))%
      alphabet.length
      );
 
  if (keyIndex == (keyPhrase.length - 1))
      keyIndex = 0;
    else
      keyIndex++;
  }

  return ret;
}
