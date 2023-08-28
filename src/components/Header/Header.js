import planet from '../../assets/img/planet.png';
import './Header.css';

function Header() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <img className="image" src={planet} alt="logo" />
          <h1>Space Traveler&lsquo;s Hub</h1>
        </div>
      </div>
    </div>
  );
}
export default Header;
