import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionsSlice';
import MissionItem from './Item/MissionItem';
import './Missions.css';

function Missions() {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="missions">
      <div className="missions-content container">
        <div className="missions-table">
          <header className="missions-heading">
            <h2 className="missions-title">Missions</h2>
            <h2 className="missions-title">Description</h2>
            <h2 className="missions-title">Status</h2>
            <span className="missions-title" />
          </header>
          <div className="missions-body">
            {missions.map((mission, index) => (
              <MissionItem
                key={mission.id}
                id={mission.id}
                index={index}
                title={mission.name}
                parragraph={mission.description}
                reserved={mission.reserved}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Missions;
