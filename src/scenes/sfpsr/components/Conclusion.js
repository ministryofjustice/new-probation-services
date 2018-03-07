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
export default class Conclusion extends Component<Props> {
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
      pathname: '/sfpsr/sign-your-report',
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
          const offender = context.offender;

          return (
            <div className="grid-row">
              <div className="grid-col sub-nav omit-tablet">
                <SfpsrNavigation offender={context.offender} />
              </div>
              <div className="grid-col">
                <div className="primary-container">
                  <div className="container-heading">
                    <h1>Conclusion</h1>
                  </div>
                  <div className="container-content">
                    <div className="form-group">
                      <label htmlFor="sentence">
                        Enter a proposed sentence
                      </label>
                      <textarea
                        name="sentence"
                        className="form-control no-border"
                        placeholder="Start typing here..."
                      />
                    </div>

                    <button
                      className="primary"
                      onClick={() => this.continueClick(offender)}>
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
