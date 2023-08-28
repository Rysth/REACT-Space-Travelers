import { Routes, Route } from 'react-router';

function Rout() {
  return (
    <Routes>
      <Route path="/" element={<h2>Rockets</h2>} />
      <Route path="/missions" element={<h2>MIssions</h2>} />
      <Route path="/profile" element={<h2>My Profile</h2>} />
    </Routes>
  );
}

export default Rout;
