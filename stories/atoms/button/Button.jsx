import React from 'react';

import PropTypes from 'prop-types';

import './button.css';

export const Button = ({
  type = 'primary',
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`button ${type}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.element,
  onClick: PropTypes.func,
};
