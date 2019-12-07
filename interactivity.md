# Ciphr-Solvr: Your cipher solver
 
## 1. Making it work with JavaScript 

To change the plain text to cipher text we need to know how to:
* input and output text .  
* read text and change the letters .  
* join the HTML form to the JavaScript funcitons .  

It will also be super-helpful to give feedback on the screen to let us know what is happending.

## 2. Input and Output Text

`JQuery` is included as a package in repl.it and a library in jsfiddle to help input and output text, and to link up the buttons.

You already added the the HTML `id` attributes :-)

In script.js in repl.it or in the JavaScript box in jsfiddle copy this code:

```javascript
let inputText = $("#input");
let outputText = $("#output");

let inputMessage = $("#input").val();
let outputMessage = $("#output").val();

// jquery event handler to detect new input message
inputText.change(function () {
  inputMessage = $("#input").val();
  outputText.text(inputMessage);
});

```

`.val()` is a function to accesses the `Textarea`'s text.

## 3. Reading Text and Changing Letters

JavaScript can step over each letter in a string using: 

`for ()` iterates over all the characters in the string   
`in` gives the index of the character in the string   
`of` gives the character in the string   
`%` means that when we shift our characters we go back to the beginning ie `z` goes back to `a` .  

Copy the code to shift the letters in the `textarea` text as we need to in our cryptography

```javascript
// letters of the alphabet
let alphabet="abcdefghijklmnopqrstuvwxyz";

// 26 letters?
console.log(alphabet.length);

for (letterChar of inputMessage) {
  console.log(
    "Letter "+letterChar+
    " is the "+alphabet.indexOf(letterChar)+
    " letter of  alphabet"
    );
}
```

The following code shifts each letter in the input message by a fixed amount and writes it to the output box:

```javascript
// we can do capitals as well
alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
message="now is the winter of our discontent made glorious by this son of York!";
shift=5;

  ret='';
  for (letterChar of inputMessage){
    ret +=
      alphabet.charAt((
      alphabet.indexOf(letterChar)+
      shift
      )%alphabet.length);
}
outputText.text(ret);
```

## 4. Joining the HTML to the JavaScript

The code below links the shift up and shift down buttons to the JavaScript code.

```javascript
let shift = 0;

let shiftUp = $("#shiftUp");
let shiftDown = $("#shiftDown");

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
```

This code performs the shift:

```javascript
// encode / decode functions
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
```
Remember encoding and decoding the Caesar are just opposites of eachother, the same as shifting up and shifting down.

## 5. Extending your Ciphr-Solvr

Can you add the HTML and JavaScript to add these functions:

### removing spaces

```javascript
// steps over the input phrase ignoring spaces
function handleSpaces(phrase) {
  let ret = '';
  let space = " ";

  for (letter of phrase) {
    if (letter != space) ret += letter;
  }
  return ret;
}
```

### vigenere cipher

```javascript
// event handler to detect new vigenere key
vigenereText.change(function () {
  vigenereKey = $("#vigenereKey").val();
  handleVigenere();
});

vigenereEncode.click(function () {
  handleVigenere();
});

function handleVigenere() {
  outputMessage = encodeVignere(inputMessage, vigenereKey)
  outputText.text(outputMessage);
}
```

```javascript
// encoding functionality
function encodeVignere(phrase, keyPhrase) {
  let ret = '';
  keyIndex = 0;

console.log(keyPhrase[keyIndex]);

  for (letter of phrase) {
    ret +=
    alphabet.charAt((
      alphabet.indexOf(letter)+
      alphabet.indexOf(keyPhrase[keyIndex]))%
      alphabet.length
      );
  }

  if (keyIndex == keyPhrase.length - 1)
      keyIndex = 0;
    else
      keyIndex++;
  }
  return ret;
}

```

Can you add more Ciphers?
