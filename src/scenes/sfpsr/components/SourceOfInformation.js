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
export default class SourceOfInformation extends Component<Props> {
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
      pathname: '/sfpsr/offence-details',
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
                    <h1>Sources of information</h1>
                  </div>
                  <div className="container-content">
                    <div className="form-group">
                      <input type="checkbox" id="info_interview" />
                      <label htmlFor="info_interview">Interview</label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="info_service" />
                      <label htmlFor="info_service">Service records</label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="info_cps" />
                      <label htmlFor="info_cps">CPS summary</label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="info_oasys" />
                      <label htmlFor="info_oasys">
                        Previous OASys assessments
                      </label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="info_convictions" />
                      <label htmlFor="info_convictions">
                        Previous convictions
                      </label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="info_victim" />
                      <label htmlFor="info_victim">Victim statement</label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="info_child_services" />
                      <label htmlFor="info_child_services">
                        Children services checks
                      </label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="info_police" />
                      <label htmlFor="info_police">Police information</label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="info_sentencing" />
                      <label htmlFor="info_sentencing">
                        Sentencing guidelines
                      </label>
                    </div>

                    <div className="form-group">
                      <input type="checkbox" id="info_other" />
                      <label htmlFor="info_other">
                        Other (please specify below)
                      </label>
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
