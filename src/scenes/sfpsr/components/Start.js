import React, { Component } from 'react';

import SfpsrContext from '../data/SfpsrContext';
import type { Offender } from '../../_shared/model/Offender.type';
import SfpsrNavigation from './SfpsrNavigation';

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
            <div className="grid-row">
              <div className="grid-col sub-nav omit-tablet fade-in wait">
                <SfpsrNavigation offender={context.offender} />
              </div>
              <div className="grid-col">
                <div className="primary-container fade-in wait">
                  <div className="container-heading">
                    <h1>Short Format Pre-sentence Report</h1>
                  </div>
                  <div className="container-content">
                    <h2>Never lose your work again</h2>
                    <p>This service saves your report as you write</p>

                    <p>&nbsp;</p>

                    <p>You can:</p>

                    <ul>
                      <li>save drafts or completed reports</li>
                      <li>
                        update the offender's name, address and other details
                      </li>
                      <li>access guidance to help you fill in the report</li>
                    </ul>

                    <button
                      className="primary margin-top"
                      onClick={() => this.startClick(context.offender)}>
                      Start now
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
