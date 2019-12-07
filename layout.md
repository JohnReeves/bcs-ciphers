
# Ciphr-Solvr: Your cipher solver

## 1. Create a form in HTML    

First, we need a way of putting in some words to encode or decode.   

Start a new repl.it or jsfiddle.net with HTML, css & javascript.

In the body of your repl.it code or in the HTML box:

```html
<form action="/encrypt-decrypt-handling" method="post">
    <div>
      <label for="input">Input message (click here)</label>
      <textarea id="input" name="input_message">ATHCOOOOOO</textarea>
    </div>
    <div>
      <label for="output">Output message</label>
      <textarea id="output" name="output_message"></textarea>
    </div>
    <div>
      <button id="shiftUp" type="button">Increase shift</button>
      <button id="shiftDown" type="button">Decrease shift</button>
    </div>
</form>

```

Run the code to see the two text boxes and two buttons to control the encoding and decoding.

### The next worksheet shows you how to improve the layout and add some colour.

Before you move on try adding a title and some more buttons ready for the vigenere cipher and the book cipher.

Try adding 5 new things:   
* textarea for the Vigenere key .   
* a button to remove spaces .   
* a button to encode using the Vigenere cipher .  
* I like Morse code but you might like something else :-) .  

.