import React from 'react';
import PropTypes from 'prop-types';

function TagStatus({ text, classList }) {
  return <p className={classList}>{text}</p>;
}

TagStatus.propTypes = {
  text: PropTypes.string.isRequired,
  classList: PropTypes.string.isRequired,
};

export default TagStatus;
