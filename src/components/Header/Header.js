import { NavLink } from 'react-router-dom';
import planet from '../../assets/img/planet.png';
import './Header.css';

function Header() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <img className="nav-image" src={planet} alt="logo" />
          <h1 className="nav-title">Space Travelers&lsquo; Hub</h1>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
