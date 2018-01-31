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
export default class OffenderAssessment extends Component<Props, State> {
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
      pathname: '/sfpsr/risk-assessment',
      state: { offender: this.props.location.state.offender }
    });
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Offender assessment</h1>
        <p>&nbsp;</p>

        <p>
          Select the underlying issues that are relevant as motivators or
          drivers for the main offence
        </p>

        <p>&nbsp;</p>

        <div className="form-group">
          <input type="checkbox" name="issue_accommodation" />
          <label htmlFor="issue_accommodation">Accommodation</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="issue_employment" />
          <label htmlFor="issue_employment">
            Employment, training and education
          </label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="issue_finance" />
          <label htmlFor="issue_finance">Finance</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="issue_relationships" />
          <label htmlFor="issue_relationships">Relationships</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="issue_drugs" />
          <label htmlFor="issue_drugs">Substance misuse</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="issue_health" />
          <label htmlFor="issue_health">Physical &amp; mental health</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="issue_behaviour" />
          <label htmlFor="issue_behaviour">Thinking &amp; behaviour</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="issue_other" />
          <label htmlFor="issue_other">Other</label>
        </div>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
