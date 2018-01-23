import React, { Component } from 'react';

/**
 *
 */
export default class OffenceDetails extends Component {
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
    this.props.history.push('/sfpsr/offence-analysis');
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Offence details</h1>
        <p>&nbsp;</p>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
