// @flow
import React from 'react';

/**
 *
 */
const CurrentCases = () => (
  <div className="fade-in">
    <div className="space-top panel header">
      <h1 className="text-large">{new Date().toLocaleDateString('en-GB')}</h1>
      <p className="text-large">Westminster Crown Court</p>
    </div>

    <p>&nbsp;</p>

    <div className="form-group center">
      <label htmlFor="search">Search for an offender</label>
      <input type="text" name="search" className="form-control center" />
    </div>

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

export default CurrentCases;
