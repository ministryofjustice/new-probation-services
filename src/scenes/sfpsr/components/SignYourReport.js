// @flow
import React, { Component } from 'react';

import SfpsrContext from '../data/SfpsrContext';
import type { Offender } from '../../_shared/model/Offender.type';

type Props = {
  history: Array<any>
};

/**
 *
 */
export default class SignYourReport extends Component<Props> {
  /**
   *
   * @param props {Props} arbitrary inputs
   */
  constructor(props: Props) {
    super(props);

    (this: any).continueClick = this.continueClick.bind(this);
  }

  /**
   *
   * @param data {Offender} Offender data
   */
  continueClick(data: Offender) {
    this.props.history.push({
      pathname: '/sfpsr/report-complete',
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
            <div className="space-top fade-in">
              <h1>Sign your report</h1>
              <p>&nbsp;</p>

              <div className="form-group">
                <label htmlFor="author">Report author</label>
                <input type="text" name="author" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="office">Office</label>
                <input type="text" name="office" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Court office phone number</label>
                <input type="text" name="phone" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="signature">
                  Counter signature (if applicable)
                </label>
                <input type="text" name="signature" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="start">Start date</label>
                <input
                  type="text"
                  readOnly="true"
                  name="start"
                  className="form-control read-only"
                  defaultValue={new Date().toLocaleDateString('en-GB')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="completion">Completion date</label>
                <input
                  type="text"
                  name="completion"
                  className="form-control"
                  defaultValue={new Date().toLocaleDateString('en-GB')}
                />
              </div>

              <button
                className="primary"
                onClick={() => this.continueClick(context.offender)}>
                Submit &amp; view your reoport
              </button>
            </div>
          );
        }}
      </SfpsrContext.Consumer>
    );
  }
}
