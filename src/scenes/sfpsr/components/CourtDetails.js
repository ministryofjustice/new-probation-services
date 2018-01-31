// @flow
import React, { Component } from 'react';

type Props = {
  history: Array<any>,
  location: Object
};
type State = {};

/**
 *
 */
export default class CourtDetails extends Component<Props, State> {
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
   */
  continueClick() {
    this.props.history.push({
      pathname: '/sfpsr/sources-of-information',
      state: { offender: this.props.location.state.offender }
    });
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Sentencing court details</h1>
        <p>&nbsp;</p>

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

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
