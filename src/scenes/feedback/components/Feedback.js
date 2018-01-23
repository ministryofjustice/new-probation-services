import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      impressions: '',
      feedback: '',
      doRedirect: false
    };

    this.handleImpressions = this.handleImpressions.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImpressions(event) {
    this.setState({ impressions: event.target.value });
  }

  handleFeedback(event) {
    this.setState({ feedback: event.target.value });
  }

  handleSubmit() {
    window.location.href =
      'mailto:nick.gallon@digital.justice.gov.uk?subject=National%20Search%20Feedback&body=What%20were%20your%20first%20impressions%20of%20the%20offender%20search%3F%0D%0A%0D%0A' +
      encodeURIComponent(this.state.impressions) +
      '%0D%0A%0D%0AIf%20you%20could%20change%20anything%20what%20would%20it%20be%3F%0D%0A%0D%0A' +
      encodeURIComponent(this.state.feedback);
  }

  render() {
    return (
      <div className="space-top fade-in">
        <h1>Give feedback</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              1. What were your first impressions of the new service?
              <textarea
                id="impressions"
                name="impressions"
                className="form-control wide"
                value={this.state.impressions || ''}
                onChange={this.handleImpressions}
              />
            </label>

            <p>&nbsp;</p>

            <label className="form-label-bold">
              2. If you could change anything what would it be?
              <textarea
                id="feedback"
                name="feedback"
                className="form-control wide"
                value={this.state.feedback || ''}
                onChange={this.handleFeedback}
              />
            </label>
          </div>

          <p>
            This is a very early stage test for a new kind of web-based
            application for the Probation Service.
          </p>
          <p>
            This test does not use any real offender data or store any data in
            any way.
          </p>

          <p>&nbsp;</p>

          <button className="primary" type="submit">
            Send feedback
          </button>
        </form>

        {this.state.doRedirect && <Redirect to="/" />}
      </div>
    );
  }
}
