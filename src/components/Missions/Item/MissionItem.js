import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { missionsActions } from '../../../redux/missions/missionsSlice';
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
  const dispatch = useDispatch();

  const [status, setStatus] = useState(true);
  const handleJoinningMission = () => {
    setStatus(false);
    dispatch(missionsActions.joiningMission({ id }));
  };

  const handleLeavingMission = () => {
    setStatus(true);
    dispatch(missionsActions.leavingMission({ id }));
  };

  useEffect(() => {
    if (index % 2 === 0) {
      setBurnOut(true);
    }
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
        <button
          type="button"
          className="missions-text button"
          onClick={status ? handleJoinningMission : handleLeavingMission}
        >
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
