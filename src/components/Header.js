// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

const Header = () => (
  <header>
    <span className="padding-left hamburger mobile-only">
      <span className="far fa-bars text-x-large white" />
    </span>
    <Link to="/">
      <img src={logo} className="logo omit-mobile" alt="logo" />
      <span className="logo-type text-x-large white">
        <span className="omit-mobile">HMPPS</span>
        <span className="padding-left text-light">
          <span className="omit-mobile padding-right">|</span>Probation Offender
          Management
        </span>
      </span>
    </Link>
  </header>
);

export default Header;
