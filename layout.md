
# Ciphr-Solvr: Your cipher solver

Online cipher tools are *very* simple: a input text box, some choosing buttons, an output text box, and maybe some pretty graphs.

We want to make Minimal Viable Product to help us crack some ciphers, learn about web technology, and give us a structure to add to as we learn more about cryptography.

We will learn how to:    
* make an HTML form to input and output text   
* use CSS to style the form and give feedback to the user   
* include a library (JQuery) into your project    
* use JavaScript to read text and change the letters  
* join the HTML form to the JavaScript functions   

Once you have a *working* structure (a MVP) you can extend it by:
* adding more ciphers and deciphering tools    
* making the form even more beautiful    
* making it robust against people doing silly or dangerous things.

`Pro-Tip` Go one step at a time, `test` the added feature works, and share your ideas :-)

## Task 1. Create a skeleton HTML page    

First, we need an HTML page to put our Ciphr-Solvr encoding / decoding tool onto.   

A basic index.html page looks like this:

```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

`Pro-Tip` Most of the online tools will make the basic page for you. Experiment and find the most helpful ones.

Some online tools (eg repl.it) will show you this template; other online tools (eg jsfiddle.net, codepen.io) build the template without showing you.

Start a new (repl.it)[https://repl.it/] or jsfiddle.net with HTML, css & javascript.

## Task 2. Create a form in HTML

Next we need a way of putting in some words to encode or decode.   

In the `body` of your repl.it index.html or in the jsfiddle HTML box:

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

In later worksheets we will make the form pretty with CSS and make the form work with JavaScript.

`Pro-Top` Engineers make a basic structure because it is a great way of learning, sharing ideas and planning the product development journey.

## Task 3. Extend the HTML form with more Ciphr-Solver ideas

Before you move on try adding a title, text boxes, and some more buttons ready for the vigenere cipher and the book cipher.

Try adding 5 new things:   
* textarea for the Vigenere key .   
* a button to remove spaces .   
* a button to encode using the Vigenere cipher .  
* I like Morse code but you might like something else :-) .  

### The next worksheet shows you how to improve the layout and add colour.

.