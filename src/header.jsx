import planet from "./planet.png";
import './style/style.css';

function Header() {
  return <div className="nav">
    <div className="logo">
        <img className="image" src={planet} alt="logo" />
        <h1>Space Travelers' Hub</h1>
    </div>
  </div>;
}

export default Header;
