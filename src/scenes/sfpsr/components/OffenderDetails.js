// @flow
import React, { Component } from 'react';

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
    return (
      <div className="space-top fade-in">
        <h1>Offender details</h1>
        <p>&nbsp;</p>

        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of birth</label>
          <input type="text" name="dob" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea name="address" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="telephone">Contact number</label>
          <input type="text" name="telephone" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="pnc">PNC ID</label>
          <input type="text" name="pnc" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="crn">Delius CRN</label>
          <input type="text" name="crn" className="form-control" />
        </div>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
