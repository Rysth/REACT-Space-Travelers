import { NavLink } from 'react-router-dom';
import planet from '../../assets/img/planet.png';
import './Header.css';

function Header() {
  return (
    <div className="nav">
      <div className="navbar container">
        <div className="logo">
          <img className="nav-image" src={planet} alt="logo" />
          <h1 className="nav-title">Space Travelers&lsquo; Hub</h1>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/rockets" className="nav-link">
              Rockets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/missions" className="nav-link">
              Missions
            </NavLink>
          </li>
          <li className="nav-item">|</li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
