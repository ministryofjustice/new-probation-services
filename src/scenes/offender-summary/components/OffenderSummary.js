import React, { Component } from 'react';

/**
 *
 */
export default class OffenderSummary extends Component {
  /**
   *
   */
  render() {
    return (
      <div className="space-top fade-in">
        <div className="panel header align-left">
          <table role="presentation">
            <tbody>
              <tr>
                <td>
                  <div className="photo-holder" />
                </td>
                <td className="padding">
                  <h1>John Smith - 23/05/1976</h1>
                  <p>
                    <span className="text-bold">CRN: D345982</span> | Current
                    offender | Male
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid-row nested">
          <div className="grid-col">
            <p className="text-bold">Offender details</p>
          </div>
          <div className="grid-col">
            <p className="text-bold">Events</p>
          </div>
          <div className="grid-col">
            <p className="text-bold">Assessments</p>
          </div>
          <div className="grid-col">
            <p className="text-bold">Contact list</p>
          </div>
        </div>

        <div className="panel header align-left">Personal details</div>

        <div className="panel header align-left margin-top">
          Contact details
        </div>

        <div className="panel header align-left margin-top">
          Identification numbers
        </div>

        <div className="panel header align-left margin-top">
          Previous convictions
        </div>
      </div>
    );
  }
}
