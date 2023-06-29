import { NavLink } from "react-router-dom";
import Communities from "./icons/Communities.jsx";
import Profile from "./icons/Profile.jsx";
import More from "./icons/More.jsx";
import Display from "./icons/Display.jsx";

import { useEffect, useRef, useState } from "react";
import { useModalContext } from "../../hooks/useModalContext";
import DisplaySettings from "../DisplaySettings";

import "./NavButtons.css";

const NavButtons = () => {
  return (
    <>
      <NavButton
        icon={<Communities />}
        text="Challenges"
        to="/challenges"
      />
      <NavButton
        icon={<Communities />}
        text="Communities"
        to="/communities"
      />
      <NavButton icon={<Profile />} text="Profile" to="/danibuva" />
      <NavOption icon={<More />} text="More" />
    </>
  );
};

function NavButton({ icon, text, to }) {
  return (
    <NavLink to={to}>
      <div className="nav-link-container">
        <div className="nav-link-content">
          {icon}
          <p className="nav-text">{text}</p>
        </div>
      </div>
    </NavLink>
  );
}

function NavOption({ icon, text }) {
  const { buttonRef, menuRef, setShow, show } = useMenu();
  const { showModal } = useModalContext();

  return (
    <>
      <div
        className="nav-link-container"
        ref={buttonRef}
        onClick={() => setShow(!show)}
      >
        <div className="nav-link-content">
          {icon}
          <p className="nav-text">{text}</p>
        </div>
      </div>
      <Menu isOpen={show} menuRef={menuRef}>
        <MenuItem
          icon={<Display />}
          text="Display"
          onClick={() => {
            setShow(false);
            showModal(<DisplaySettings />);
          }}
        />
      </Menu>
    </>
  );
}

function Menu({ children, isOpen, menuRef }) {
  if (!isOpen) return null;

  return (
    <div ref={menuRef} className="menu">
      {children}
    </div>
  );
}

function MenuItem({ icon, text, onClick }) {
  return (
    <div className="menu-item" onClick={onClick}>
      {icon}
      {text}
    </div>
  );
}

function useMenu() {
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return { buttonRef, setShow, show, menuRef };
}

export default NavButtons;
