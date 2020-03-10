# Ciphr-Solvr: Your cipher solver


In this worksheet we will use JavaScript to make our stylish HTML form work. 

`JavaScript` is a programming language used to make HTML interactive and responsive, *and* to make things move. 

We will use JavaScript to change the plain text to cipher text by:
* inputing and outputing text .  
* reading text inputs and changing each letter .  
* making the button call JavaScript functions .  

The tasks in this worksheet need to go in the `script.js` file in repl.it or in the `javascript` box in jsfiddle:

## Task 1. Input and Output Text

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
`let` declares a JavaScript variable   
`$("#   ")` is JQuery linking the HTML and JavaScript code    
`.val()` is a function to accesses the `Textarea`'s text   
`.change()` detects changes to the text in the text box
`.text()` displays new text in text box   

`Pro-Tip` Explore what your new JavaScript objects can do by typing a '.' after the object and looking at all its built in functions.

## Task 2. Reading Text and Changing Letters

JavaScript can step over each letter in the `textarea` and print the results to the 'console'.

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

`for ()` iterates over all the characters in the string   
`in` gives the index of the character in the string   
`of` gives the character in the string   
`%` means that when we shift our characters we go back to the beginning ie `z` goes back to `a` .  

`Pro-Tip` console.log() is your friend to show you what is happening inside your program.

## Task 3. Joining the HTML to the JavaScript

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

## Task 4. Extending your Ciphr-Solvr

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

The Vigenere cipher uses a key word to provide the shift value.

i) you need to add the text box to input the key.

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

ii) you need a modified Caesar cipher to shift for each letter in the key word.

```javascript
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

`Pro-Tip` Use `console.log()` to find out what is happening inside your code.

### The next worksheet shows you more cipher functions and better ways of coding.

.
