//@flow
import React, { Component } from 'react';

import OffenderSummaryContext from '../data/OffenderSummaryContext';
import Utils from '../../../utils/Utils';

type Props = {
  // Empty
};

export default class OffenderInformation extends Component<Props> {
  render() {
    return (
      <OffenderSummaryContext.Consumer>
        {context => {
          const offender = context.offender,
            restricted =
              offender.CURRENT_RESTRICTION || offender.CURRENT_EXCLUSION,
            hasAlert = offender.CURRENT_REMAND_STATUS === 'Bail - Conditional';

          return (
            <div className="primary-container">
              <div className="container-heading">
                <h1>Offender information</h1>
              </div>
              <div className="container-content">
                <div className="grid-row nested">
                  <div className="grid-col">
                    <table role="presentation" className="full-width">
                      <tbody>
                        <tr>
                          <td width="115">
                            <div className="photo-holder">
                              <img
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
                            </div>
                          </td>
                          <td className="padding-left">
                            <p className="text-large text-bold no-margin-top">
                              {restricted
                                ? 'Restricted access'
                                : offender.FIRST_NAME + ' ' + offender.SURNAME}
                            </p>

                            <p className="no-margin-top">
                              CRN number<br />
                              <span className="text-bold">{offender.CRN}</span>
                            </p>

                            {restricted !== 1 && (
                              <div>
                                <p>
                                  Date of birth<br />
                                  <span className="text-bold">
                                    {Utils.pipeDate(
                                      offender.DATE_OF_BIRTH_DATE
                                    )}
                                  </span>
                                </p>
                              </div>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="grid-col">
                    <h3 className="no-margin-top">Risk registers</h3>

                    {offender.CURRENT_HIGHEST_RISK_COLOUR && (
                      <table role="presentation" className="full-width">
                        <tbody>
                          <tr>
                            <td className="third-width">Safeguarding</td>
                            <td>
                              <div className="riskbar green" />
                            </td>
                          </tr>
                          <tr>
                            <td>Public protection</td>
                            <td>
                              <div className="riskbar amber" />
                            </td>
                          </tr>
                          <tr>
                            <td>RoSH</td>
                            <td>
                              <div className="riskbar red" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                    {offender.CURRENT_REMAND_STATUS && (
                      <table role="presentation" className="full-width">
                        <tbody>
                          <tr>
                            <td className="third-width">Remand status</td>
                            <td className="text-bold">
                              {offender.CURRENT_REMAND_STATUS}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>

                <div className="grid-row nested">
                  <div className="grid-col panel tertiary center">
                    <p className="text-xx-large text-bold no-margin-top no-margin-bottom">
                      58
                    </p>
                    <p className="no-margin-top no-margin-bottom">Contacts</p>
                    <button className="primary overflow">+ Add Contact</button>
                  </div>

                  <div className="grid-col panel tertiary center">
                    <p className="text-xx-large text-bold no-margin-top no-margin-bottom">
                      {offender.CURRENT_DISPOSAL ? 'YES' : 'NO'}
                    </p>
                    <p className="no-margin-top no-margin-bottom">
                      {offender.CURRENT_DISPOSAL === 1 && (
                        <a className="active-link">Current Offender</a>
                      )}
                      {offender.CURRENT_DISPOSAL !== 1 && (
                        <span>Not current offender</span>
                      )}
                    </p>
                  </div>

                  <div className="grid-col panel tertiary center">
                    <div>
                      <p
                        className={
                          'text-xx-large text-bold no-margin-top no-margin-bottom ' +
                          (hasAlert ? 'text-error' : 'text-fade')
                        }>
                        ALERT{' '}
                        {hasAlert && (
                          <span className="far fa-exclamation-circle" />
                        )}
                      </p>
                      <p
                        className={
                          'no-margin-top no-margin-bottom ' +
                          (hasAlert ? '' : 'text-fade')
                        }>
                        {hasAlert
                          ? 'Breach of conditions of bail'
                          : 'No current alert'}
                      </p>
                    </div>
                  </div>

                  <div className="grid-col panel tertiary center">
                    {offender.CURRENT_HIGHEST_RISK_COLOUR && (
                      <div>
                        <img src="/images/risk_g.png" alt="medium risk" />
                        <p className="no-margin-top no-margin-bottom">
                          Medium Risk Profile
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </OffenderSummaryContext.Consumer>
    );
  }
}
