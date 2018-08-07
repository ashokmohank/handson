This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Deleted the contents of

- public
- src

Recreate public/index.html and src/index.js

## Table of Contents

- [JSX Javascript XML](#jsx)
- [Redux State](#redux-state)

## JSX

Javascript XML Follows the rules of XML

- Single Parent root element
- tags should be properly close
- case-sensitive
- proper nesting of tags
- attribute values must be enclose within quotes(single or double)
- attribute values other than string can be passed as expressions (Ecample: <Hello val={100}>)
- html attribute names must be camel case (example: class as className, onclick as onClick)
  #JSX Expression
- IF and FOR cannot be used inside the JSX (<Hello>{ no if or for loop }<//Hello>). However, conditional expression(?:) is allowed.

## Styling

- Inline style should be only objects unlike html string
- style attribute value in html { color: "red"; font-size: 30;} has to converted to equivalent object in jsx as {color: "red", fontSize: 30}
- External or Internal CSS as be utilized

## Redux State

- Makes the page dynamic in response to either time or user event or server rendering or ajax calls.
- Do NOT modify props
- State is immuetable, use setState() to modify the state
- States can be used only with Class components. Function components would not handle state and use only props.
  _Interactions_
  - Parent to Child is the only way to interact, i.e no child to parent or siblings interactions. But it can be achieved through design patterns.
    Refer 2a_Events
