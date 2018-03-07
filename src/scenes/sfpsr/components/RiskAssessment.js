// @flow
import React, { Component } from 'react';

import SfpsrContext from '../data/SfpsrContext';
import type { Offender } from '../../_shared/model/Offender.type';
import SfpsrNavigation from './SfpsrNavigation';

type Props = {
  history: Array<any>
};

/**
 *
 */
export default class RiskAssessment extends Component<Props> {
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
      pathname: '/sfpsr/conclusion',
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
                    <h1>Risk assessment</h1>
                  </div>
                  <div className="container-content">
                    <div className="form-group">
                      <label htmlFor="reoffending">
                        Likelihood of reoffending
                      </label>
                      <textarea
                        name="reoffending"
                        className="form-control no-border"
                        placeholder="Start typing here..."
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="serious_harm">Risk of serious harm</label>
                      <textarea
                        name="serious_harm"
                        className="form-control no-border"
                        placeholder="Start typing here..."
                      />
                    </div>

                    <fieldset className="no-border">
                      <legend>Response to previous supervision</legend>

                      <div className="form-group">
                        <input type="radio" name="supervision" />
                        <label htmlFor="supervision">Good</label>
                      </div>

                      <div className="form-group">
                        <input type="radio" name="supervision" />
                        <label htmlFor="supervision">Satisfactory</label>
                      </div>

                      <div className="form-group">
                        <input type="radio" name="supervision" />
                        <label htmlFor="supervision">Poor</label>
                      </div>

                      <div className="form-group">
                        <input type="radio" name="supervision" />
                        <label htmlFor="supervision">Not applicable</label>
                      </div>
                    </fieldset>

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
