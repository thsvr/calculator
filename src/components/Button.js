import React from 'react';

import PropTypes from 'prop-types';
// import Big from 'big.mjs';

import '../index.css';

const Button = ({ name }) => (
  <button type="submit" className="btnStyle">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Button;
