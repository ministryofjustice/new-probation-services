// @flow
import React, { Component } from 'react';

import SfpsrContext from '../_shared/data/SfpsrContext';
import type { Offender } from '../../_shared/model/Offender.type';
import SfpsrNavigation from '../_shared/components/SfpsrNavigation';

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
            <div className="grid-row">
              <div className="grid-col sub-nav omit-tablet">
                <SfpsrNavigation offender={context.offender} />
              </div>
              <div className="grid-col">
                <div className="primary-container">
                  <div className="container-heading">
                    <h1>Offence details</h1>
                  </div>
                  <div className="container-content">
                    <div className="form-group">
                      <label htmlFor="main_offence">
                        Main offence and dates
                      </label>
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
                      <label htmlFor="summary">
                        Brief summary of the offence
                      </label>
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
                </div>
              </div>
            </div>
          );
        }}
      </SfpsrContext.Consumer>
    );
  }
}
