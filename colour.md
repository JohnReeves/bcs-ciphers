


## 1. Improve the layout with CSS 

Now we need to line up the textboxes and buttons so that we actually want to use it.

In the style.css file or in the css box:

```css
label {
    display: block;
    font: 1rem 'Roboto', sans-serif;
}

input,
label {
    margin: .4rem 0;
}

.small {
    font: italic 13px Roboto;
}

.heavy {
    font: bold 30px Roboto;
}

.Rrrrr {
    font: italic 40px Roboto;
    fill: red;
}

form {
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

form div + div {
  margin-top: 1em;
}

label {
  display: inline-block;
  width: 90px;
  text-align: right;
}

input, 
textarea {
  font: 1em sans-serif;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #999;
}

input:focus, 
textarea:focus {
  border-color: #000;
}

textarea {
  vertical-align: top;
  height: 5em;
}

button {
  padding-left: 90px;
  }

button {
  font-size: 15px;
  padding: 5px;
  background-color: #084CA1;
  font-weight:bold;
  cursor: pointer;
  width:48%;
  color:white;
  border-radius:3px;
  margin-left:6px;
  font-family: 'Droid Serif', serif;
  border: 1px solid gray;
  }
```



