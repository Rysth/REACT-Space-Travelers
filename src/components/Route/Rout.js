import { Routes, Route } from 'react-router';
import RocketsContainer from '../Rockets/RocketsContainer';
import Missions from '../Missions/Missions';
import ProfileContainer from '../Profile/ProfileContainer';

function Rout() {
  return (
    <Routes>
      <Route path="/" element={<RocketsContainer />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<ProfileContainer />} />
    </Routes>
  );
}

export default Rout;
