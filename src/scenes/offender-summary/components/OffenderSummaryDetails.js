import React from 'react';
import Utils from '../../../utils/Utils';

import OffenderSummaryContext from '../data/OffenderSummaryContext';

const OffenderSummaryDetails = () => (
  <OffenderSummaryContext.Consumer>
    {context => {
      const offender = context.offender;

      return (
        <div className="primary-container">
          <div className="container-heading">
            <h1 className="text-bold">Personal details</h1>
          </div>
          <div className="container-content">
            <table role="presentation" className="border-bottom full-width">
              <tbody>
                <tr>
                  <td className="third-width text-bold">Title</td>
                  <td>{offender.TITLE}</td>
                </tr>
                <tr>
                  <td className="text-bold">First name</td>
                  <td>{offender.FIRST_NAME}</td>
                </tr>
                <tr>
                  <td className="text-bold">Last name</td>
                  <td>{offender.SURNAME}</td>
                </tr>
                <tr>
                  <td className="text-bold">Other names</td>
                  <td>{offender.SECOND_NAME + ', ' + offender.THIRD_NAME}</td>
                </tr>
                <tr>
                  <td className="text-bold">Previous names</td>
                  <td>{offender.PREVIOUS_SURNAME}</td>
                </tr>
                <tr>
                  <td className="text-bold">Gender</td>
                  <td>{Utils.pipeGender(offender.GENDER_ID)}</td>
                </tr>
                <tr>
                  <td className="text-bold">Age</td>
                  <td>{Utils.pipeAge(offender.DATE_OF_BIRTH_DATE)}</td>
                </tr>
                <tr>
                  <td className="text-bold">Nationality</td>
                  <td>{offender.NATIONALITY_ID}</td>
                </tr>
                <tr>
                  <td className="text-bold">Ethnicity</td>
                  <td>{offender.ETHNICITY_ID}</td>
                </tr>
                <tr>
                  <td className="text-bold">Primary language</td>
                  <td>{offender.LANGUAGE_ID}</td>
                </tr>
                <tr>
                  <td className="text-bold">Interpreter required</td>
                  <td>{offender.INTERPRETER_REQUIRED}</td>
                </tr>
                <tr>
                  <td className="text-bold">Disability status</td>
                  <td>{offender.DISABLED}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }}
  </OffenderSummaryContext.Consumer>
);

export default OffenderSummaryDetails;
