// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {};
type State = {
  currentOffenders: Array<any>
};

export default class Navigation extends Component<Props, State> {
  /**
   * @constructor
   * @param props {Props} arbitrary inputs
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      currentOffenders: []
    };
  }

  /**
   *
   */
  componentDidMount() {
    const reqListener = (e: any) => {
      const data = JSON.parse(e.target.responseText).hits.hits;
      this.setState(() => {
        return { currentOffenders: data };
      });
    };

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('get', '/data/stub.json', true);
    oReq.send();
  }

  /**
   *
   * @returns {*}
   */
  render() {
    return (
      <div
        id="main-container-navigation"
        className={
          window.location.pathname.indexOf('/sfpsr') !== -1
            ? 'nav collapsed omit-mobile'
            : 'nav omit-mobile'
        }>
        <nav className="fixed fade-in">
          {this.state.currentOffenders.length > 0 && (
            <div className="omit-collapsed margin-top">
              <ul>
                <li>Current Offender List</li>
              </ul>
              <ul>
                <Link
                  to={{
                    pathname: '/offender-summary',
                    state: { offender: this.state.currentOffenders[0]._source }
                  }}>
                  <li>
                    <span className="far fa-user-o" />{' '}
                    {this.state.currentOffenders[0]._source.SURNAME +
                      ', ' +
                      this.state.currentOffenders[0]._source.FIRST_NAME}
                  </li>
                </Link>
                <Link
                  to={{
                    pathname: '/offender-summary',
                    state: { offender: this.state.currentOffenders[4]._source }
                  }}>
                  <li>
                    <span className="far fa-user-o" />{' '}
                    {this.state.currentOffenders[4]._source.SURNAME +
                      ', ' +
                      this.state.currentOffenders[4]._source.FIRST_NAME}
                  </li>
                </Link>
                <Link
                  to={{
                    pathname: '/offender-summary',
                    state: { offender: this.state.currentOffenders[5]._source }
                  }}>
                  <li>
                    <span className="far fa-user-o" />{' '}
                    {this.state.currentOffenders[5]._source.SURNAME +
                      ', ' +
                      this.state.currentOffenders[5]._source.FIRST_NAME}
                  </li>
                </Link>
                <Link
                  to={{
                    pathname: '/offender-summary',
                    state: { offender: this.state.currentOffenders[3]._source }
                  }}>
                  <li>
                    <span className="far fa-user-o" />{' '}
                    {this.state.currentOffenders[3]._source.SURNAME +
                      ', ' +
                      this.state.currentOffenders[3]._source.FIRST_NAME}
                  </li>
                </Link>
              </ul>
              <hr />
            </div>
          )}

          <ul>
            <li>
              <Link to="/search">
                <span className="far fa-search" /> Search
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="far fa-clipboard" /> Cases
              </Link>
            </li>
            <li>
              <span className="far fa-file-text-o" /> Documents
            </li>
            <li>
              <span className="far fa-tags" /> Tags
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <span className="far fa-bell-o" /> Alerts &amp; notifications
            </li>
          </ul>

          <hr />
          <ul>
            <li>
              <Link to="/feedback">
                <span className="far fa-comment" /> Give feedback
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
