// @flow
import React, { Component } from 'react';

import Utils from '../../../utils/Utils';

type Props = {
  data: {
    FIRST_NAME: string,
    SURNAME: string,
    DATE_OF_BIRTH_DATE: string,
    CRN: string,
    GENDER_ID: number
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
          <p className="text-extra-bold margin-top small">
            CRN: {offender.CRN}
          </p>
          <button
            className="primary small"
            onClick={() => {
              this.props.click(offender);
            }}>
            View
          </button>
        </div>
      </div>
    );
  }
}
