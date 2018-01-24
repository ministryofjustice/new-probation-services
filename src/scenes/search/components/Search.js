// @flow
import React, { Component } from 'react';

type Props = {};
type State = {};

export default class Search extends Component<Props, State> {
  render() {
    return (
      <div className="space-top fade-in">
        <div className="space-top panel header">
          <h1 className="text-large">Search for an offender</h1>
          <input
            type="text"
            placeholder="Find names, addresses, date of birth, CRN and more..."
          />
          <p>&nbsp;</p>
        </div>
      </div>
    );
  }
}
