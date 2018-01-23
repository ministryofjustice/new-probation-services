import React, { Component } from 'react';

/**
 *
 */
export default class CourtDetails extends Component {
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
    this.props.history.push('/sfpsr/sources-of-information');
  }

  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <h1>Sentencing court details</h1>
        <p>&nbsp;</p>

        <div className="form-group">
          <label htmlFor="court">Court</label>
          <input type="text" name="court" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="justiceArea">Local justice area</label>
          <input type="text" name="justiceArea" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date of hearing</label>
          <p className="form-hint">
            For example: 28/06/{new Date().getFullYear()}
          </p>
          <textarea name="date" className="form-control" />
        </div>

        <button className="primary" onClick={this.continueClick}>
          Save &amp; continue
        </button>
      </div>
    );
  }
}
