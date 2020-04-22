import React from 'react';

import PropTypes from 'prop-types';
// import Big from 'big.mjs';

const Button = ({ name }) => (
  <button type="submit" className="btnStyle">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Button;
