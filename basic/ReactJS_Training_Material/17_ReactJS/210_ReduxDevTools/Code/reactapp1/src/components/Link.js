import React from 'react';

/*
This component will get two properties:
active: Whether link is active or not.
onLinkClick: Callback method to call when link is clicked.
*/

function Link(props) {
  let linkElement;

  function clickHandler(e) {
    e.preventDefault();
    props.onLinkClick();
  }

  if (props.active) {
    linkElement = <span>{props.children}</span>;
  } else {
    linkElement = (
      <a href="#" onClick={clickHandler}>
        {props.children}
      </a>
    );
  }

  return linkElement;
}

export default Link;
