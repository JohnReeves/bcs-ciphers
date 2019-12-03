# Ciphers
 
Cipher means secret in Classical Greek and Latin.
 
Cipher can also be spelt with a ‘y’, as ‘cypher’, this is because the ‘ie’ sound was 
written with the greek letter upsilon that looks like a ‘y’ which didn’t exist in the Latin alphabet.
 
People in the olden days who had secrets were generally well educated people who could write in Latin and Greek.
 
A good place to start with ciphers are:
 
* Caesar Cipher – a simple shift cipher   
* Vigener Cipher – shifting with a key word   
* Book Cipher – shifting with an unknown alphabet   
 
## 1. Encoding is easy, decoding is hard

The idea with enciphering, is to make it hard to decode.
 
* The Caesar is the easiest to decode, with only 26 possibilities for your decoded phrase – 
the number of letters in the alphabet - plus the 10 digits.   
* The Vigener Cipher is immediately very much harder, because you have to find the key word, 
which could be any length.   
* Imagine how much harder the messages are to decode, if you have also to find the alphabet *and* the keyword.   
* And now imagine if you can, the difficulties if you have to find a randomised mathematical function 
that is shuffling everything too.   
 
This is when solving cypher puzzles become an art!   

## 2. Simple Caesar, or shift, Cipher

The Caesar Cipher encodes a word by changing each letter by a fixed amount in the alphabet.

Apparently it was used by the Romans to send secret messages, and probably only worked at 
a time when most people didn't read or if you can't speak Latin!

It's a easy place to start with ciphers, and you can program it in JavaScript or Python.

Encoding and decoding are just shifting in opposite directions.

## 3. Create a form in HTML    

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
