import React from 'react';
import OffenderSummaryContext from '../data/OffenderSummaryContext';

const OffenderSummaryContact = () => (
  <OffenderSummaryContext.Consumer>
    {context => {
      const offender = context.offender,
        currentAddress = offender.ADDRESSES[0];

      return (
        <div className="primary-container">
          <div className="container-heading">
            <h1 className="text-bold">Contact details</h1>
          </div>
          <div className="container-content">
            <table role="presentation" className="border-bottom full-width">
              <tbody>
                <tr>
                  <td className="third-width text-bold">Address line 1</td>
                  <td>
                    {currentAddress.ADDRESS_NUMBER +
                      ' ' +
                      currentAddress.STREET_NAME}
                  </td>
                </tr>
                <tr>
                  <td className="text-bold">Address line 2</td>
                  <td>{currentAddress.DISTRICT}</td>
                </tr>
                <tr>
                  <td className="text-bold">Town / City</td>
                  <td>{currentAddress.TOWN_CITY}</td>
                </tr>
                <tr>
                  <td className="text-bold">Postcode</td>
                  <td>{currentAddress.POSTCODE}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }}
  </OffenderSummaryContext.Consumer>
);

export default OffenderSummaryContact;
