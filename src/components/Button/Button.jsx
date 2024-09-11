// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, backgroundColor, size }) => {
    const styles = {
        backgroundColor,
        border: 'none',
        padding: size === 'large' ? '16px 32px' : '8px 16px',
        fontSize: size === 'large' ? '18px' : '14px',
        cursor: 'pointer',
        borderRadius: '5px'
    };

    return (
        <button onClick={onClick} style={styles}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
};

Button.defaultProps = {
    onClick: undefined,
    backgroundColor: '#007bff',
    size: 'small',
};

export default Button;
