import React, { Component } from 'react';
import styled from 'styled-components';

const SecondNav = styled.nav`
  grid-column: 2 / 10;
  grid-row: 3 / 4;
  border-top: 0.1rem solid #12376e;
  border-bottom: 0.1rem solid #12376e;
`;

const Dropdown = styled.div`
  display: none;
`;

const SecondNavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  list-style: none;
`;

const SecondNavLink = styled.a`
  text-align: center;
  display: grid;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.4rem;
  color: #12376e;
  padding: 0.8rem 0;
  transition: all 0.5s;

  &::before,
  ::after {
    content: '';
    width: 0;
    height: 0.1rem;
    background-color: #12376e;
    display: block;
    transition: width 3s cubic-bezier(0.55, 0, 0.98, 0.54),
      background-color 0.5s;
  }

  &:hover {
    background-color: #12376e;
    color: #fff;
  }

  &::before,
  ::after {
    width: 100%;
    background-color: #fff;
  }
`;

const SecondNavItem = styled.li`
  :hover {
    background-color: #12376e;
    color: #fff;
  }

  &::before,
  ::after {
    width: 100%;
    background-color: #fff;
  }
`;

class NavbarTwo extends Component {
  render() {
    return (
      <SecondNav>
        <SecondNavList>
          <SecondNavItem>
            <SecondNavLink href="/">Furniiture</SecondNavLink>
            <Dropdown>
              <ul className="dropdown-first-list">
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Sofas
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Sectionals
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Daybeds & Chaises
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Consolas & Credenzas
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Chairs
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Benches & Ottomans
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Dressers & Chests
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Dining Tables
                  </a>
                </li>
              </ul>
              <ul className="dropdown-second-list">
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Lampert
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Baxter
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Channing
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Maxime
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Talitha
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Rider
                  </a>
                </li>
                <li className="dropdown-list-itme">
                  <a href="/" className="dropdown-list-link">
                    Goldfinger
                  </a>
                </li>
              </ul>
              <img
                src="/images/dropdown-image.jpg"
                alt="dropdown"
                className="dropdown-image"
              />
            </Dropdown>
          </SecondNavItem>
          <SecondNavItem>
            <SecondNavLink href="/">Rooms</SecondNavLink>
          </SecondNavItem>
          <SecondNavItem>
            <SecondNavLink href="/">Kitchen</SecondNavLink>
          </SecondNavItem>
          <SecondNavItem>
            <SecondNavLink href="/">Outdoor</SecondNavLink>
          </SecondNavItem>
          <SecondNavItem>
            <SecondNavLink href="/">Lighting</SecondNavLink>
          </SecondNavItem>
          <SecondNavItem>
            <SecondNavLink href="/">Bed & Bath</SecondNavLink>
          </SecondNavItem>
          <SecondNavItem>
            <SecondNavLink href="/">Window</SecondNavLink>
          </SecondNavItem>
        </SecondNavList>
      </SecondNav>
    );
  }
}

export default NavbarTwo;
