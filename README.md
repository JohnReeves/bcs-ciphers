bcs-ciphers
===========

Minimal cipher functions in javascript for digital makers at beechen cliff

#A simple Caesar, or shift, Cipher:

```javascript
var yourname = "Chuck Norris";
var shift    = 5;

secret    = encodeCaesar(yourname, shift);
notsecret = decodeCaesar(secret,   shift);

$('body').append(" <p> " + secret + "<i> is <i> <b> " + notsecret + " <b> " ); 

function encodeCaesar(str,shift){
    /**
     *  Encode the Caesar Cipher
     *  by shifting each character
     *  by a fixed amount
    */
    var ret = '';
    var i   = 0;

    while (i < str.length) {
        ret += String.fromCharCode(str.charCodeAt(i) + shift);
        i   += 1;
    }
    return ret;
}
```
**encoding and decoding are just opposites**


