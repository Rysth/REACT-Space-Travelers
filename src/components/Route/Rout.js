import { Routes, Route } from 'react-router';
import RocketsContainer from '../Rockets/RocketsContainer';
import Missions from '../Missions/Missions';

function Rout() {
  return (
    <Routes>
      <Route path="/" element={<RocketsContainer />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<h2>My Profile</h2>} />
    </Routes>
  );
}

export default Rout;
