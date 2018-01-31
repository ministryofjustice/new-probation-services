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
export default class SourceOfInformation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    (this: any).continueClick = this.continueClick.bind(this);
  }

  /**
   *
   */
  continueClick() {
    this.props.history.push({
      pathname: '/sfpsr/offence-details',
      state: { offender: this.props.location.state.offender }
    });
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Sources of information</h1>
        <p>&nbsp;</p>

        <div className="form-group">
          <input type="checkbox" name="info_interview" />
          <label htmlFor="info_interview">Interview</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="info_service" />
          <label htmlFor="info_service">Service records</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="info_cps" />
          <label htmlFor="info_cps">CPS summary</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="info_oasys" />
          <label htmlFor="info_oasys">Previous OASys assessments</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="info_convictions" />
          <label htmlFor="info_convictions">Previous convictions</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="info_victim" />
          <label htmlFor="info_victim">Victim statement</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="info_child_services" />
          <label htmlFor="info_child_services">Children services checks</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="info_police" />
          <label htmlFor="info_police">Police information</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="info_sentencing" />
          <label htmlFor="info_sentencing">Sentencing guidelines</label>
        </div>

        <div className="form-group">
          <input type="checkbox" name="info_other" />
          <label htmlFor="info_other">Other (please specify below)</label>
        </div>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
