import { Routes, Route } from 'react-router';

function Rout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h2>Rockets</h2>} />
        <Route path="/mission" element={<h2>Messions</h2>} />
        <Route path="/profile" element={<h2>My Profile</h2>} />
      </Routes>
    </div>
  );
}

export default Rout;
