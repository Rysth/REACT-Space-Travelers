import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MissionItem.css';
import JoinButton from '../Buttons/JoinButton';
import LeaveButton from '../Buttons/LeaveButton';
import TagStatus from '../Tags/TagStatus';

function MissionItem(
  /* prettier-ignore */
  {
    id,
    index,
    title,
    parragraph,
    reserved,
  },
) {
  const [burnout, setBurnOut] = useState(false);
  const [status, setStatus] = useState(reserved);

  useEffect(() => {
    if (index % 2 === 0) setBurnOut(true);
  }, [index, id]);

  useEffect(() => {}, [status]);

  return (
    <div className={burnout ? 'missions-item burnout' : 'missions-item'}>
      <header className="missions-data">
        <h3 className="missions-text title">{title}</h3>
      </header>
      <div className="missions-data">
        <p className="missions-text parragraph">{parragraph}</p>
      </div>
      <div className="missions-data center">
        {status ? (
          <TagStatus
            text="Active Member"
            classList="missions-text tag member"
          />
        ) : (
          <TagStatus text="Not a Member" classList="missions-text tag" />
        )}
      </div>
      <div className="missions-data center">
        {status ? (
          <LeaveButton id={id} setStatus={setStatus} />
        ) : (
          <JoinButton id={id} setStatus={setStatus} />
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
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
