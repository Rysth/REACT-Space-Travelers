import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionsActions } from '../../../redux/missions/missionsSlice';

function LeaveButton({ id, setStatus }) {
  const dispatch = useDispatch();

  const handleLeavingMission = () => {
    setStatus(false);
    dispatch(missionsActions.leavingMission({ id }));
  };

  return (
    <button
      type="button"
      className="missions-text button leave"
      onClick={handleLeavingMission}
    >
      Leave Mission
    </button>
  );
}

LeaveButton.propTypes = {
  id: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default LeaveButton;
