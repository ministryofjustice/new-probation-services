// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

export default class SfpsrNavigation extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

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
            <NavLink to="/sfpsr/save-draft">
              <li>
                <span className="far fa-files-o" /> Save a draft of this report
              </li>
            </NavLink>
          </ul>
          <hr />
          <ul>
            <NavLink to="/sfpsr/offender-details">
              <li>Offender details</li>
            </NavLink>
            <NavLink to="/sfpsr/court-details">
              <li>Sentencing court details</li>
            </NavLink>
            <NavLink to="/sfpsr/sources-of-information">
              <li>Sources of information</li>
            </NavLink>
            <NavLink to="/sfpsr/offence-details">
              <li>Offence details</li>
            </NavLink>
            <NavLink to="/sfpsr/offence-analysis">
              <li>Offence analysis</li>
            </NavLink>
            <NavLink to="/sfpsr/offender-assessment">
              <li>Offender assessment</li>
            </NavLink>
            <NavLink to="/sfpsr/risk-assessment">
              <li>Risk assessment</li>
            </NavLink>
            <NavLink to="/sfpsr/conclusion">
              <li>Conclusion</li>
            </NavLink>
            <NavLink to="/sfpsr/check-your-report">
              <li>Check your report</li>
            </NavLink>
            <NavLink to="/sfpsr/sign-your-report">
              <li>Sign your report</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}
