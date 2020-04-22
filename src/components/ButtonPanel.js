import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../index.css';

const ButtonPanel = ({ clickBtn }) => {
  const handleClick = buttonName => {
    clickBtn(buttonName);
  };
  return (
    <div className="container">
      <div className="group1">
        <Button name="A/C" clickBtn={handleClick} />
        <Button name="+/-" clickBtn={handleClick} />
        <Button name="%" clickBtn={handleClick} />
        <Button name="/" clickBtn={handleClick} />
      </div>

      <div className="group2">
        <Button name="7" clickBtn={handleClick} />
        <Button name="8" clickBtn={handleClick} />
        <Button name="9" clickBtn={handleClick} />
        <Button name="X" clickBtn={handleClick} />
      </div>

      <div className="group3">
        <Button name="4" clickBtn={handleClick} />
        <Button name="5" clickBtn={handleClick} />
        <Button name="6" clickBtn={handleClick} />
        <Button name="-" clickBtn={handleClick} />
      </div>

      <div className="group4">
        <Button name="1" clickBtn={handleClick} />
        <Button name="2" clickBtn={handleClick} />
        <Button name="3" clickBtn={handleClick} />
        <Button name="+" clickBtn={handleClick} />
      </div>

      <div className="group5">
        <Button name="0" clickBtn={handleClick} />
        <Button name="." clickBtn={handleClick} />
        <Button name="=" clickBtn={handleClick} />
        <Button name=" Logo " clickBtn={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickBtn: PropTypes.func.isRequired,
};

export default ButtonPanel;
