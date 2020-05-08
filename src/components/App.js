
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
// import PropTypes from 'prop-types';
// import Big from 'big.mjs';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    setState(Calculate(state, buttonName));
  };

  return (
    <div id="appId" className="app-class">
      <Display />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
