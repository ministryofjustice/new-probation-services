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
export default class OffenderAssessment extends Component<Props> {
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
   */
  continueClick(data: Offender) {
    this.props.history.push({
      pathname: '/sfpsr/risk-assessment',
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
                    <h1>Offender assessment</h1>
                  </div>
                  <div className="container-content">
                    <p>
                      Select the underlying issues that are relevant as
                      motivators or drivers for the main offence
                    </p>

                    <p>&nbsp;</p>

                    <div className="form-group">
                      <input type="checkbox" id="issue_accommodation" />
                      <label htmlFor="issue_accommodation">Accommodation</label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="issue_employment" />
                      <label htmlFor="issue_employment">
                        Employment, training and education
                      </label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="issue_finance" />
                      <label htmlFor="issue_finance">Finance</label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="issue_relationships" />
                      <label htmlFor="issue_relationships">Relationships</label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="issue_drugs" />
                      <label htmlFor="issue_drugs">Substance misuse</label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="issue_health" />
                      <label htmlFor="issue_health">
                        Physical &amp; mental health
                      </label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="issue_behaviour" />
                      <label htmlFor="issue_behaviour">
                        Thinking &amp; behaviour
                      </label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="issue_other" />
                      <label htmlFor="issue_other">Other</label>
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
