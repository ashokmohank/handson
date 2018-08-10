import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

App.propTypes = {
  numProp: PropTypes.number,
  strProp: PropTypes.string,
  boolProp: PropTypes.bool.isRequired,
  rangeProp: PropTypes.oneOf(['AM', 'PM']),
};

export { App };
