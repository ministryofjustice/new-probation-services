import React, { Component } from 'react';

type Props = {
  restricted: boolean,
  offender: Object
};
type State = {
  addressOpen: any
};

export default class OffenderSummaryAssessments extends Component<
  Props,
  State
> {
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
            <h3 className="text-bold">Assessments</h3>
          </div>
        )}
      </div>
    );
  }
}
