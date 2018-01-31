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
export default class OffenceAnalysis extends Component<Props, State> {
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
      pathname: '/sfpsr/offender-assessment',
      state: { offender: this.props.location.state.offender }
    });
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Offence analysis</h1>
        <p>&nbsp;</p>

        <div className="form-group">
          <label htmlFor="analysis">Offence analysis</label>
          <textarea
            name="analysis"
            className="form-control no-border"
            placeholder="Start typing here..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="analysis">
            Patterns of offending behaviour (if applicable)
          </label>
          <p className="form-hint">
            Detail any gaps in offending and relapse, look for triggers that
            initiate the behaviours
          </p>
          <textarea
            name="analysis"
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
