// @flow
import React, { Component } from 'react';

import OffenderPanel from './OffenderPanel';

type Props = {
  history: Array<any>
};
type State = {
  searchParams: string,
  currentOffenders: Array<Object>
};

/**
 *
 */
export default class CurrentCases extends Component<Props, State> {
  /**
   * @constructor
   * @param props {Props} arbitrary inputs
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      searchParams: '',
      currentOffenders: []
    };

    (this: any).handleChange = this.handleChange.bind(this);
    (this: any).handleClick = this.handleClick.bind(this);
    (this: any).submitForm = this.submitForm.bind(this);
  }

  /**
   *
   */
  componentWillMount() {
    const reqListener = (e: any) => {
      const data = JSON.parse(e.target.responseText).hits.hits;
      this.setState(() => {
        return { currentOffenders: data };
      });
    };

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('get', '/data/stub.json', true);
    oReq.send();
  }

  /**
   *
   * @param event
   */
  handleChange(event: SyntheticInputEvent<HTMLInputElement>) {
    this.setState({ searchParams: event.target.value });
  }

  /**
   * Handle offender selection
   * @param selected
   */
  handleClick(selected: Object) {
    this.props.history.push({
      pathname: '/offender-summary',
      state: { offender: selected }
    });
  }

  /**
   *
   * @param event
   */
  submitForm(event: any) {
    event.preventDefault();
    this.props.history.push(
      '/search?search=' + encodeURIComponent(this.state.searchParams)
    );
  }

  render() {
    return (
      <div className="fade-in">
        <div className="space-top panel header">
          <h1 className="text-large">
            {new Date().toLocaleDateString('en-GB')}
          </h1>
          <p className="text-large">Manchester and Salford Magistrates Court</p>
        </div>

        <p>&nbsp;</p>

        <form className="form-group center" onSubmit={this.submitForm}>
          <label htmlFor="search">Search for an offender</label>
          <br />
          <input
            type="text"
            name="search"
            className="form-control inline center"
            value={this.state.searchParams}
            onChange={this.handleChange}
          />
          <button type="submit" className="input-bumper">
            <span className="far fa-search" />
          </button>
        </form>

        {this.state.currentOffenders.length > 0 && (
          <div>
            <p>&nbsp;</p>

            <h2>Recently viewed</h2>

            <div className="grid-row nested">
              <div className="grid-col">
                <OffenderPanel
                  data={this.state.currentOffenders[0]._source}
                  click={this.handleClick}
                />
              </div>
              <div className="grid-col">
                <OffenderPanel
                  data={this.state.currentOffenders[4]._source}
                  click={this.handleClick}
                />
              </div>
              <div className="grid-col">
                <OffenderPanel
                  data={this.state.currentOffenders[5]._source}
                  click={this.handleClick}
                />
              </div>
            </div>

            <h2>Who is in court today</h2>

            <div className="grid-row nested">
              <div className="grid-col">
                <OffenderPanel
                  data={this.state.currentOffenders[3]._source}
                  click={this.handleClick}
                />
              </div>
              <div className="grid-col">
                <OffenderPanel
                  data={this.state.currentOffenders[4]._source}
                  click={this.handleClick}
                />
              </div>
              <div className="grid-col">
                <OffenderPanel
                  data={this.state.currentOffenders[5]._source}
                  click={this.handleClick}
                />
              </div>
            </div>

            <h2>Due for release</h2>

            <div className="grid-row nested">
              <div className="grid-col">
                <OffenderPanel
                  data={this.state.currentOffenders[6]._source}
                  click={this.handleClick}
                />
              </div>
              <div className="grid-col">
                <OffenderPanel
                  data={this.state.currentOffenders[1]._source}
                  click={this.handleClick}
                />
              </div>
              <div className="grid-col">
                <OffenderPanel
                  data={this.state.currentOffenders[2]._source}
                  click={this.handleClick}
                />
              </div>
            </div>
          </div>
        )}

        <p className="space-top">&nbsp;</p>
      </div>
    );
  }
}
