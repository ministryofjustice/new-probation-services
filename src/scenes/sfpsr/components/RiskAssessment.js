import React, { Component } from 'react';

/**
 *
 */
export default class RiskAssessment extends Component {
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
    this.props.history.push('/sfpsr/conclusion');
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Risk assessment</h1>
        <p>&nbsp;</p>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
