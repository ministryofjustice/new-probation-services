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
      <div className="padding">
        <div className="photo-holder inline">
          <img
            alt={
              'Photograph of ' + offender.SURNAME + ', ' + offender.FIRST_NAME
            }
            src={
              offender.GENDER_ID === 545
                ? '/images/placeholder_m.jpg'
                : '/images/placeholder_f.jpg'
            }
          />
        </div>
        <div className="panel header">
          <p className="text-medium no-margin-bottom">
            {offender.SURNAME + ', ' + offender.FIRST_NAME} -{' '}
            {Utils.pipeDate(offender.DATE_OF_BIRTH_DATE)}
          </p>
          <p className="margin-top small">
            <span className="text-extra-bold">CRN: {offender.CRN}</span>

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
            className="tiny green"
            onClick={() => {
              this.props.click(offender);
            }}>
            View
          </button>{' '}
          <button className="tiny">Add contact</button>
        </div>
      </div>
    );
  }
}
