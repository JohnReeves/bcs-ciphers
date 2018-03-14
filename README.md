
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

Encoding and decoding are just opposites.

### JavaScript version

JavaScript is fun 'cos you can put it in a webpage, and make you own cypher challenge!

Open ```jsfiddle``` in a new tab, make a piece of ```SVG``` paper with a text entry, and add in the ```Jquery``` library:

```javascript
<svg height="600" width="600">
  <text id="caesarSecret" x="0" y="70" fill="green" font-family="Verdana" font-size="40" editable="true">
    ATHCOOOOOO!!!!!!! </text>
</svg>
```
Notice that the SVG Text has an ```id``` to link in to the JavaScript interactivity.

```Save``` and ```Run``` to make sure everything works!

Then use ```javascript``` to change the text to the message your want to encode and decode, and a state variable to record if the message is decoded or not.

```javascript
var yourname = "hello josh";
var shift = 5;

var caesarSecret = $("#caesarSecret");
var isEncodedInCaesar = false;

caesarSecret.text(yourname);
```

Next, you need to add your ```click``` function:

```javascript
caesarSecret.click(function() {

  if (isEncodedInCaesar == false) {
    yourname = encodeCaesar(yourname, shift)
    isEncodedInCaesar = true;
  } else {
    yourname = decodeCaesar(yourname, shift);
    isEncodedInCaesar = false;
  }
  caesarSecret.text(yourname);
});
```

Next, you need your encode and decode functions.

The Caesar Cipher is as easy as reading each letter and shifting it a little:

```javascript
function encodeCaesar(str,shift){
    /**
     *  Encode the Caesar Cipher by shifting
     *   each character by a fixed amount 
    */
    var ret = '';
    var i   = 0;

    while (i < str.length) {
        ret += String.fromCharCode(str.charCodeAt(i) + shift);
        i   += 1;
    }
    return ret;
}

function decodeCaesar(str,shift){
    /**
     *  Decode the Caesar Cipher by shifting
     *  by shifting each character back again
     *  by the same amount
    */
    var ret = '';
    var i   = 0;

    while (i < str.length) {
        ret += String.fromCharCode(str.charCodeAt(i) - shift);
        i   += 1;
    }
    return ret;
}
```
**You can do much better by merging the two functions into one.

### Python version

Python is fun 'cos the code is much shorter!

Open up PyScripter, or something similar. With Python ```Batteries Included```, you don't need to import any libraries:

```python
def encodeCaesar(str,shift):
    """Encode the Caesar Cipher by shifting
       each character by a fixed amount 
    """
    ret = ''

    for letter in str:
        ret += chr(ord(letter)+shift)
    
    return ret

def decodeCaesar(str,shift):
    """Decode the Caesar Cipher by shifting
       by shifting each character back again
       by the same amount
    """
    ret = ''

    for letter in str:
        ret += chr(ord(letter)-shift)
    
    return ret
    
yourName = "Chuck Norris"
shift      = 5

secret = encodeCaesar(yourName, shift)
print yourPhrase + " is " + secret  
```

**You can do much better by merging the two functions into one.

## 2. Simple Vigenere, or polyalphabet, Cipher:

The Vigenere Cipher extends the Caesar Cipher by using a repeating keyword, where each letter sets the shift.

### JavaScript version

Add a text tag onto your piece of ```SVG``` paper for your Vigenere secret:

```javascript
  <text id="vigenereSecret" x="0" y="140" fill="green" font-family="Verdana" font-size="40" editable="true">
    ATHCOOOOOO!!!!!!! </text>
```
Notice that the SVG Text has an ```id``` to link in to the JavaScript interactivity.

```Save``` and ```Run``` to make sure everything works!

Then use ```javascript``` to change the text to the message your want to encode and decode, and a state variable to record if the message is decoded or not:

```javascript
yourPhrase = "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG";
key        = "ARDVAAK";

secret = encodeVigenere(yourPhrase, key);

var vigenereSecret = $("#vigenereSecret");
var isEncodedInVigenere = false;

vigenereSecret.text(yourPhrase);
```

