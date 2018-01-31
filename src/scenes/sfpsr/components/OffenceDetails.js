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
export default class OffenceDetails extends Component<Props, State> {
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
      pathname: '/sfpsr/offence-analysis',
      state: { offender: this.props.location.state.offender }
    });
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Offence details</h1>
        <p>&nbsp;</p>

        <div className="form-group">
          <label htmlFor="main_offence">Main offence and dates</label>
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
          <label htmlFor="summary">Brief summary of the offence</label>
          <textarea
            name="summary"
            className="form-control no-border"
            placeholder="Start typing here..."
          />
        </div>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
