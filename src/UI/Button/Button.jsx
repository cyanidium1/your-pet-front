import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import sprite from '../../images/icons.svg';
import { Link } from 'react-router-dom';

const Button = ({ text, svg, isFilled, color, to, onClick }) => {
  let buttonClassName = styles.button;

  if (isFilled) {
    if (color === 'yellow') {
      buttonClassName = styles.buttonFilledYellow;
    } else if (color === 'blue') {
      buttonClassName = styles.buttonFilledBlue;
    } else if (color === 'white') {
      buttonClassName = styles.buttonNotFilledYellow;
    }
  }

  return (
    <button className={buttonClassName} onClick={onClick}>
      <div className={styles.buttonContent}>
        {to ? <Link to={to}>{text}</Link> : <span>{text}</span>}
        {svg && (
          <svg className={styles.icon}>
            <use href={sprite + svg}></use>
          </svg>
        )}
      </div>
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};