Next, you need to add your ```click``` function:

```javascript
var tempPhrase;
vigenereSecret.click(function() {
  if (isEncodedInVigenere == false) {
    tempPhrase = encodeVigenere(yourPhrase, key)
    isEncodedInVigenere = true;
  } else {
    tempPhrase = yourPhrase;
    isEncodedInVigenere = false;
  }
  vigenereSecret.text(tempPhrase);
});
```

Next, you need your encode and decode functions.

The Vigenere Cipher is as easy as reading each letter in your phrase and shifting it by the corresponding letter in the key, and starting the key again when it runs out of letters:

```javascript
function encodeVigenere(str){
    /**
     *  Encode the Vigenere Cipher
     *  by shifting each character in yourPhrase
     *  by the corresponding character in the 
     *  repeating key
    */
    var ret = '';
    var phraseIndex = 0;
    var keyIndex    = 0;

    while (phraseIndex < str.length) {
        // we want A as the first letter of the alphabet,
        // A is ASCII 65, so subtract 65 from each charCodeAt in the key
        ret += String.fromCharCode(str.charCodeAt(phraseIndex) + key.charCodeAt(keyIndex) - 65);
        
        phraseIndex++;
        keyIndex++;
    
        if (keyIndex == key.length ){
            keyIndex = 0;
        }  
    }
    return ret;
    
}

```

### Python version

```python
def encodeVigenere(str,key):
    """
     *  Encode the Vigenere Cipher
     *  by shifting each character in yourPhrase
     *  by the corresponding character in the 
     *  repeating key
    """
    ret = ''
    i=0

    for letter in str:
        # we want A as the first letter of the alphabet,
        # A is ASCII 65, so subtract 65 from each charCodeAt in the key
    
        ret += chr(ord(letter)+ord(key[i])-64)
        if i<len(key)-1:
            i+=1
        else:
            i=0

    return ret

yourPhrase = "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
key        = "ARDVAAK"

secret = encodeVigenere(yourPhrase, key)
print yourPhrase + " is " + secret  
```

**the Viginere implementation could be improved, and the decode functionality needs to be added.

## 3. Simple Book Cipher:

The Book Cipher has lots of different names and extends the Caesar Cipher by shifting against a different alphabet.


### Python version

To make sure you only shift against alphabetic letters in the Caesar Cipher, you can include the alphabet in your program.

My Python version is coded in a different way than before, just to show you can programme things in different ways, and often there is *no* single right way in programming!

```python
#in order
alphabet="abcdefghijklmnopqrstuvwzyz"
shift = alphabet.index('q')
wrap = len(alphabet)
 
def encode(name, shift):
   encoded = ''
   for letter in name:
                encoded += alphabet[ ( alphabet.index(letter) + shift ) % wrap ]
   return encoded
 
def decode(name, shift):
   encoded = ''
   for letter in name:
                encoded += alphabet[ ( alphabet.index(letter) - shift ) % wrap ]
   return encoded
```

**But the alphabet doesn't have to be in order, just known to the sender and receiver of the message
 
```python
#in any order
alphabet="qwertyuiopasdfghjklzxcvbnm"
shift = alphabet.index('q')
wrap = len(alphabet)
 
def encode(name, shift):
   encoded = ''
   for letter in name:
                encoded += alphabet[ ( alphabet.index(letter) + shift ) % wrap ]
   return encoded
 
def decode(name, shift):
   encoded = ''
   for letter in name:
                encoded += alphabet[ ( alphabet.index(letter) - shift ) % wrap ]
   return encoded
```
 
This is what the alphabet will look like
 
```python
for n in alphabet:
   coded = encode(alphabet, alphabet.index(n))
   print n, decode(coded, alphabet.index(n))
```
 
and your name will look like this
 
```python
name = "chuck norris"
 
coded_name = encode(name, shift)
decoded_name = decode(coded_name, shift)
 
print "hello,your name shifted by {0} is {1}".format( shift, coded_name )
print "and your real name is ", decoded_name
```
 
**To make you encoding even harder to crack, you could also make your alphabet random.
 

