import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxWithLabel from './CheckboxWithLabel';
import Link from './Link';

ReactDOM.render(
  <div>

    <CheckboxWithLabel labelOn="Checked" labelOff="Unchecked" />

    <hr />

    <Link page="http://www.google.com">www.Google.com</Link>

  </div>, document.getElementById('root'));
