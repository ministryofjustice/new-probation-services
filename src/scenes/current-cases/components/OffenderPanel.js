// @flow
import React, { Component } from 'react';

import Utils from '../../../utils/Utils';

type Props = {
  data: {
    FIRST_NAME: string,
    SURNAME: string,
    DATE_OF_BIRTH_DATE: string,
    CRN: string,
    GENDER_ID: number,
    CURRENT_HIGHEST_RISK_COLOUR: string
  },
  click: Function
};

type State = {};

export default class OffenderPanel extends Component<Props, State> {
  render() {
    const offender = this.props.data;

    return (
      <div className="secondary-container">
        <table role="presentation">
          <tbody>
            <tr>
              <td>
                <img
                  className="image-offender"
                  alt={
                    'Photograph of ' +
                    offender.SURNAME +
                    ', ' +
                    offender.FIRST_NAME
                  }
                  src={
                    offender.GENDER_ID === 545
                      ? '/images/placeholder_m.jpg'
                      : '/images/placeholder_f.jpg'
                  }
                />
              </td>
              <td>
                <h1>
                  {offender.SURNAME +
                    ', ' +
                    offender.FIRST_NAME +
                    ' - ' +
                    Utils.pipeDate(offender.DATE_OF_BIRTH_DATE)}
                </h1>
                <p className="margin-top small">
                  <span className="text-x-bold">CRN: {offender.CRN}</span>

                  {offender.CURRENT_HIGHEST_RISK_COLOUR !== null && (
                    <span id="risk">
                      {' '}
                      | Risk{' '}
                      <span
                        className={
                          'risk-icon risk-' +
                          offender.CURRENT_HIGHEST_RISK_COLOUR.toLowerCase()
                        }
                      />
                    </span>
                  )}
                </p>
                <button
                  className="tiny inline-primary"
                  onClick={() => {
                    this.props.click(offender);
                  }}>
                  View
                </button>{' '}
                <button className="tiny inline-secondary">Manage</button>{' '}
                <button className="tiny">Add contact</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
