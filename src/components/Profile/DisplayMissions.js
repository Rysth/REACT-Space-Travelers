import React from 'react';
import { useSelector } from 'react-redux';

function DisplayMissions() {
  const { missions } = useSelector((store) => store.missions);
  const bookMission = missions.filter((mission) => mission.reserved);
  if (bookMission.length === 0) {
    return (
      <div className="border border-gray-600 px-4 py-5 font-thin text-base">
        You have not joined into any mission yet.
      </div>
    );
  }
  return (
    <ul className="list-group">
      {bookMission.map((rocket) => (
        <li
          key={rocket.id}
          className="showRocket border border-gray-600 px-4 py-5 font-thin text-base"
        >
          {rocket.name}
        </li>
      ))}
    </ul>
  );
}

export default DisplayMissions;
