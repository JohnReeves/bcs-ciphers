


## 1. Improving the layout with CSS 

CSS is a programming language used to make html cool and stylish. 

Later you will find out how to make things move using CSS :-)

First, we will use CSS to line up the textboxes and buttons to make our cipher tools look beautiful.

In the style.css file or in the css box:

## 2. Line up the text boxes

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
## 3. Beautiful text

```css

These show how to define your own styling tags, and also how to take full control of text styling.

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

## 4. Stylish Forms


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

## 5. Beautiful boxes

```css
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
```

## 6. Beautiful Buttons

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

## Make it beautiful

Replace my horrible colours with your favourites from the Material Design colours.

Use the styling rules to make your cipher tool beautiful.

