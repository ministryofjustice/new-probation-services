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
      currentSection: 'details',
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
          currentSection: 'details',
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
      <div className="space-top fade-in">
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
              <td className="padding-left">
                <h1 className="font-large no-margin-top no-margin-bottom">
                  {restricted
                    ? 'Restricted access'
                    : offender.SURNAME + ', ' + offender.FIRST_NAME}
                </h1>

                <p className="no-margin-top no-margin-bottom">
                  CRN:<br />
                  <span className="text-bold">{offender.CRN}</span>
                </p>
                {restricted !== 1 && (
                  <p className="margin-top no-margin-bottom">
                    Date of birth:<br />
                    <span className="text-bold">
                      {Utils.pipeDate(offender.DATE_OF_BIRTH_DATE)}
                    </span>
                  </p>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        {restricted === 1 && (
          <div>
            <p>
              {offender.CURRENT_RESTRICTION
                ? offender.RESTRICTION_MESSAGE
                : offender.EXCLUSION_MESSAGE}
            </p>
          </div>
        )}

        {restricted !== 1 && (
          <table
            role="presentation"
            className="full-width margin-top border-bottom">
            <tbody>
              <tr>
                <td className="text-bold">Offender manager:</td>
                <td colSpan="2">Not allocated</td>
              </tr>
              <tr>
                <td className="text-bold">LDU and team:</td>
                <td>Unallocated team (N07 Division)</td>
                <td className="align-right">
                  <button className="tiny">Transfer</button>
                </td>
              </tr>
              <tr>
                <td className="text-bold">Remand status:</td>
                <td colSpan="2">{offender.CURRENT_REMAND_STATUS}</td>
              </tr>
              <tr>
                <td className="text-bold">Tier:</td>
                <td colSpan="2">{offender.CURRENT_TIER}</td>
              </tr>
            </tbody>
          </table>
        )}

        <div className="grid-row nested margin-top large">
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
              viewClick={this.handleViewClick}
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
