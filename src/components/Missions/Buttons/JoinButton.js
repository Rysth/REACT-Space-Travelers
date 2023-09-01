import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionsActions } from '../../../redux/missions/missionsSlice';

function JoinButton({ id, setStatus }) {
  const dispatch = useDispatch();

  const handleJoinningMission = () => {
    setStatus(true);
    dispatch(missionsActions.joiningMission({ id }));
  };

  return (
    <button
      type="button"
      className="missions-text button join"
      onClick={handleJoinningMission}
    >
      Join Mission
    </button>
  );
}

JoinButton.propTypes = {
  id: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default JoinButton;
