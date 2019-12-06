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
var inputText = $("#input");
var outputText = $("#output");

var inputMessage = $("#input").val();
var outputMessage = $("#output").val();

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
alphabet="abcdefghijklmnopqrstuvwxyz";

// 26 letters?
console.log(alphabet.length);

f  for (letterChar of inputMessage) {
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

The code below include the shift up and shift down buttons to control the caesar cipher cipher text.

```javascript
let shift = 0;

let shiftUp = $("#shiftUp");
let shiftDown = $("#shiftDown");
let removeSpaces = $("#spaces");

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

function decodeCaesar(phrase, shift) {
  let ret = '';

  for (letter of phrase) {
    ret +=
    alphabet.charAt((
      alphabet.indexOf(letter)-
      shift)%
      alphabet.length
      );  }
  return ret;
}
```
