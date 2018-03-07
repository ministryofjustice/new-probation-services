// @flow
import React, { Component } from 'react';

import SfpsrContext from '../data/SfpsrContext';
import SfpsrNavigation from './SfpsrNavigation';

type Props = {
  history: Array<any>
};

/**
 *
 */
export default class OffenceAnalysis extends Component<Props> {
  /**
   * @constructor
   * @param props {Props} arbitrary inputs
   */
  constructor(props: Props) {
    super(props);

    (this: any).continueClick = this.continueClick.bind(this);
  }

  /**
   *
   */
  continueClick(data: any) {
    this.props.history.push({
      pathname: '/sfpsr/offender-assessment',
      state: { offender: data }
    });
  }

  /**
   *
   */
  render() {
    return (
      <SfpsrContext.Consumer>
        {context => {
          return (
            <div className="grid-row">
              <div className="grid-col sub-nav omit-tablet">
                <SfpsrNavigation offender={context.offender} />
              </div>
              <div className="grid-col">
                <div className="primary-container">
                  <div className="container-heading">
                    <h1>Offence analysis</h1>
                  </div>
                  <div className="container-content">
                    <div className="form-group">
                      <label htmlFor="analysis">Offence analysis</label>
                      <textarea
                        name="analysis"
                        className="form-control no-border"
                        placeholder="Start typing here..."
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="analysis">
                        Patterns of offending behaviour (if applicable)
                      </label>
                      <p className="form-hint">
                        Detail any gaps in offending and relapse, look for
                        triggers that initiate the behaviours
                      </p>
                      <textarea
                        name="analysis"
                        className="form-control no-border"
                        placeholder="Start typing here..."
                      />
                    </div>

                    <button
                      className="primary"
                      onClick={() => this.continueClick(context.offender)}>
                      Save &amp; continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </SfpsrContext.Consumer>
    );
  }
}
