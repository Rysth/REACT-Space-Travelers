import planet from '../../assets/img/planet.png';
import './Header.css';

function Header() {
  return (
    <div className="nav">
      <div className="logo">
        <img className="image" src={planet} alt="logo" />
        <h1>Space Travelers&lsquo; Hub</h1>
      </div>
    </div>
  );
}
export default Header;
