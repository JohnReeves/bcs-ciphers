
var yourname = "now is the winter of our discontent made glorious by this son of York";
var shift = 5;

var caesarSecret = $("#caesarSecret");
var isEncodedInCaesar = false;


selection.
  .append("text")
    .attr("contentEditable", true)
    .text(function(d) { return d.text })
    .on("keyup", function(d) { d.text = d3.select(this).text(); });
    
caesarSecret.click(function () {

  /caesarSecret.text(yourname);

  if (isEncodedInCaesar == false) {
    yourname = encodeCaesar(yourname, shift)
    isEncodedInCaesar = true;
  } else {
    yourname = decodeCaesar(yourname, shift);
    isEncodedInCaesar = false;
  }
  caesarSecret.text(yourname);
});

function encodeCaesar(str, shift) {
  /**
   *  Encode the Caesar Cipher by shifting
   *   each character by a fixed amount 
  */
  var ret = '';
  var i = 0;

  while (i < str.length) {
    ret += String.fromCharCode(str.charCodeAt(i) + shift);
    i += 1;
  }
  return ret;
}

function decodeCaesar(str, shift) {
  /**
   *  Decode the Caesar Cipher by shifting
   *  by shifting each character back again
   *  by the same amount
  */
  var ret = '';
  var i = 0;

  while (i < str.length) {
    ret += String.fromCharCode(str.charCodeAt(i) - shift);
    i += 1;
  }
  return ret;
}
