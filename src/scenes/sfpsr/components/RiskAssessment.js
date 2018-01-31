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
export default class RiskAssessment extends Component<Props, State> {
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
      pathname: '/sfpsr/conclusion',
      state: { offender: this.props.location.state.offender }
    });
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Risk assessment</h1>
        <p>&nbsp;</p>

        <div className="form-group">
          <label htmlFor="reoffending">likelihood of reoffending</label>
          <textarea
            name="reoffending"
            className="form-control no-border"
            placeholder="Start typing here..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="serious_harm">Risk of serious harm</label>
          <textarea
            name="serious_harm"
            className="form-control no-border"
            placeholder="Start typing here..."
          />
        </div>

        <fieldset className="no-border">
          <legend>Response to previous supervision</legend>

          <div className="form-group">
            <input type="radio" name="supervision" />
            <label htmlFor="supervision">Good</label>
          </div>

          <div className="form-group">
            <input type="radio" name="supervision" />
            <label htmlFor="supervision">Satisfactory</label>
          </div>

          <div className="form-group">
            <input type="radio" name="supervision" />
            <label htmlFor="supervision">Poor</label>
          </div>

          <div className="form-group">
            <input type="radio" name="supervision" />
            <label htmlFor="supervision">Not applicable</label>
          </div>
        </fieldset>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
