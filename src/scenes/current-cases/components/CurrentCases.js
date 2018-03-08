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
  componentDidMount() {
    fetch('/api/offenders')
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(data => this.setState({ currentOffenders: data }));
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
        <form
          className="primary-container margin-top"
          onSubmit={this.submitForm}>
          <div className="container-heading">
            <h1>
              <label htmlFor="search">Search for an offender</label>
            </h1>
          </div>
          <div className="container-content">
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
          </div>
        </form>

        {this.state.currentOffenders &&
          this.state.currentOffenders.length > 0 && (
            <div>
              <div className="primary-container margin-top">
                <div className="container-heading">
                  <h2>Recently viewed</h2>
                </div>
                <div className="container-content">
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
                </div>
              </div>
              <div className="primary-container margin-top">
                <div className="container-heading">
                  <h2>Who is in court today</h2>
                </div>
                <div className="container-content">
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
                </div>
              </div>
              <div className="primary-container margin-top">
                <div className="container-heading">
                  <h2>Due for release</h2>
                </div>
                <div className="container-content">
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
              </div>
            </div>
          )}

        <p className="space-top">&nbsp;</p>
      </div>
    );
  }
}
