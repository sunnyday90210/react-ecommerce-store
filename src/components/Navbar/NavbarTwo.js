import React, { Component } from 'react';
import styled from 'styled-components';

const SecondNav = styled.nav`
  grid-column: 2 / 10;
  grid-row: 3 / 4;
  border-top: 0.1rem solid #12376e;
  border-bottom: 0.1rem solid #12376e;
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
  transition: all 0.5s 0.3s;

  &::before,
  ::after {
    content: '';
    width: 0%;
    height: 0.1rem;
    background-color: #12376e;
    display: block;
    transition: width 0.3s cubic-bezier(0.55, 0, 0.98, 0.54),
      background-color 0.5s 0.3s;
  }

  &::after {
    justify-self: end;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  width: 70rem;
  background-color: #fffeee;
  padding: 1.6rem;
  display: grid;
  grid-template-columns: repeat(7, 10rem);
  visibility: hidden;
  opacity: 0;
  transition: all 1s;
`;

const SecondNavItem = styled.li`
  :hover ${SecondNavLink} {
    background-color: #12376e;
    color: #fff;
  }

  &:hover ${SecondNavLink}::before, :hover ${SecondNavLink}::after {
    width: 100%;
    background-color: #fff;
  }

  &:first-child {
    position: relative;
  }

  &:first-child:hover ${Dropdown} {
    visibility: visible;
    opacity: 1;
  }
`;

const DropDownFirstList = styled.ul`
  grid-column: 1 / 3;
`;

const DropDownSecondList = styled.ul`
  grid-column: 3 / 5;
`;

const DropDownImage = styled.img`
  grid-column: 5 / -1;
  width: 100%;
`;

const DropDownListItem = styled.li`
  list-style: none;

  & a {
    font-size: 1.3rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #34598f;
    margin: 0 0 1rem 1.6rem;
    display: block;
  }

  &:hover a {
    color: #458a9f;
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
              <DropDownFirstList>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Sofas
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Sectionals
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Daybeds & Chaises
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Consolas & Credenzas
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Chairs
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Benches & Ottomans
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Dressers & Chests
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Dining Tables
                  </a>
                </DropDownListItem>
              </DropDownFirstList>
              <DropDownSecondList>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Lampert
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Baxter
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Channing
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Maxime
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Talitha
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Rider
                  </a>
                </DropDownListItem>
                <DropDownListItem>
                  <a href="/" className="dropdown-list-link">
                    Goldfinger
                  </a>
                </DropDownListItem>
              </DropDownSecondList>
              <DropDownImage
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
