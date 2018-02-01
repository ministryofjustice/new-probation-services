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
                    <p className="text-bold">01/01/2018</p>
                  </td>
                  <td>
                    <div className="timeline-item">
                      <p className="text-large no-margin-top">
                        Manchester and Salford Magistrates Court
                      </p>
                      <p>Weights and measures act</p>
                      <p className="no-margin-bottom">Pre-sentence report</p>
                      <p>
                        <button
                          className="tiny inline-primary"
                          onClick={() => {
                            this.props.viewClick();
                          }}>
                          New
                        </button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-bold">23/12/2017</p>
                  </td>
                  <td>
                    <div className="timeline-item">
                      <p className="text-large no-margin-top">
                        Manchester and Salford Magistrates Court
                      </p>
                      <p>Weights and measures act</p>
                      <p className="no-margin-bottom">
                        Adjourned pre-sentence report
                      </p>
                      <p>
                        <button className="tiny inline-primary">View</button>{' '}
                        <button className="tiny inline-secondary">
                          Update
                        </button>{' '}
                        <button className="tiny inline-warn">Delete</button>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-bold">12/10/2017</p>
                  </td>
                  <td>
                    <div className="timeline-item last">
                      <p className="text-large no-margin-top">
                        Manchester and Salford Magistrates Court
                      </p>
                      <p>Weights and measures act</p>
                      <p className="no-margin-bottom">
                        Adjourned pre-sentence report
                      </p>
                      <p>
                        <button className="tiny inline-primary">View</button>{' '}
                        <button className="tiny inline-secondary">
                          Update
                        </button>{' '}
                        <button className="tiny inline-warn">Delete</button>
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
