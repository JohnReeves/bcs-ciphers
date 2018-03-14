
#A simple Caesar, or shift, Cipher:

```javascript
<?prettify ...?>
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

//encoding and decoding are just opposites**
function decodeCaesar(str,shift){
    /**
     *  Decode the Caesar Cipher
     *  by shifting each character
     *  back again by the same amount
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
**You can do much better by merging the two functions into one.**


#A simple Vigenere, or polyalphabet, Cipher:

The Vigenere Cipher extends the Caesar Cipher by using a repeating keyword, where each letter sets the shift.

```javascript
yourPhrase = "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG";
key        = "ARDVAAK";

secret = encodeVigenere(yourPhrase, key);
$('body').append(secret); 

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

**the Caesar implementation could be improved, and the decode functionality needs to be added**


```python
#bcs-ciphers
#===========
#
#Minimal cipher functions in python for digital makers at beechen cliff
#
#A simple Caesar, or shift, Cipher:

def encodeCaesar(str,shift):
    """
     *  Encode the Caesar Cipher
     *  by shifting each character
     *  by a fixed amount
    """
    ret = ''

    for letter in str:
        ret += chr(ord(letter)+shift)
    
    return ret


#encoding and decoding are just opposites**
def decodeCaesar(str,shift):
    """
     *  Decode the Caesar Cipher
     *  by shifting each character
     *  back again by the same amount
    """
    ret = ''

    for letter in str:
        ret += chr(ord(letter)-shift)
    
    return ret

#You can do much better by merging the two functions into one.


#A simple Vigenere, or polyalphabet, Cipher:
#
#The Vigenere Cipher extends the Caesar Cipher by using a repeating keyword, 
#where each letter sets the shift.
#

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


#the Caesar implementation could be improved, and the decode functionality needs to be added

#caesar testing
yourname = "Chuck Norris"
shift    = 1

secret    = encodeCaesar(yourname, shift)
notsecret = decodeCaesar(secret,   shift)

print secret + " is " + notsecret  


# vigenere testing
yourPhrase = "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
key        = "ARDVAAK"

secret = encodeVigenere(yourPhrase, key)
print yourPhrase + " is " + secret  
```

