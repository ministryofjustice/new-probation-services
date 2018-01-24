// @flow
import React, { Component } from 'react';

type Props = {
  history: Array<any>
};
type State = {
  searchParams: string
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
      searchParams: ''
    };

    (this: any).handleChange = this.handleChange.bind(this);
    (this: any).submitForm = this.submitForm.bind(this);
  }

  /**
   *
   * @param event
   */
  handleChange(event: SyntheticInputEvent<HTMLInputElement>) {
    this.setState({ searchParams: event.target.value });
  }

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
          <p className="text-large">Westminster Crown Court</p>
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

        <p>&nbsp;</p>

        <h2>Recently viewed</h2>

        <div className="grid-row nested">
          <div className="grid-col">
            <div className="padding">
              <div className="photo-holder inline" />
              <div className="panel header">
                <p>John Smith - 14/06/1950</p>
                <p className="text-bold">CRN: D429602</p>
                <button className="primary small">View</button>
              </div>
            </div>
          </div>
          <div className="grid-col">
            <div className="padding">
              <div className="photo-holder inline" />
              <div className="panel header">
                <p>John Smith - 14/06/1950</p>
                <p className="text-bold">CRN: D429602</p>
                <button className="primary small">View</button>
              </div>
            </div>
          </div>
          <div className="grid-col">
            <div className="padding">
              <div className="photo-holder inline" />
              <div className="panel header">
                <p>John Smith - 14/06/1950</p>
                <p className="text-bold">CRN: D429602</p>
                <button className="primary small">View</button>
              </div>
            </div>
          </div>
        </div>

        <h2>Who is in court today</h2>

        <div className="grid-row nested">
          <div className="grid-col">
            <div className="padding">
              <div className="photo-holder inline" />
              <div className="panel header">
                <p>John Smith - 14/06/1950</p>
                <p className="text-bold">CRN: D429602</p>
                <button className="primary small">View</button>
              </div>
            </div>
          </div>
          <div className="grid-col">
            <div className="padding">
              <div className="photo-holder inline" />
              <div className="panel header">
                <p>John Smith - 14/06/1950</p>
                <p className="text-bold">CRN: D429602</p>
                <button className="primary small">View</button>
              </div>
            </div>
          </div>
          <div className="grid-col">
            <div className="padding">
              <div className="photo-holder inline" />
              <div className="panel header">
                <p>John Smith - 14/06/1950</p>
                <p className="text-bold">CRN: D429602</p>
                <button className="primary small">View</button>
              </div>
            </div>
          </div>
        </div>

        <h2>Due for release</h2>

        <div className="grid-row nested">
          <div className="grid-col">
            <div className="padding">
              <div className="photo-holder inline" />
              <div className="panel header">
                <p>John Smith - 14/06/1950</p>
                <p className="text-bold">CRN: D429602</p>
                <button className="primary small">View</button>
              </div>
            </div>
          </div>
          <div className="grid-col">
            <div className="padding">
              <div className="photo-holder inline" />
              <div className="panel header">
                <p>John Smith - 14/06/1950</p>
                <p className="text-bold">CRN: D429602</p>
                <button className="primary small">View</button>
              </div>
            </div>
          </div>
          <div className="grid-col">
            <div className="padding">
              <div className="photo-holder inline" />
              <div className="panel header">
                <p>John Smith - 14/06/1950</p>
                <p className="text-bold">CRN: D429602</p>
                <button className="primary small">View</button>
              </div>
            </div>
          </div>
        </div>

        <p className="space-top">&nbsp;</p>
      </div>
    );
  }
}
