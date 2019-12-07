let alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let morse_code =
{
  "a": ".-", "b": "-...", "c": "-.-.",
  "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..",
  "j": ".---", "k": "-.-", "l": ".-..",
  "m": "--", "n": "-.", "o": "---",
  "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-",
  "v": "...-", "w": ".--", "x": "-..-",
  "y": "-.--", "z": "--..", "1": ".----",
  "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...",
  "8": "---..", "9": "----.", "0": "-----"
};

let shift = 0;
let vigenereKey = "abc";

let inputText = $("#input");
let vigenereText = $("#vigenereKey");
let outputText = $("#output");

let inputMessage = $("#input").val();
let vigenereKey = $("#vigenereKey").val();
let outputMessage = $("#output").val();

let shiftUp = $("#shiftUp");
let shiftDown = $("#shiftDown");

let vigenereEncode = $("#vigenereEncode");
let removeSpaces = $("#spaces");

let morseCode = $("#morse");
let soundCode = $("#dih_dah");

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

morseCode.click(function () {
  handleMorse();
});

soundCode.click(function () {
  handleMorse();
});

function handleMessage() {
  outputMessage = encodeCaesar(inputMessage, shift)
  outputText.text(outputMessage);
}

function handleVigenere() {
  outputMessage = encodeVignere(inputMessage, vigenereKey)
  outputText.text(outputMessage);
}

function handleMorse() {
  outputMessage = encodeMorse(inputMessage)
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

function encodeMorse(message) {
  let ret = '';
  let space = " ";

  for (letter of message.toLowerCase()) {
    if (letter != space)
      ret += morse_code[letter]+" "
    else
      ret += "   "
  }
  return ret;
}

