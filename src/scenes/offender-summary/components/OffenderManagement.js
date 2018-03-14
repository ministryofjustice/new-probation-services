import React from 'react';

import OffenderSummaryContext from '../data/OffenderSummaryContext';
import Utils from '../../../utils/Utils';

const OffenderManagement = () => (
  <OffenderSummaryContext.Consumer>
    {context => {
      const offender = context.offender;

      return (
        <div className="primary-container">
          <div className="container-heading">
            <h1 className="text-bold">Offender management</h1>
          </div>
          <div className="container-content">
            <table role="presentation" className="border-bottom full-width">
              <tbody>
                <tr>
                  <td className="third-width text-bold">Provider</td>
                  <td>Unallocated</td>
                </tr>
                <tr>
                  <td className="text-bold">Cluster</td>
                  <td>Unallocated</td>
                </tr>
                <tr>
                  <td className="text-bold">LDU and team</td>
                  <td>Unallocated team (NO7 Division)</td>
                </tr>
                <tr>
                  <td className="text-bold">Officer</td>
                  <td>Sarah Francis</td>
                </tr>
                <tr>
                  <td className="text-bold">Team telephone</td>
                  <td>07651 302 9760</td>
                </tr>
                <tr>
                  <td className="text-bold">Date allocated</td>
                  <td>{Utils.pipeDate(offender.CREATED_DATETIME)}</td>
                </tr>
                <tr>
                  <td className="text-bold">Reason for allocation</td>
                  <td>Unknown</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }}
  </OffenderSummaryContext.Consumer>
);

export default OffenderManagement;
