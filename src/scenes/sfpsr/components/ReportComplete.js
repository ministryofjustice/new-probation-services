// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SfpsrContext from '../data/SfpsrContext';

type Props = {};

/**
 *
 */
export default class ReportComplete extends Component<Props> {
  render() {
    return (
      <SfpsrContext.Consumer>
        {context => {
          return (
            <div className="fade-in">
              <div className="space-top panel header">
                <h1 className="text-large">Report saved</h1>
                <p className="text-large">
                  Your report has been saved and uploaded successfully
                </p>
              </div>
              <div className="space-top panel border">
                <h2 className="text-large">What to do next</h2>
                <p>Review and print your 'Short Format Pre-sentence Report'</p>
                <p>Update, delete or lock your report</p>
                Return to the{' '}
                <Link
                  to={{
                    pathname: '/offender-summary',
                    state: { offender: context.offender }
                  }}>
                  offender summary page
                </Link>
              </div>
            </div>
          );
        }}
      </SfpsrContext.Consumer>
    );
  }
}
