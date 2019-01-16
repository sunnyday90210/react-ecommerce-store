import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(6rem, 1fr) repeat(8, minmax(min-content, 16rem)) minmax(
      6rem,
      1fr
    );
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 1.6rem;
  margin-top: 1.6rem;
`;

const SocialIcons = styled.ul`
  grid-column: 2 / 4;
  grid-row: 1 /2;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  align-items: center;
`;

const SocialIcon = styled.i`
  font-size: 1.8rem;
  color: #12376e;
  transition: all 0.2s;
  :hover {
    color: #34598f;
    transform: rotateZ(360deg);
  }
`;

const FirstNav = styled.nav`
  grid-column: 6 / 10;
  grid-row: 1/2;
`;

const FirstNavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  list-style: none;
`;

const FirstNavLink = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  color: #12376e;
  display: inline-block;
  width: 100%;
  text-align: center;

  span {
    font-size: 1.3rem;
    color: #34598f;
  }

  i {
    font-size: 1.3rem;
    margin-right: 0.3rem;
  }

  ::after {
    content: '';
    width: 0;
    height: 0.1rem;
    background-color: #12376e;
    display: block;
    margin: auto;
    transition: width 0.2s cubic-bezier(0.55, 0, 0.98, 0.54);
  }

  :hover::after {
    width: 100%;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        <SocialIcons>
          <li className="social-icon-item">
            <a href="/" className="social-icon-link">
              <SocialIcon className="fab fa-facebook-square" />
            </a>
          </li>
          <li className="social-icon-item">
            <a href="/" className="social-icon-link">
              <SocialIcon className="fab fa-linkedin" />
            </a>
          </li>
          <li className="social-icon-item">
            <a href="/" className="social-icon-link">
              <SocialIcon className="fab fa-twitter" />
            </a>
          </li>
          <li className="social-icon-item">
            <a href="/" className="social-icon-link">
              <SocialIcon className="fab fa-instagram social-icon" />
            </a>
          </li>
        </SocialIcons>
        <FirstNav>
          <FirstNavList>
            <li className="first-nav-item">
              <FirstNavLink href="/">
                <i className="fas fa-sign-in-alt" />
                Sign Up / Log In
              </FirstNavLink>
            </li>
            <li className="first-nav-item">
              <FirstNavLink href="/">
                <i className="fas fa-shopping-cart" />
                Cart(<span>2 Items</span>)
              </FirstNavLink>
            </li>
            <li className="first-nav-item">
              <FirstNavLink href="/">
                <i className="fas fa-truck" />
                Order Now
              </FirstNavLink>
            </li>
            <li className="first-nav-item">
              <FirstNavLink href="/">
                <i className="fas fa-heart" />
                Wish List
              </FirstNavLink>
            </li>
          </FirstNavList>
        </FirstNav>
      </Container>
    );
  }
}

export default Navbar;
