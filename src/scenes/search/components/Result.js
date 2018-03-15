// @flow
import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import Utils from '../../../utils/Utils';

type Props = {
  id: number,
  params: string,
  data: any,
  contact: Function,
  click: Function
};

export default class Result extends Component<Props> {
  /**
   * @constructor
   * @param props {Props} arbitrary inputs
   */
  constructor(props: Props) {
    super(props);

    (this: any).additionalResults = this.additionalResults.bind(this);
  }

  /**
   *
   * @returns {Array}
   */
  additionalResults() {
    const searched = this.props.params.trim().split(' '),
      data = this.props.data;

    // Restricted or excluded record
    if (data.CURRENT_RESTRICTION || data.CURRENT_EXCLUSION) {
      return [];
    }

    let deepItems = new Set();

    function findTerm(source, term) {
      let isFound = false;
      source.forEach(item => {
        isFound =
          (term.length > 1 &&
            item &&
            item
              .toString()
              .toLowerCase()
              .includes(term.toLowerCase())) ||
          isFound;
      });
      return isFound;
    }

    searched.forEach(term => {
      if (data.hasOwnProperty('ALIASES')) {
        data.ALIASES.forEach(alias => {
          if (
            findTerm(
              [
                alias.FIRST_NAME,
                alias.SURNAME,
                Utils.pipeDate(alias.DATE_OF_BIRTH_DATE)
              ],
              term
            )
          ) {
            deepItems.add(
              'Alias: ' +
                alias.SURNAME +
                ', ' +
                alias.FIRST_NAME +
                ' - ' +
                Utils.pipeDate(alias.DATE_OF_BIRTH_DATE)
            );
          }
          if (findTerm([alias.SECOND_NAME, alias.THIRD_NAME], term)) {
            deepItems.add(
              'Alias other names: ' +
                alias.SECOND_NAME +
                ', ' +
                alias.THIRD_NAME
            );
          }
        });
      }

      if (findTerm([data.PNC_NUMBER], term)) {
        deepItems.add('PNC: ' + data.PNC_NUMBER);
      }

      if (findTerm([data.NOMS_NUMBER], term)) {
        deepItems.add('NOMS: ' + data.NOMS_NUMBER);
      }

      if (findTerm([data.CRO_NUMBER], term)) {
        deepItems.add('CRO: ' + data.CRO_NUMBER);
      }

      if (findTerm([data.SECOND_NAME, data.THIRD_NAME], term)) {
        deepItems.add(
          'Other names: ' + data.SECOND_NAME + ', ' + data.THIRD_NAME
        );
      }

      if (findTerm([data.PREVIOUS_SURNAME], term)) {
        deepItems.add('Previous surname: ' + data.PREVIOUS_SURNAME);
      }

      if (data.hasOwnProperty('ADDRESSES')) {
        data.ADDRESSES.forEach(address => {
          if (
            findTerm(
              [
                address.TOWN_CITY,
                address.STREET_NAME,
                address.COUNTY,
                address.POSTCODE
              ],
              term
            )
          ) {
            deepItems.add(
              'Address: ' +
                address.ADDRESS_NUMBER +
                ' ' +
                address.STREET_NAME +
                ', ' +
                address.TOWN_CITY +
                ', ' +
                address.COUNTY +
                '. ' +
                address.POSTCODE
            );
          }
        });
      }
    });

    return Array.from(deepItems);
  }

  /**
   * Render
   * @returns {XML}
   */
  render() {
    const data = this.props.data,
      searched = this.props.params.trim().split(' '),
      restricted = data.CURRENT_RESTRICTION || data.CURRENT_EXCLUSION;

    return (
      <div className="primary-container">
        <div className="container-content">
          <table role="presentation">
            <tbody>
              <tr>
                <td className="no-margin-bottom">
                  <img
                    className="photo-holder align-left"
                    alt={
                      'Photograph of ' + data.SURNAME + ', ' + data.FIRST_NAME
                    }
                    src={
                      restricted
                        ? '/images/placeholder_r.jpg'
                        : data.GENDER_ID === 545
                          ? '/images/placeholder_m.jpg'
                          : '/images/placeholder_f.jpg'
                    }
                  />
                </td>
                <td className="no-margin-bottom">
                  {!restricted && (
                    <h1 className="margin-top half">
                      <Highlighter
                        highlightClassName="highlight"
                        searchWords={searched}
                        autoEscape={true}
                        textToHighlight={
                          data.SURNAME +
                          ', ' +
                          data.FIRST_NAME +
                          ' - ' +
                          Utils.pipeDate(data.DATE_OF_BIRTH_DATE)
                        }
                      />
                    </h1>
                  )}

                  {!!restricted && (
                    <h1 className="margin-top half">
                      {data.CURRENT_RESTRICTION
                        ? 'Restricted information'
                        : 'Excluded information'}
                    </h1>
                  )}

                  <p className="no-margin bottom">
                    <span className="text-bold">
                      CRN:{' '}
                      <Highlighter
                        highlightClassName="highlight"
                        searchWords={searched}
                        autoEscape={true}
                        textToHighlight={data.CRN}
                      />
                    </span>
                    {data.CURRENT_HIGHEST_RISK_COLOUR !== null && (
                      <span id="risk">
                        {' '}
                        | Risk{' '}
                        <span
                          className={
                            'risk-icon risk-' +
                            data.CURRENT_HIGHEST_RISK_COLOUR.toLowerCase()
                          }
                        />
                      </span>
                    )}
                    {!restricted && (
                      <span>
                        {data.CURRENT_DISPOSAL > 0 && (
                          <span>
                            {' '}
                            | <span id="currentDisposal">Current offender</span>
                          </span>
                        )}
                        <Highlighter
                          highlightClassName="highlight"
                          searchWords={searched}
                          autoEscape={true}
                          textToHighlight={
                            ' | ' +
                            Utils.pipeGender(data.GENDER_ID) +
                            ', ' +
                            Utils.pipeAge(data.DATE_OF_BIRTH_DATE)
                          }
                        />
                      </span>
                    )}
                  </p>

                  {this.additionalResults().map((item, i) => (
                    <div key={i}>
                      <Highlighter
                        highlightClassName="highlight"
                        searchWords={searched}
                        autoEscape={true}
                        textToHighlight={item}
                      />
                    </div>
                  ))}

                  <p className="no-margin-bottom">
                    {!restricted && (
                      <span>
                        <button
                          className="tiny inline-primary"
                          onClick={() => {
                            this.props.click(this.props.id);
                          }}>
                          View
                        </button>{' '}
                        <button
                          id={'contact-' + this.props.id}
                          className="tiny inline-secondary">
                          Manage
                        </button>{' '}
                        <button
                          id={'contact-' + this.props.id}
                          className="tiny"
                          onClick={this.props.contact}>
                          Add contact
                        </button>
                      </span>
                    )}
                    {!!restricted && (
                      <span>
                        {data.CURRENT_RESTRICTION
                          ? data.RESTRICTION_MESSAGE
                          : data.EXCLUSION_MESSAGE}
                      </span>
                    )}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
