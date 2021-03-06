// @flow
import React, { Component } from 'react';

import SfpsrContext from '../data/SfpsrContext';
import Utils from '../../../utils/Utils';
import type { Offender } from '../../_shared/model/Offender.type';

type Props = {
  history: Array<any>
};

/**
 *
 */
export default class OffenderDetails extends Component<Props> {
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
      pathname: '/sfpsr/court-details',
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
          const offender = context.offender,
            address = offender.ADDRESSES[0];

          return (
            <div className="space-top fade-in">
              <h1>Offender details</h1>
              <p>&nbsp;</p>

              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  defaultValue={offender.FIRST_NAME + ' ' + offender.SURNAME}
                />
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of birth</label>
                <input
                  type="text"
                  name="dob"
                  className="form-control"
                  defaultValue={Utils.pipeDate(offender.DATE_OF_BIRTH_DATE)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  defaultValue={
                    address.ADDRESS_NUMBER +
                    ' ' +
                    address.STREET_NAME +
                    '\n' +
                    address.TOWN_CITY +
                    '\n' +
                    address.COUNTY +
                    '\n' +
                    address.POSTCODE
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="telephone">Contact number</label>
                <input
                  type="text"
                  name="telephone"
                  className="form-control"
                  defaultValue={offender.MOBILE_NUMBER}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pnc">PNC ID</label>
                <input
                  type="text"
                  name="pnc"
                  className="form-control"
                  defaultValue={offender.PNC_NUMBER}
                />
              </div>

              <div className="form-group">
                <label htmlFor="crn">Delius CRN</label>
                <input
                  type="text"
                  name="crn"
                  className="form-control"
                  defaultValue={offender.CRN}
                />
              </div>

              <button
                className="primary"
                onClick={() => {
                  this.continueClick(offender);
                }}>
                Save &amp; continue
              </button>
            </div>
          );
        }}
      </SfpsrContext.Consumer>
    );
  }
}
