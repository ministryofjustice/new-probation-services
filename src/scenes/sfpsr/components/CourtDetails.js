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
export default class CourtDetails extends Component<Props> {
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
   * @param data {Offender} Offender data
   */
  continueClick(data: Offender) {
    this.props.history.push({
      pathname: '/sfpsr/sources-of-information',
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
                    <h1>Sentencing court details</h1>
                  </div>
                  <div className="container-content">
                    <div className="form-group">
                      <label htmlFor="court">Court</label>
                      <input
                        type="text"
                        name="court"
                        className="form-control"
                        defaultValue="Manchester and Salford Magistrates Court"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="justiceArea">Local justice area</label>
                      <input
                        type="text"
                        name="justiceArea"
                        className="form-control"
                        defaultValue="Greater Manchester"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="date">Date of hearing</label>
                      <p className="form-hint">
                        For example: 28/06/{new Date().getFullYear()}
                      </p>
                      <input
                        type="text"
                        name="date"
                        className="form-control"
                        defaultValue={new Date().toLocaleDateString('en-GB')}
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
