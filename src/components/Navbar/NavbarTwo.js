import React, { Component } from 'react';
// import styled from 'styled-components';

class NavbarTwo extends Component {
  render() {
    return (
      <nav className="second-nav">
        <ul className="second-nav-list">
          <li className="second-nav-item">
            <a href="/" className="second-nav-link">
              Furniiture
            </a>
            <div className="dropdown">
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
            </div>
          </li>
          <li className="second-nav-item">
            <a href="/" className="second-nav-link">
              Rooms
            </a>
          </li>
          <li className="second-nav-item">
            <a href="/" className="second-nav-link">
              Kitchen
            </a>
          </li>
          <li className="second-nav-item">
            <a href="/" className="second-nav-link">
              Outdoor
            </a>
          </li>
          <li className="second-nav-item">
            <a href="/" className="second-nav-link">
              Lighting
            </a>
          </li>
          <li className="second-nav-item">
            <a href="/" className="second-nav-link">
              Bed & Bath
            </a>
          </li>
          <li className="second-nav-item">
            <a href="/" className="second-nav-link">
              Window
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavbarTwo;
