import React, { Component } from 'react';

import SfpsrContext from '../data/SfpsrContext';
import type { Offender } from '../../_shared/model/Offender.type';

type Props = {
  history: Array<any>
};

export default class Start extends Component<Props> {
  /**
   * @consumer
   * @param props {Props} arbitrary inputs
   */
  constructor(props: Props) {
    super(props);
    (this: any).startClick = this.startClick.bind(this);
  }

  /**
   *
   * @param data
   */
  startClick(data: Offender) {
    this.props.history.push({
      pathname: '/sfpsr/offender-details',
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
            <div className="space-top fade-in wait">
              <h1 className="text-large">Short Format Pre-sentence Report</h1>

              <p>&nbsp;</p>

              <h2>Never lose your work again</h2>
              <p>This service saves your report as you write</p>

              <p>&nbsp;</p>

              <p>You can:</p>

              <ul>
                <li>save drafts or completed reports</li>
                <li>update the offender's name, address and other details</li>
                <li>access guidance to help you fill in the report</li>
              </ul>

              <p>&nbsp;</p>

              <button
                className="primary"
                onClick={() => this.startClick(context.offender)}>
                Start now
              </button>
            </div>
          );
        }}
      </SfpsrContext.Consumer>
    );
  }
}
