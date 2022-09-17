import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
    <a href='https://github.com/Jeffiftyone' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
       <i class="fa-brands fa-github"></i> Check out My GitHub!
      </button>
    </a>

    <a href='https://www.linkedin.com/in/jeffreybeh/' className='btn-mobile'>
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      Connect with me on Linked<i class="fa-brands fa-linkedin"></i>
    </button>
    </a>
    </>
  );
};
