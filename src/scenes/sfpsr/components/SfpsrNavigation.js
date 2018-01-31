// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

export default class SfpsrNavigation extends Component<Props> {
  render() {
    const offender = this.props.location.state.offender;

    return (
      <div className="grid-col sub-nav omit-tablet">
        <nav className="space-top">
          <table role="presentation">
            <tbody>
              <tr>
                <td>
                  <img
                    className="photo-holder align-left small"
                    alt={
                      'Photograph of ' +
                      offender.SURNAME +
                      ', ' +
                      offender.FIRST_NAME
                    }
                    src={
                      offender.GENDER_ID === 545
                        ? '/images/placeholder_m.jpg'
                        : '/images/placeholder_f.jpg'
                    }
                  />
                </td>
                <td>
                  <p className="no-margin-bottom">
                    {offender.SURNAME}, {offender.FIRST_NAME}
                    <br />
                    <span className="text-bold">CRN: {offender.CRN}</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <ul>
            <NavLink
              to={{
                pathname: '/sfpsr/save-draft',
                state: { offender: offender }
              }}>
              <li>
                <span className="far fa-files-o" /> Save a draft of this report
              </li>
            </NavLink>
          </ul>
          <hr />
          <ul>
            <NavLink
              to={{
                pathname: '/sfpsr/offender-details',
                state: { offender: offender }
              }}>
              <li>Offender details</li>
            </NavLink>
            <NavLink
              to={{
                pathname: '/sfpsr/court-details',
                state: { offender: offender }
              }}>
              <li>Sentencing court details</li>
            </NavLink>
            <NavLink
              to={{
                pathname: '/sfpsr/sources-of-information',
                state: { offender: offender }
              }}>
              <li>Sources of information</li>
            </NavLink>
            <NavLink
              to={{
                pathname: '/sfpsr/offence-details',
                state: { offender: offender }
              }}>
              <li>Offence details</li>
            </NavLink>
            <NavLink
              to={{
                pathname: '/sfpsr/offence-analysis',
                state: { offender: offender }
              }}>
              <li>Offence analysis</li>
            </NavLink>
            <NavLink
              to={{
                pathname: '/sfpsr/offender-assessment',
                state: { offender: offender }
              }}>
              <li>Offender assessment</li>
            </NavLink>
            <NavLink
              to={{
                pathname: '/sfpsr/risk-assessment',
                state: { offender: offender }
              }}>
              <li>Risk assessment</li>
            </NavLink>
            <NavLink
              to={{
                pathname: '/sfpsr/conclusion',
                state: { offender: offender }
              }}>
              <li>Conclusion</li>
            </NavLink>
            <NavLink
              to={{
                pathname: '/sfpsr/check-your-report',
                state: { offender: offender }
              }}>
              <li>Check your report</li>
            </NavLink>
            <NavLink
              to={{
                pathname: '/sfpsr/sign-your-report',
                state: { offender: offender }
              }}>
              <li>Sign your report</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}
