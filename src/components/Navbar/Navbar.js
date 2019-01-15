import React, { Component } from 'react';
import styled from 'styled-components';

class Navbar extends Component {
  render() {
    return (
      <Container>
        <SocialIcons>
          <li className="social-icon-item">
            <a href="/" className="social-icon-link">
              <SocialIcon>
                <i className="fab fa-facebook-square social-icon" />
              </SocialIcon>
            </a>
          </li>
          <li className="social-icon-item">
            <a href="/" className="social-icon-link">
              <SocialIcon>
                <i className="fab fa-linkedin social-icon" />
              </SocialIcon>
            </a>
          </li>
          <li className="social-icon-item">
            <a href="/" className="social-icon-link">
              <SocialIcon>
                <i className="fab fa-twitter social-icon" />
              </SocialIcon>
            </a>
          </li>
          <li className="social-icon-item">
            <a href="/" className="social-icon-link">
              <SocialIcon>
                <i className="fab fa-instagram social-icon" />
              </SocialIcon>
            </a>
          </li>
        </SocialIcons>
        <FirstNav>
          <ul className="first-nav-list">
            <li className="first-nav-item">
              <a href="/" className="first-nav-link">
                <i className="fas fa-sign-in-alt" />
                Sign Up / Log In
              </a>
            </li>
            <li className="first-nav-item">
              <a href="/" className="first-nav-link">
                <i className="fas fa-shopping-cart" />
                Cart(<span>2 Items</span>)
              </a>
            </li>
            <li className="first-nav-item">
              <a href="/" className="first-nav-link">
                <i className="fas fa-truck" />
                Order Now
              </a>
            </li>
            <li className="first-nav-item">
              <a href="/" className="first-nav-link">
                <i className="fas fa-heart" />
                Wish List
              </a>
            </li>
          </ul>
        </FirstNav>
      </Container>
    );
  }
}

export default Navbar;

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

  &:hover {
    color: #34598f;
    transform: rotateZ('360deg');
  }
`;

const FirstNav = styled.nav`
  grid-column: 6 / 10;
  grid-row: 1/2;
`;
