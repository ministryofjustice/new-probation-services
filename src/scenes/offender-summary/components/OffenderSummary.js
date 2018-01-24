// @flow
import React, { Component } from 'react';
import Utils from '../../../utils/Utils';

type Props = {
  location: Object
};
type State = {
  offender: Object,
  addressOpen: any
};

export default class OffenderSummary extends Component<Props, State> {
  /**
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);
    this.state = { offender: props.location.state.offender, addressOpen: -1 };
    console.info(this.state.offender);

    (this: any).handleAddressClick = this.handleAddressClick.bind(this);
  }

  /**
   *
   */
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  /**
   *
   * @param event
   */
  handleAddressClick(event: any) {
    const clickId = parseInt(event.target.id, 10);

    this.setState(prevState => {
      return { addressOpen: clickId === prevState.addressOpen ? -1 : clickId };
    });
  }

  /**
   *
   * @returns {*}
   */
  render() {
    const offender = this.state.offender,
      restricted = offender.CURRENT_RESTRICTION || offender.CURRENT_EXCLUSION;

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
                  <h1 className="font-large">
                    {restricted
                      ? 'Restricted access'
                      : offender.SURNAME +
                        ', ' +
                        offender.FIRST_NAME +
                        ' - ' +
                        Utils.pipeDate(offender.DATE_OF_BIRTH_DATE)}
                  </h1>

                  <p className="margin-top no-margin-bottom">
                    <span className="bold">CRN: {offender.CRN}</span>
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
                    {!restricted && (
                      <span>
                        {offender.CURRENT_DISPOSAL > 0 && (
                          <span> | Current offender</span>
                        )}
                        {' | ' +
                          Utils.pipeGender(offender.GENDER_ID) +
                          ', ' +
                          Utils.pipeAge(offender.DATE_OF_BIRTH_DATE)}
                      </span>
                    )}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {restricted === 1 && (
          <div>
            <p>
              {offender.CURRENT_RESTRICTION
                ? offender.RESTRICTION_MESSAGE
                : offender.EXCLUSION_MESSAGE}
            </p>
          </div>
        )}

        {restricted !== 1 && (
          <div>
            <h3 className="text-bold">Offender details</h3>

            <p>{offender.OFFENDER_DETAILS}</p>

            <p>
              <span className="text-bold">Previous surname:</span>{' '}
              {offender.PREVIOUS_SURNAME}
            </p>
            <p>
              <span className="text-bold">Other names:</span>{' '}
              {offender.SECOND_NAME + ', ' + offender.THIRD_NAME}
            </p>
            <p>
              <span className="text-bold">NI Number:</span> {offender.NI_NUMBER}
            </p>
            {offender.CURRENT_REMAND_STATUS !== null && (
              <p>
                <span className="text-bold">Status:</span>{' '}
                {offender.CURRENT_REMAND_STATUS}
              </p>
            )}

            <hr />

            <h3 className="text-bold">Contact details</h3>

            <p>
              <span className="text-bold">Telephone:</span>{' '}
              {offender.TELEPHONE_NUMBER}
            </p>
            <p>
              <span className="text-bold">Mobile:</span>{' '}
              {offender.MOBILE_NUMBER}
            </p>
            <p>
              <span className="text-bold">Email:</span>{' '}
              {offender.E_MAIL_ADDRESS}
            </p>
            <p>
              <span className="text-bold">Interpreter required:</span>{' '}
              {offender.INTERPRETER_REQUIRED ? 'Yes' : 'No'}
            </p>

            {offender.ADDRESSES.length > 0 && (
              <div>
                <hr />

                <h3 className="text-bold">Address history</h3>

                {offender.ADDRESSES.map((address, i) => (
                  <div key={i}>
                    <a
                      className={
                        this.state.addressOpen === i
                          ? 'expand-content clickable blue active'
                          : 'expand-content clickable blue'
                      }
                      id={i}
                      onClick={this.handleAddressClick}>
                      {address.NO_FIXED_ABODE === 'Y'
                        ? 'No fixed abode'
                        : address.ADDRESS_NUMBER +
                          ' ' +
                          address.STREET_NAME +
                          ', ' +
                          address.TOWN_CITY +
                          ', ' +
                          address.COUNTY +
                          '. ' +
                          address.POSTCODE}
                    </a>

                    <div
                      className={
                        this.state.addressOpen === i
                          ? 'panel panel-border-narrow'
                          : 'js-hidden'
                      }>
                      <p>
                        <span className="text-bold">Start date:</span>{' '}
                        {Utils.pipeDate(address.START_DATE)}
                      </p>
                      <p>
                        <span className="text-bold">End date:</span>{' '}
                        {address.END_DATE}
                      </p>
                      <p>
                        <span className="text-bold">Telephone:</span>{' '}
                        {address.TELEPHONE_NUMBER}
                      </p>

                      <h3 className="text-bold">Notes</h3>
                      <p>{address.NOTES}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {offender.ALIASES.length > 0 && (
              <div className="space-top">
                <hr />

                <h3 className="text-bold">Known aliases</h3>

                {offender.ALIASES.map((alias, i) => (
                  <p key={i} className="no-margin-bottom">
                    {alias.SURNAME +
                      ', ' +
                      alias.FIRST_NAME +
                      ' - ' +
                      Utils.pipeDate(alias.DATE_OF_BIRTH_DATE)}
                  </p>
                ))}
              </div>
            )}

            <hr />

            <h3 className="text-bold">Other records</h3>

            <p className="no-margin-bottom">
              <span className="text-bold">PNC:</span> {offender.PNC_NUMBER}
            </p>
            <p className="no-margin-bottom">
              <span className="text-bold">CRO:</span> {offender.CRO_NUMBER}
            </p>
            <p className="no-margin-bottom">
              <span className="text-bold">NOMS:</span> {offender.NOMS_NUMBER}
            </p>

            <hr />

            <h3 className="text-bold">Notes</h3>

            <p>{offender.NOTES}</p>
          </div>
        )}
      </div>
    );
  }
}
