
// string handling 
// input and output text
// wiring in the buttons

We need to know some string handling to process the plain text or cipher text on our form.

It will also be super-helpful to give feedback on the screen to let us know what is happending.

## 1. Letters and Strings of letters

Letters and Strings are JavaScript objects with lots of functionality built in:

Open the developer tools to find out how well Javascript understand letters and strings of letters very well!

```javascript
alphabet="abcdefghijklmnopqrstuvwxyz";
```

```javascript
alphabet.length
```

Addressing individual characters

```javascript
alphabet.charAt(1);
alphabet.indexOf("a");
```

NB: We could use the ASCII numbers given by `charCodeAt()`

## 2. Shifting characters

Knowing the value of the index of a letter in a string allows you to shift the letters as we need to in our cryptography 

`for ()` iterates over all the characters in the string;   
`in` gives the index of the character in the string;
`of` gives the character in the string.
`%` means that when we shift our characters we go back to the beginning ie `z` goes back to `a`.

```javascript
for (letterChar of alphabet) console.log(letterChar);
```

```javascript
for letterIndex in alphabet) console.log(alphabet[letterIndex]);
```

```javascript
for letter in alphabet) console.log(alphabet[(letter+shift)%alphabet.length])
```

## 3. Shifting strings of characters

The following shows how to put all of those together in a single script.

### Make sure you read your script to understand.


```javascript
alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
message="now is the winter of our discontent made glorious by this son of York!";
shift=5;

for (letterChar of message){
    console.log(alphabet.charAt(alphabet.indexAt(letterChar)+shift)%alphabet.length);
}
```

## 4. Linking up the buttons & textboxes


