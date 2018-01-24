// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

type Props = {};
type State = {};

export default class Navigation extends Component<Props, State> {
  render() {
    return (
      <nav className="fixed fade-in">
        <table role="presentation">
          <tbody>
            <tr>
              <td>
                <Link to="/">
                  <img src={logo} className="logo" alt="logo" />
                </Link>
              </td>
              <td>
                <Link to="/feedback">
                  <span className="phase-tag prototype">PROTOTYPE</span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <ul>
          <li>Current Offender List</li>
        </ul>
        <ul>
          <li>
            <span className="far fa-user-o" /> John Smith
          </li>
          <li>
            <span className="far fa-user-o" /> John Jones
          </li>
          <li>
            <span className="far fa-user-o" /> Paul Whitley
          </li>
          <li>
            <span className="far fa-user-o" /> Chris Jones
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <Link to="/search">
              <span className="far fa-search" /> Search
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="far fa-clipboard" /> Cases
            </Link>
          </li>
          <li>
            <Link to="/sfpsr">
              <span className="far fa-file-text-o" /> Documents
            </Link>
          </li>
          <li>
            <span className="far fa-tags" /> Tags
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <span className="far fa-bell-o" /> Alerts &amp; notifications
          </li>
        </ul>
      </nav>
    );
  }
}
