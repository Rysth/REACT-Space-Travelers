import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MissionItem.css';
import JoinButton from '../Buttons/JoinButton';
import LeaveButton from '../Buttons/LeaveButton';

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
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (index % 2 === 0) setBurnOut(true);
  }, [index, id]);

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
        {status ? (
          <JoinButton id={id} setStatus={setStatus} />
        ) : (
          <LeaveButton id={id} setStatus={setStatus} />
        )}
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
