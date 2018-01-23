import React, { Component } from 'react';

/**
 *
 */
export default class OffenceAnalysis extends Component {
  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.continueClick = this.continueClick.bind(this);
  }

  /**
   *
   */
  continueClick() {
    this.props.history.push('/sfpsr/offender-assessment');
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Offence analysis</h1>
        <p>&nbsp;</p>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
