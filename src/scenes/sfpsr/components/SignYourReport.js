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
export default class SignYourReport extends Component<Props, State> {
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
    this.props.history.push({
      pathname: '/sfpsr/report-complete',
      state: { offender: this.props.location.state.offender }
    });
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Sign your report</h1>
        <p>&nbsp;</p>

        <div className="form-group">
          <label htmlFor="author">Report author</label>
          <input type="text" name="author" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="office">Office</label>
          <input type="text" name="office" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Court office phone number</label>
          <input type="text" name="phone" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="signature">Counter signature (if applicable)</label>
          <input type="text" name="signature" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="start">Start date</label>
          <input
            type="text"
            readOnly="true"
            name="start"
            className="form-control read-only"
            defaultValue={new Date().toLocaleDateString('en-GB')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="completion">Completion date</label>
          <input
            type="text"
            name="completion"
            className="form-control"
            defaultValue={new Date().toLocaleDateString('en-GB')}
          />
        </div>

        <button className="primary" onClick={this.continueClick}>
          Submit &amp; view your reoport
        </button>
      </div>
    );
  }
}
