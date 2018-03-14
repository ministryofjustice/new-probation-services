import React from 'react';

import OffenderSummaryContext from '../data/OffenderSummaryContext';

const OffenderNotes = () => (
  <OffenderSummaryContext.Consumer>
    {context => {
      const offender = context.offender;

      return (
        <div className="primary-container">
          <div className="container-heading">
            <h1 className="text-bold">Additional information</h1>
          </div>
          <div className="container-content">
            <div className="tertiary-container nested">
              <p className="text-bold text-small">Offender details</p>
              <p>{offender.OFFENDER_DETAILS}</p>
              <hr />
              <p className="text-bold text-small">Notes</p>
              <p>{offender.NOTES}</p>
            </div>
          </div>
        </div>
      );
    }}
  </OffenderSummaryContext.Consumer>
);

export default OffenderNotes;
