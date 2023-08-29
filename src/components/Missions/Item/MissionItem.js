import React from 'react';
import PropTypes from 'prop-types';

function MissionItem({ title, parragraph }) {
  return (
    <div className="missions-item">
      <header className="missions-data">
        <h3 className="missions-text title">{title}</h3>
      </header>
      <div className="missions-data">
        <p className="missions-text parragraph">{parragraph}</p>
      </div>
      <div className="missions-data center">
        <p className="missions-text tag">Not a Member</p>
      </div>
      <div className="missions-data center">
        <button type="button" className="missions-text button">
          Join Mission
        </button>
      </div>
    </div>
  );
}

MissionItem.propTypes = {
  title: PropTypes.string.isRequired,
  parragraph: PropTypes.string.isRequired,
};

export default MissionItem;
