
// string handling 
// input and output text
// wiring in the buttons

## 1. Letters 

Letters and Strings are JavaScript objects with lots of functionality built in:

Open the developer tools to find out how well Javascript understand letters and strings of letters very well!

```javascript
"your name".length
```
```javascript
"your name".charCodeAt(1)
```
`charCodeAt()` gives the ASCII code for each letter. [ASCII TABLE HERE]

`fromCharCode()` gives the printable letter for each ASCII code.

Allowing you to type:
```javascript
String.fromCharCode("your name".charCodeAt(1))
```
and
```javascript
String.fromCharCode("your name".charCodeAt(1)+3)
```
To shift the value a little.

## 2. Strings of Letters

