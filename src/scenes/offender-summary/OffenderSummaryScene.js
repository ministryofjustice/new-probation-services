// @flow
import React, { Component } from 'react';

import RecentDocuments from './components/RecentDocuments';
import OffenderSummaryDetails from './components/OffenderSummaryDetails';
import OffenderSummaryContact from './components/OffenderSummaryContact';
import OffenderManagement from './components/OffenderManagement';
import OffenderNotes from './components/OffenderNotes';

import OffenderSummaryContext from './data/OffenderSummaryContext';

import type { Offender } from '../_shared/model/Offender.type';
import OffenderInformation from './components/OffenderInformation';

type Props = {
  location: Object,
  history: any
};
type State = {
  currentSection: string,
  offender: Offender
};

export default class OffenderSummaryScene extends Component<Props, State> {
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

    (this: any).handleViewClick = this.handleViewClick.bind(this);
  }

  /**
   *
   * @param nextProps {Props} arbitrary inputs
   * @param prevState {State} previous state
   */
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    window.scrollTo(0, 0);

    const offender = nextProps.location.state.offender;
    document.title =
      'Offender summary: ' +
      offender.SURNAME +
      ', ' +
      offender.FIRST_NAME +
      ' - HMPPS Probation Offender Management';

    return nextProps.location.state.offender.OFFENDER_ID ===
      prevState.offender.OFFENDER_ID
      ? null
      : {
          currentSection: 'events',
          offender: offender
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
    return (
      <OffenderSummaryContext.Provider value={this.state}>
        <div className="fade-in grid-row">
          <div className="grid-col primary-content">
            <OffenderInformation />
            <RecentDocuments reportClick={this.handleViewClick} />
            <OffenderSummaryDetails />
            <OffenderSummaryContact />
            <OffenderManagement />
            <OffenderNotes />
            <div className="margin-bottom" />
          </div>
        </div>
      </OffenderSummaryContext.Provider>
    );
  }
}
