import "../styles/NavBar.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="nav-bar-main">
        <div className="nav-bar-main__menu">
          <nav>
            <ul>
              <li>sprite</li>
              <li>wine</li>
              <li>discover</li>
              <li>limited editions</li>
              <li>gifts and accesroies</li>
              <Link to="/aboutus">
                <li>cocktail lounge</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div class="dropdown">
          <div class="dropdown-content">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
          </div>
        </div>
        <div className="nav-bar-main__text">
          <Link to="/">
            <h2>Cork & Marsh</h2>
          </Link>
        </div>
        <div className="nav-bar-main__icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="svg1" />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
