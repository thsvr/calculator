import React from 'react';

import PropTypes from 'prop-types';
// import Big from 'big.mjs';

// import '../index.css';

const Button = ({
  name, wide, color,

}) => {
  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
  };
  return (
    <button type="submit" className="btnStyle" style={style}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
