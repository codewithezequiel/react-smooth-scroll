import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            BLOCCHITECH
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="whatwedo"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                WHAT WE DO
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="blocchilabs"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                BLOCCHI LABS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="latestnews"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                LATEST NEWS
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/">CONTACT US</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
