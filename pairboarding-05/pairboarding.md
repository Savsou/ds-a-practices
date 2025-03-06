# Partner A Interviews Partner B

## Easy

#### Pt. 1)

Oh no! Somebody added a click handler to the top level of your webpage (`document`) that closes the browser window on `click` ☹️. There is no way for us to remove this event listener, but good thing we are DOM Wizards! Instead of allowing this event to fire, we want to alert `Defense!`. How might we utilize event listeners to accomplish this?

### Solution

We could stop this event from ever triggering by utilizing `event.stopPropagation`. For example, we could add an event listener to the `html` (outermost) element. Here's what that would look like:

```js
const html = document.getElementsByTagName('html')[0];

html.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('Defense!');
});
```

#### Pt. 2)
_Non-whiteboarded_

The DOM Villain is onto us. Every time we add a `click` listener to an element on our webpage, he proceeds to add another `click` listener to the **same** element that closes the browser window. Once again, our goal is to keep our website open! We want to add an event listener to our `body` element, but we know the DOM Villian will add one right after us. What `Event` method can we use to make sure no subsequent event listeners get fired on that same element?

**A:** `e.stopImmediatePropagation()`. `e.stopPropagation` only prevents events from propagating outwards; not other events on the same DOM object.

---

## Medium

Write a function, `isDescendant`, that takes two DOM nodes as arguments, a `child` and a `parent`. This method should verify that the child node is a descendant of the parent node, and return `true` or `false`. The child **does not** have to be a _direct_ descendant of the parent.

### Example

```html
<div id='parent'>
  <ul>
    <li id='child'>I am a child</li>
  </ul>
  <p id='not-a-parent'></p>
</div>
```

```js
const child = document.getElementById('child');
const parent = document.getElementById('parent');
const notParent = document.getElementById('not-a-parent');

isDescendant(parent, child) // true
isDescendant(notParent, child) // false
```

### Solution

```js
function isDescendant(parent, child){
  while (child.parentNode) {
    if (child.parentNode == parent)
      return true;
    else
      child = child.parentNode;
  }

  return false;
}
```

Take note of the `==` vs. `===`. `child.parentNode` will return a _new_ instance of a node object, so we have to do a soft comparison.

---

## Hard

Write a function, `makeNodeTree`, that takes in an array of HTML tagnames (as strings) and a root Node. Your function should accomplish the following:

+ The first element of the array should be appended to the target node passed into the function.
+ Every subsequent array element should be appended as a child to the previous one.
+ When there are no more children to be appended (you are at the end of the array), insert the content `Done!` to the last appended element.

### Example

```js
const targetDiv = document.getElementById('target');

makeNodeTree(['div', 'section', 'span', 'p'], targetDiv);
```

This should result in an HTML layout that looks like this:

```html
<div id='target'>
  <div>
    <section>
      <span>
        <p>Done!</p>
      </span>
    </section>
  </div>
</div>
```

### Solution

**Recursive**

```js
function makeNodeTree(root, elements) {
  if (!elements.length) {
    root.append('Done!');
  } else {
    const newElement = document.createElement(elements.shift());
    root.appendChild(newElement);
    makeNodeTree(newElement, elements);
  }
}
```

**Iterative**

```js
function makeNodeTree(root, elements) {
  let currentElement = document.createElement(elements[0]);
  root.appendChild(currentElement);

  for (let i = 1; i < elements.length; i++) {
    const newElement = document.createElement(elements[i]);
    currentElement.appendChild(newElement);

    currentElement = newElement;
  }

  currentElement.innerHTML = 'Done!';
}
```

# Partner B Interviews Partner A

## Easy

Write a method, `bringToTop`, that takes the very last HTML Element that was loaded onto the webpage, removes it, and places it at the very top.

> **HINT:** If your partner is making this harder than it needs to be, feel free to remind them of the `document.all` attribute, which returns an `HTMLCollection` (Array-like object) of all elements on the page. Because of the way this method works, the last element of this collection will be the last child rendered to the page.

### Example

Given the following original layout:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div>
      <p>Put me at the top!</p>
    </div>
  </body>
</html>
```

The page should have this structure after the method is called:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <p>Put me at the top!</p>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div>
    </div>
  </body>
</html>
```

### Solution

```js
function bringToTop() {
  const elements = document.all;
  const lastElement = elements[elements.length - 1];

  lastElement.remove();

  elements[0].prepend(lastElement);
}
```

_Discussion points to consider (Optional):_
+ What order does an HTML page get loaded in? When, exactly, will a `DOMContentLoaded` listener get fired off?
+ How do you think the `document.all` method works?

---

## Medium

We have a webpage with a hefty comments section; 1000 `li` elements inside of a `ul`! Write a function that, when run, will enable the following behavior:

+ Any time you click an `li`, the content of the `li` should be set to say `I have been clicked.`.

You may assume there is only one `ul` on the page.

### Naive Solution

Select all `li` elements and add an event listener to each one of them individually. That may look something like this:

```js
const lis = document.getElementsByTagName('li');

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', e => e.currentTarget.innerHTML = 'I have been clicked.');
}
```

While this would work, this a very inefficient way of doing about this for several reasons. Prompt your partner with these two questions:

1) How many different click handlers are we putting on our page? How many different functions are we making?
> A: If there are 100 li's, we are creating 100 click handlers and 100 functions

2) What if `li` elements could be dynamically added to the page (i.e. a comments or reviews section), and we wanted them to have the same functionality. Would this version of the function work?
> A: No, this wouldn't work because the click handlers were only added to each individual element with the page loaded.

How could we do better?

### Better solution

A more reasonable solution would be to add the event listener on the ul. Remember, `Event` objects have a `currentTarget` _and_ a `target` attribute. `target` is the element that triggered the event (e.g., the user clicked on), and `currentTarget` is the element that the event listener is attached to. This concept is called **Event Delegation**.

```js
const ul = document.getElementsByTagName('ul')[0];

ul.addEventListener('click', e => e.target.innerHTML = 'I have been clicked.');
```

---

## Hard

We have an HTML page with a single `Click Me!` button on it. When we click anywhere on the page, two things should happen:

+ The content of the button should now say `Don't Click Me!`
+ The button should be disabled

Clicking anywhere on the page _**again**_ should then return the button to it's original state. I should be able to keep clicking the page, and see the button toggle back and forth.

Additionally, clicking on the button itself should not do anything or trigger any events -- It's just there for fun 😌

Write a function, `toggleButton`, that implements this functionality!

### Solution

```js

function toggleButton() {

  const button = document.getElementsByTagName('button')[0];

  const disableCallback = () => {
    button.removeAttribute('disabled');
    button.innerHTML = 'Click Me!';
    document.removeEventListener('click', disableCallback);
    document.addEventListener('click', enableCallback);
  }

  const enableCallback = () => {
    button.setAttribute('disabled', '');
    button.innerHTML = 'Don\'t Click Me!';

    document.removeEventListener('click', enableCallback);
    document.addEventListener('click', disableCallback);
  }

  document.addEventListener('click', enableCallback);
  button.addEventListener('click', e => e.stopPropagation());
}
```
