import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useSelector } from 'react-redux';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 860) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '  rgb(122, 50, 50)' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              <h2>PoltavaHealth</h2>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>

              <NavItem>
                <NavLinks to='/huilo' onClick={closeMobileMenu}>
                  Doctor
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/pricing' onClick={closeMobileMenu}>
                  Pricing
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/contact' onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  Products
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/cart' onClick={closeMobileMenu}>
                  Cart  {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/login'>
                    <Button primary>Authorize</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/login'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Authorize
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;