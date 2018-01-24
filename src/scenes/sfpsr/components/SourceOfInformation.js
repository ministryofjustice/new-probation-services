// @flow
import React, { Component } from 'react';

type Props = {
  history: Array<any>
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
    this.props.history.push('/sfpsr/offence-details');
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Sources of information</h1>
        <p>&nbsp;</p>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
