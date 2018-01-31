import React, { Component } from 'react';
import Utils from '../../../utils/Utils';

type Props = {
  restricted: boolean,
  offender: Object
};
type State = {
  addressOpen: any
};

export default class OffenderSummaryDetails extends Component<Props, State> {
  /**
   * @constructor
   * @param props {Props} arbitrary inputs
   */
  constructor(props: Props) {
    super(props);

    this.state = { addressOpen: -1 };

    (this: any).handleAddressClick = this.handleAddressClick.bind(this);
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

  render() {
    const offender = this.props.offender,
      restricted = this.props.restricted;

    return (
      <div>
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
                  <div key={i} className="margin-top">
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
                          ? 'panel border-left'
                          : 'js-hidden'
                      }>
                      <p className="no-margin-top">
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

            <hr className="margin-top" />

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

            <hr className="margin-top" />

            <h3 className="text-bold">Notes</h3>

            <p>{offender.NOTES}</p>
          </div>
        )}
      </div>
    );
  }
}
