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
export default class OffenceDetails extends Component<Props> {
  /**
   *
   * @param props
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
      pathname: '/sfpsr/offence-analysis',
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
              <h1>Offence details</h1>
              <p>&nbsp;</p>

              <div className="form-group">
                <label htmlFor="main_offence">Main offence and dates</label>
                <textarea
                  name="main_offence"
                  className="form-control no-border"
                  placeholder="Start typing here..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="other_offence">
                  Other offences and dates (if applicable)
                </label>
                <textarea
                  name="other_offence"
                  className="form-control no-border"
                  placeholder="Start typing here..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="summary">Brief summary of the offence</label>
                <textarea
                  name="summary"
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
          );
        }}
      </SfpsrContext.Consumer>
    );
  }
}
