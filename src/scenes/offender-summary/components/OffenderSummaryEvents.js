import React, { Component } from 'react';

type Props = {
  restricted: boolean,
  offender: Object
};
type State = {
  addressOpen: any
};

export default class OffenderSummaryEvents extends Component<Props, State> {
  /**
   *
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
    const restricted = this.props.restricted;

    return (
      <div>
        {restricted !== 1 && (
          <div>
            <h3 className="text-bold">Events</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>&nbsp;</p>

            <table role="presentation">
              <tbody>
                <tr>
                  <td>
                    <p className="text-bold">
                      {new Date().toLocaleDateString('en-GB')}
                    </p>
                  </td>
                  <td>
                    <div className="timeline-item">
                      <p className="text-large no-margin-top">
                        Malicious wounding and other like offences
                        (misdemeanours)
                      </p>
                      <p>Assault PC (Indictable/Either way) - 00807</p>
                      <p className="no-margin-bottom">Sheffield Crown Court</p>
                      <p>
                        <button className="tiny inline-primary">View</button>{' '}
                        <button className="tiny inline-secondary">
                          Update
                        </button>{' '}
                        <button className="tiny">Transfer</button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-small align-right">
                    {new Date().toLocaleDateString('en-GB')}
                  </td>
                  <td>
                    <div className="timeline-item last">
                      <p className="text-bold no-margin-top">
                        09:00 - Court Appearance: Sheffield Crown Court
                      </p>
                      <p className="no-margin-bottom">
                        Adjourned - Pre-Sentence Report
                      </p>
                      <p>
                        <button className="tiny inline-primary">View</button>{' '}
                        <button className="tiny inline-secondary">
                          Update
                        </button>{' '}
                        <button
                          className="tiny"
                          onClick={() => {
                            this.props.viewClick();
                          }}>
                          Create report
                        </button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-bold">23/05/2016</p>
                  </td>
                  <td>
                    <div className="timeline-item">
                      <p className="text-large no-margin-top">
                        Malicious wounding and other like offences
                        (misdemeanours)
                      </p>
                      <p>Assault PC (Indictable/Either way) - 00807</p>
                      <p className="no-margin-bottom">Sheffield Crown Court</p>
                      <p>
                        <button className="tiny inline-primary">View</button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-small align-right">23/05/2016</td>
                  <td>
                    <div className="timeline-item">
                      <p className="text-bold no-margin-top">
                        11:15 - Court Appearance: Sheffield Crown Court
                      </p>
                      <p className="no-margin-bottom">Remanded in custody</p>
                      <p>
                        <button className="tiny inline-primary">View</button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-small align-right">23/05/2016</td>
                  <td>
                    <div className="timeline-item">
                      <p className="text-bold no-margin-top">
                        09:30 - Report Created: Short Format Pre-Sentence Report
                      </p>
                      <p className="no-margin-bottom">
                        Risk of serious harm | Substance misuse issue
                      </p>
                      <p>
                        <button className="tiny inline-primary">View</button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-small align-right">23/05/2016</td>
                  <td>
                    <div className="timeline-item last">
                      <p className="text-bold no-margin-top">
                        09:00 - Court Appearance: Sheffield Crown Court
                      </p>
                      <p className="no-margin-bottom">
                        Adjourned - Pre-Sentence Report
                      </p>
                      <p>
                        <button className="tiny inline-primary">View</button>
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p className="text-bold">12/10/2015</p>
                  </td>
                  <td>
                    <div className="timeline-item">
                      <p className="text-large no-margin-top">
                        Vehicle insurance offences
                      </p>
                      <p>Making false statement to obtain insurance - 80902</p>
                      <p className="no-margin-bottom">
                        Luton and South Bedfordshire Magistrates Court
                      </p>
                      <p>
                        <button className="tiny inline-primary">View</button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-small align-right">12/10/2015</td>
                  <td>
                    <div className="timeline-item">
                      <p className="text-bold no-margin-top">
                        11:15 - Court Appearance: Luton and South Bedfordshire
                        Magistrates Court
                      </p>
                      <p className="no-margin-bottom">Community order</p>
                      <p>
                        <button className="tiny inline-primary">View</button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-small align-right">12/10/2015</td>
                  <td>
                    <div className="timeline-item">
                      <p className="text-bold no-margin-top">
                        09:30 - Report Created: Short Format Pre-Sentence Report
                      </p>
                      <p className="no-margin-bottom">
                        Risk of serious harm | Substance misuse issue
                      </p>
                      <p>
                        <button className="tiny inline-primary">View</button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-small align-right">12/10/2015</td>
                  <td>
                    <div className="timeline-item last">
                      <p className="text-bold no-margin-top">
                        09:00 - Court Appearance: Luton and South Bedfordshire
                        Magistrates Court
                      </p>
                      <p className="no-margin-bottom">
                        Adjourned - Pre-Sentence Report
                      </p>
                      <p>
                        <button className="tiny inline-primary">View</button>
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
