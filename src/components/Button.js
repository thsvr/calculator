/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import PropTypes from 'prop-types';
// import Big from 'big.mjs';

const Button = buttonName => (
  <button type="submit" className="buttonName">
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};


export default Button;
