import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
    <h2>
        {message}
    </h2>
);

Error.propTypes = {
    message: PropTypes.string
};

Error.defaultProps = {
    message: 'An error occurred'
}

export default Error;