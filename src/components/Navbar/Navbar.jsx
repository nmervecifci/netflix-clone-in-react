import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-middle">
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
          <li>Home</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" />
        <p>Children</p>
        <img src={bell_icon} alt="" />
        <div className="navbar-profile">
          <img src={profile_icon} alt="" />
          <img src={caret_icon} alt="" />
        </div>
      </div>

    </div>
    
  );
}

export default Navbar;