import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import blackLogo from "../../assets/svg/BlackLogo.svg";
import whiteLogo from "../../assets/svg/WhiteLogo.svg";
import styles from "./nav.module.css";
import { Collapse } from "react-burgers";
import Hamburger from "hamburger-react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navigation = () => {
  const { pathname } = useLocation();
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.left_side}>
          <Link to="/">
            <img src={whiteLogo} className={styles.logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.right_side}>
          <Hamburger
            direction="top"
            color="white"
            value={isOpen}
            onToggle={() => {
              setOpen(!isOpen);
            }}
          />
          <ul className={!isOpen ? "hamburgerClose" : "hamburgerCloseCross"}>
            <li>
              {pathname == "/" ? (
                <Link to="/" style={{ color: "#0652E9", fontWeight: "900" }}>
                  Home
                </Link>
              ) : (
                <Link to="/">Home</Link>
              )}
            </li>
            <li>
              {pathname == "/aboutMe" ? (
                <Link to="/aboutMe" style={{ color: "#0652E9", fontWeight: "900" }}>
                  About
                </Link>
              ) : (
                <Link to="/aboutMe">About</Link>
              )}
            </li>
            <li>
              {pathname == "/myProjects" ? (
                <Link to="/myProjects" style={{ color: "#0652E9", fontWeight: "900" }}>
                  Projects
                </Link>
              ) : (
                <Link to="/myProjects">Projects</Link>
              )}
            </li>
            <li>
              {pathname == "/contactMe" ? (
                <Link to="/contactMe" style={{ color: "#0652E9", fontWeight: "900" }}>
                  Contact
                </Link>
              ) : (
                <Link to="/contactMe">Contact</Link>
              )}
            </li>
          </ul>

          <ul className={styles.right_sideUL}>
            <li>
              {pathname == "/" ? (
                <Link to="/" style={{ color: "#0652E9", fontWeight: "900" }}>
                  Home
                </Link>
              ) : (
                <Link to="/">Home</Link>
              )}
            </li>
            <li>
              {pathname == "/aboutMe" ? (
                <Link to="/aboutMe" style={{ color: "#0652E9", fontWeight: "900" }}>
                  About
                </Link>
              ) : (
                <Link to="/aboutMe">About</Link>
              )}
            </li>
            <li>
              {pathname == "/myProjects" ? (
                <Link to="/myProjects" style={{ color: "#0652E9", fontWeight: "900" }}>
                  Projects
                </Link>
              ) : (
                <Link to="/myProjects">Projects</Link>
              )}
            </li>
            <li>
              {pathname == "/contactMe" ? (
                <Link to="/contactMe" style={{ color: "#0652E9", fontWeight: "900" }}>
                  Contact
                </Link>
              ) : (
                <Link to="/contactMe">Contact</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
