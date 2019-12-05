
# Improving the layout with CSS 

CSS is a programming language used to make html cool and stylish. 

Later you will find out how to make things move using CSS :-)

First, we will use CSS to line up the textboxes and buttons to make our cipher tools look beautiful.

In the style.css file or in the css box:

## 1. Fabulous Forms

Format the form with the CSS below.

There are more options you can use to make the form exactly as you like it.

```css
form {
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
  background:#c0ffee;
}

form div + div {
  margin-top: 1em;
}
```

## 2. Tremendous Textboxes

use the CSS below to choose the font for the labels and line up the text with the boxes.

I like Roboto but you can chose anything you like.

```css
label {
    display: block;
    font: 1rem 'Roboto', sans-serif;
}

input,
label {
    margin: .4rem 0;
}

label {
  display: inline-block;
  width: 90px;
  text-align: right;
}
```
## 3. Frenetic Fonts

These show how to define your own styling tags.

You can take full control of text styling to make beautiful banners.

```css
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
```

## 5. Incredible Inputs

These CSS lines make the input boxes a nice size and colour.

Take some time to play around to find out what you can control.

```css
input, 
textarea {
  font: 1em sans-serif;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #999;
  background-color: #c0f;
}

input:focus, 
textarea:focus {
  border-color: #000;
}
```

## 6. Bountiful Buttons

Buttons need round corners and colours to encourage you to press them.

Find out what you can do with them!

```css
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

## Make the cipher input form beautiful

Replace my horrible colours with your favourites from the Material Design colours.

Use the styling rules to make your cipher tool beautiful.

.
