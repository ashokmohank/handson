This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Deleted the contents of

- public
- src

Recreate public/index.html and src/index.js

## Table of Contents

- [JSX Javascript XML](#jsx)
- [Styling](#styling)
- [React State](#react-state)
- [Events](#events)
- [Lifecycle Events](#lifecycle-events)
- [Validating Props](#validating-props)
- [Key](#key)

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

## React State

- Makes the page dynamic in response to either time or user event or server rendering or ajax calls.
- Do NOT modify props
- State is immuetable, use setState() to modify the state
- States can be used only with Class components. Function components would not handle state and use only props.
  _Interactions_
  - Parent to Child is the only way to interact, i.e no child to parent or siblings interactions. But it can be achieved through design patterns.
    Refer 2a_Events

## Events

- Events are sythesized events, doesn't interact with real DOM
- Event params are accessed with target (like ev.target.value or ev.target.checked)

## Lifecycle Events

Refer 3_Lifecycle

1.  Mounting Phase
2.  Updating Phase
    a. State Changes
    b. Property Changes
    c. Parent Updates
3.  Unmounting Phase

|      | Mounting Phase     | Update Phase              | Unmounting Phase     |
| ---- | ------------------ | ------------------------- | -------------------- |
|      | contructor         |                           |                      |
|      |                    | componentWillReceiveProps |                      |
|      |                    | shouldComponentUpdate     |                      |
| WILL | componentWillMount | componentWillUpdate       | componentWillUnmount |
|      | render             | render                    |                      |
| DID  | componentDidMount  | componentDidUpdate        |                      |

## Validating Props

Good practice to validate props. A warning will be shown only in the development mode.

> npm install --save prop-types

[prop-types](https://www.npmjs.com/package/prop-types)

## Key

- Key ensures that diffing and Reconciliation takes place in an efficient manner.
- Key should be unique
- Elements generated in a iteration should have key
  _Usual approach_

> <ul\>
> <li\>red</li\>
> <li\>green</li\>
> </ul\>

_Good approach_

> <ul\>
>
> <li key="red"\>red</li\>
> <li key="green"\>green</li\>
> <li key="blue"\>blue</li\>
> </ul\>
