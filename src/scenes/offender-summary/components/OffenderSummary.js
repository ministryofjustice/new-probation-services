// @flow
import React, { Component } from 'react';

import Utils from '../../../utils/Utils';

import OffenderSummaryDetails from './OffenderSummaryDetails';
import OffenderSummaryEvents from './OffenderSummaryEvents';
import OffenderSummaryAssessments from './OffenderSummaryAssessments';
import OffenderSummaryContact from './OffenderSummaryContact';

type Props = {
  location: Object
};
type State = {
  currentSection: string
};

export default class OffenderSummary extends Component<Props, State> {
  /**
   * @constructor
   * @param props {Props} arbitrary inputs
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      currentSection: 'details'
    };
  }

  /**
   *
   * @param nextProps {Props} arbitrary inputs
   */
  componentWillReceiveProps(nextProps: Props) {
    if (
      nextProps.location.state.offender.OFFENDER_ID !==
      this.props.location.state.offender.OFFENDER_ID
    ) {
      this.setState({ currentSection: 'details' });
      window.scrollTo(0, 0);
    }
  }

  /**
   *
   */
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  /**
   *
   * @returns {*}
   */
  render() {
    const offender = this.props.location.state.offender,
      restricted = offender.CURRENT_RESTRICTION || offender.CURRENT_EXCLUSION;

    return (
      <div className="space-top fade-in">
        <div className="panel header align-left">
          <table role="presentation">
            <tbody>
              <tr>
                <td>
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
                <td className="padding">
                  <h1 className="font-large">
                    {restricted
                      ? 'Restricted access'
                      : offender.SURNAME +
                        ', ' +
                        offender.FIRST_NAME +
                        ' - ' +
                        Utils.pipeDate(offender.DATE_OF_BIRTH_DATE)}
                  </h1>

                  <p className="margin-top no-margin-bottom">
                    <span className="bold">CRN: {offender.CRN}</span>
                    {offender.CURRENT_HIGHEST_RISK_COLOUR !== null && (
                      <span id="risk">
                        {' '}
                        | Risk{' '}
                        <span
                          className={
                            'risk-icon risk-' +
                            offender.CURRENT_HIGHEST_RISK_COLOUR.toLowerCase()
                          }
                        />
                      </span>
                    )}
                    {!restricted && (
                      <span>
                        {offender.CURRENT_DISPOSAL > 0 && (
                          <span> | Current offender</span>
                        )}
                        {' | ' +
                          Utils.pipeGender(offender.GENDER_ID) +
                          ', ' +
                          Utils.pipeAge(offender.DATE_OF_BIRTH_DATE)}
                      </span>
                    )}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
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

        <p>&nbsp;</p>

        <div className="grid-row nested margin-top">
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
        </div>

        <p>&nbsp;</p>

        {this.state.currentSection === 'details' && (
          <div className="fade-in">
            <OffenderSummaryDetails
              restricted={restricted}
              offender={offender}
            />
          </div>
        )}

        {this.state.currentSection === 'events' && (
          <div className="fade-in">
            <OffenderSummaryEvents
              restricted={restricted}
              offender={offender}
            />
          </div>
        )}

        {this.state.currentSection === 'assessments' && (
          <div className="fade-in">
            <OffenderSummaryAssessments
              restricted={restricted}
              offender={offender}
            />
          </div>
        )}

        {this.state.currentSection === 'contact-list' && (
          <div className="fade-in">
            <OffenderSummaryContact
              restricted={restricted}
              offender={offender}
            />
          </div>
        )}

        <p>&nbsp;</p>
      </div>
    );
  }
}
