import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MissionItem.css';

function MissionItem(
  /* prettier-ignore */
  {
    id,
    index,
    title,
    parragraph,
  },
) {
  const [burnout, setBurnOut] = useState(false);

  useEffect(() => {
    if (index % 2 === 0) {
      setBurnOut(true);
    }
  }, [id]);

  return (
    <div className={burnout ? 'missions-item burnout' : 'missions-item'}>
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
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  parragraph: PropTypes.string.isRequired,
};

export default MissionItem;
