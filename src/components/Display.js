/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
// import Big from 'big.mjs';

const Display = () => (
  <div className="display">
    <p>{result}</p>
  </div>
);

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };


export default Display;
