// @flow
import React, { Component } from 'react';

import Utils from '../../../utils/Utils';

import OffenderSummaryDetails from './OffenderSummaryDetails';
import OffenderSummaryEvents from './OffenderSummaryEvents';
import OffenderSummaryAssessments from './OffenderSummaryAssessments';
import OffenderSummaryContact from './OffenderSummaryContact';
import type { Offender } from '../../_shared/model/Offender.type';

type Props = {
  location: Object,
  history: any
};
type State = {
  currentSection: string,
  offender: Offender
};

export default class OffenderSummary extends Component<Props, State> {
  /**
   * @constructor
   * @param props {Props} arbitrary inputs
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      currentSection: 'events',
      offender: this.props.location.state.offender
    };

    console.info(this.state.offender);

    (this: any).handleViewClick = this.handleViewClick.bind(this);
  }

  /**
   *
   * @param nextProps {Props} arbitrary inputs
   * @param prevState {State} previous state
   */
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    window.scrollTo(0, 0);
    return nextProps.location.state.offender.OFFENDER_ID ===
      prevState.offender.OFFENDER_ID
      ? null
      : {
          currentSection: 'events',
          offender: nextProps.location.state.offender
        };
  }

  /**
   *
   * @param event
   */
  handleViewClick(event: any) {
    this.props.history.push({
      pathname: '/sfpsr',
      state: { offender: this.props.location.state.offender }
    });
  }

  /**
   *
   * @returns {*}
   */
  render() {
    const offender = this.props.location.state.offender,
      restricted = offender.CURRENT_RESTRICTION || offender.CURRENT_EXCLUSION;

    return (
      <div className="fade-in grid-row">
        <div className="grid-col primary-content">
          {offender.CURRENT_REMAND_STATUS === 'Bail - Conditional' && (
            <div className="warning-container">
              <div className="container-content">
                <span>
                  <span className="far fa-exclamation-triangle pad-right" />Breach
                  of conditions of bail
                </span>
              </div>
            </div>
          )}

          <div className="primary-container">
            <div className="container-heading">
              <h1>Offender details</h1>
            </div>
            <div className="container-content">
              <div className="grid-row nested dashed">
                <div className="grid-col">
                  <table role="presentation" className="full-width">
                    <tbody>
                      <tr>
                        <td width="115">
                          <div className="photo-holder">
                            <img
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
                          </div>
                        </td>
                        <td className="padding-left">
                          <p className="no-margin-top">
                            CRN<br />
                            <span className="text-bold">{offender.CRN}</span>
                          </p>
                          <p>
                            Full name<br />
                            <span className="text-bold">
                              {restricted
                                ? 'Restricted access'
                                : offender.SURNAME + ', ' + offender.FIRST_NAME}
                            </span>
                          </p>

                          {restricted !== 1 && (
                            <div>
                              <p>
                                Date of birth<br />
                                <span className="text-bold">
                                  {Utils.pipeDate(offender.DATE_OF_BIRTH_DATE)}
                                </span>
                              </p>
                              {offender.CURRENT_REMAND_STATUS && (
                                <p>
                                  Remand status<br />
                                  <span className="text-bold">
                                    {offender.CURRENT_REMAND_STATUS}
                                  </span>
                                </p>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid-col">
                  {restricted !== 1 && (
                    <div>
                      <p className="no-margin-top">
                        Offender manager<br />
                        <span className="text-bold">Not allocated</span>
                      </p>
                      <p>
                        LDU and team<br />
                        <span className="text-bold">
                          Unallocated team (N07 Division)
                        </span>
                      </p>
                      <p>
                        Tier<br />
                        <span className="text-bold">
                          {offender.CURRENT_TIER}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="grid-col">
                  <h4>Risk profile</h4>

                  <div className="margin-top">
                    <div className="center">
                      <img
                        alt="risk"
                        src={
                          offender.CURRENT_HIGHEST_RISK_COLOUR
                            ? '/images/risk_g.png'
                            : '/images/risk_e.png'
                        }
                      />
                    </div>

                    {offender.CURRENT_HIGHEST_RISK_COLOUR && (
                      <p>
                        Safeguarding<br />
                        Public protection<br />
                        RoSH
                      </p>
                    )}

                    {!offender.CURRENT_HIGHEST_RISK_COLOUR && (
                      <p className="text-grey">No data</p>
                    )}
                  </div>
                </div>
              </div>

              {restricted === 1 && (
                <div>
                  <p>
                    {offender.CURRENT_RESTRICTION
                      ? offender.RESTRICTION_MESSAGE
                      : offender.EXCLUSION_MESSAGE}
                  </p>
                </div>
              )}
            </div>
          </div>

          {this.state.currentSection === 'events' && (
            <div className="fade-in margin-top">
              <OffenderSummaryEvents
                restricted={restricted}
                offender={offender}
                viewClick={this.handleViewClick}
              />
            </div>
          )}

          {this.state.currentSection === 'assessments' && (
            <div className="fade-in margin-top">
              <OffenderSummaryAssessments
                restricted={restricted}
                offender={offender}
              />
            </div>
          )}

          {this.state.currentSection === 'contact-list' && (
            <div className="fade-in margin-top">
              <OffenderSummaryContact
                restricted={restricted}
                offender={offender}
              />
            </div>
          )}

          {this.state.currentSection === 'details' && (
            <div className="fade-in margin-top">
              <OffenderSummaryDetails
                restricted={restricted}
                offender={offender}
              />
            </div>
          )}

          <div className="grid-row nested margin-top large">
            <div className="grid-col center">
              <a
                className={
                  this.state.currentSection === 'events'
                    ? 'active-nav'
                    : 'clickable'
                }
                onClick={() => {
                  this.setState({ currentSection: 'events' });
                }}>
                Events
              </a>
            </div>
            <div className="grid-col center">
              <a
                className={
                  this.state.currentSection === 'assessments'
                    ? 'active-nav'
                    : 'clickable'
                }
                onClick={() => {
                  this.setState({ currentSection: 'assessments' });
                }}>
                Assessments
              </a>
            </div>
            <div className="grid-col center">
              <a
                className={
                  this.state.currentSection === 'contact-list'
                    ? 'active-nav'
                    : 'clickable'
                }
                onClick={() => {
                  this.setState({ currentSection: 'contact-list' });
                }}>
                Contact list
              </a>
            </div>
            <div className="grid-col center">
              <a
                className={
                  this.state.currentSection === 'details'
                    ? 'active-nav'
                    : 'clickable'
                }
                onClick={() => {
                  this.setState({ currentSection: 'details' });
                }}>
                Offender details
              </a>
            </div>
          </div>

          <p>&nbsp;</p>
        </div>
        <div className="grid-col tertiary-content omit-tablet">
          <div className="tertiary-container">
            <div className="container-heading">
              <h4>Summary</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="tertiary-container">
            <div className="container-heading">
              <h4>Notes</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="tertiary-container">
            <div className="container-heading">
              <h4>Recent documents</h4>

              <div className="secondary-container light margin-top">
                <p>
                  <span className="far fa-file-pdf-o pad-right" />Parole report
                </p>
                <p>
                  <span className="far fa-file-pdf-o pad-right" />Short format
                  pre-sentence report
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
