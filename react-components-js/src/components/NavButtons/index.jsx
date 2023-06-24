import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Communities from "./assets/Communities.svg";
import Profile from "./assets/Profile1.svg";
import "./NavButtons.css";

const NavButtons = () => {
  return (
    <>
      <NavButton
        icon={Communities}
        text="Communities"
        to="/:id/communities"
        boxSize="25px"
        p={0}
      />
      <NavButton icon={Profile} text="Profile" to="/:id" />
    </>
  );
};

function NavButton({ boxSize, icon, padding, text, to }) {
  return (
    <NavLink to={to} className="nav-link">
      <div className="nav-link-container">
        <div className="nav-link-content">
          <img
            alt={text}
            src={icon}
            className="icon"
            style={{
              height: boxSize,
              width: boxSize,
              padding,
            }}
          />
          <p className="nav-text">{text}</p>
        </div>
      </div>
    </NavLink>
  );
}

function NavOption({ icon, text }) {
  return (
    <div className="nav-link-container">
      <div className="nav-link-content">
        <img alt={text} src={icon} className="icon" />
        <p className="nav-text">{text}</p>
      </div>
    </div>
  );
}

NavOption.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

NavButton.propTypes = {
  boxSize: PropTypes.string,
  icon: PropTypes.string.isRequired,
  padding: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
};
export default NavButtons;
