import React, { Component } from 'react';

export default class Sfpsr extends Component {
  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.startClick = this.startClick.bind(this);
  }

  /**
   *
   */
  startClick() {
    this.props.history.push('/sfpsr/offender-details');
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in wait">
        <h1 className="text-large">Short Format Pre-sentence Report</h1>

        <p>&nbsp;</p>

        <h2>Never lose your work again</h2>
        <p>This service saves your report as you write</p>

        <p>&nbsp;</p>

        <p>You can:</p>

        <ul>
          <li>save drafts or completed reports</li>
          <li>update the offender's name, address and other details</li>
          <li>access guidance to help you fill in the report</li>
        </ul>

        <p>&nbsp;</p>

        <button className="primary" onClick={this.startClick}>
          Start now
        </button>
      </div>
    );
  }
}
