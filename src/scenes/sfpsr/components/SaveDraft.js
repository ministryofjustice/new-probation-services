// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SfpsrContext from '../_shared/data/SfpsrContext';

type Props = {};

/**
 *
 */
export default class SaveDraft extends Component<Props> {
  render() {
    return (
      <SfpsrContext.Consumer>
        {context => {
          return (
            <div className="fade-in">
              <div className="primary-container">
                <div className="container-heading">
                  <h1>Draft report saved</h1>
                </div>
                <div className="container-content">
                  <p>
                    Your draft report has been saved and uploaded successfully
                  </p>
                </div>
              </div>
              <div className="primary-container">
                <div className="container-heading">
                  <h1>What to do next</h1>
                </div>
                <div className="container-content">
                  <p>
                    Review and print your 'Short Format Pre-sentence Report'
                  </p>
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
            </div>
          );
        }}
      </SfpsrContext.Consumer>
    );
  }
}
