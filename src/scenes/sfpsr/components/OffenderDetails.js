// @flow
import React, { Component } from 'react';

import Utils from '../../../utils/Utils';

type Props = {
  history: Array<any>
};
type State = {};

/**
 *
 */
export default class OffenderDetails extends Component<Props, State> {
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
  continueClick() {
    this.props.history.push('/sfpsr/court-details');
  }

  /**
   *
   */
  render() {
    const offender = this.props.location.state.offender,
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

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
