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
            hasAlert =
              offender.CURRENT_REMAND_STATUS === 'Bail - Conditional' &&
              offender.CURRENT_DISPOSAL;

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
                                : offender.SURNAME + ', ' + offender.FIRST_NAME}
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
                              <div
                                className={
                                  'riskbar ' +
                                  offender.CURRENT_HIGHEST_RISK_COLOUR.toLowerCase()
                                }
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}

                    {!offender.CURRENT_HIGHEST_RISK_COLOUR && (
                      <p>No current risk registers</p>
                    )}
                  </div>
                </div>

                <div className="grid-row nested margin-top">
                  <div className="grid-col panel tertiary center">
                    <p className="text-xx-large text-bold no-margin-top no-margin-bottom">
                      CRN number
                    </p>
                    <p className="no-margin-top no-margin-bottom">
                      {offender.CRN}
                    </p>
                    <a className="active-link">Other IDs</a>
                  </div>

                  <div className="grid-col panel tertiary center">
                    <p
                      className={
                        'text-xx-large text-bold no-margin-top no-margin-bottom' +
                        (offender.CURRENT_DISPOSAL ? '' : ' text-fade')
                      }>
                      {offender.CURRENT_DISPOSAL
                        ? 'Current offender'
                        : 'Not current offender'}
                    </p>
                    <p className="no-margin-top no-margin-bottom">
                      {offender.CURRENT_DISPOSAL === 1 && (
                        <a className="active-link">
                          {offender.CURRENT_REMAND_STATUS}
                        </a>
                      )}
                    </p>
                  </div>

                  <div
                    className={
                      'grid-col panel tertiary center' +
                      (hasAlert ? ' error' : '')
                    }>
                    <p
                      className={
                        'text-xx-large text-bold no-margin-top no-margin-bottom ' +
                        (hasAlert ? 'text-error' : 'text-fade')
                      }>
                      ALERT <span className="far fa-exclamation-circle" />
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

                  <div className="grid-col panel tertiary center">
                    {offender.CURRENT_HIGHEST_RISK_COLOUR && (
                      <div>
                        <img
                          src={
                            '/images/risk_' +
                            offender.CURRENT_HIGHEST_RISK_COLOUR.toLowerCase() +
                            '.png'
                          }
                          alt="medium risk"
                        />
                        <p className="no-margin-top no-margin-bottom">
                          {offender.CURRENT_HIGHEST_RISK_COLOUR === 'Red'
                            ? 'High'
                            : offender.CURRENT_HIGHEST_RISK_COLOUR === 'Amber'
                              ? 'Medium'
                              : 'Low'}{' '}
                          Risk Profile
                        </p>
                      </div>
                    )}
                    {!offender.CURRENT_HIGHEST_RISK_COLOUR && (
                      <div>
                        <img
                          src={'/images/risk_none.png'}
                          alt="no risk profile"
                        />
                        <p className="no-margin-top no-margin-bottom text-fade">
                          No Risk Profile
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
