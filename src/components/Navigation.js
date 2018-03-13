// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RecentOffendersContext from '../scenes/_shared/data/RecentOffendersContext';

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
      console.info(e.target.responseText);
      const data = JSON.parse(e.target.responseText).offenders;
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
      <div id="main-container-navigation" className="nav omit-mobile">
        <nav className="fixed fade-in">
          <p>&nbsp;</p>

          <RecentOffendersContext.Consumer>
            {context => {
              return (
                <div>
                  {context.offenders.length > 0 && (
                    <div className="omit-tablet">
                      <ul>
                        <li>Recent offender List</li>
                      </ul>
                      <ul>
                        {context.offenders.map((offender, i) => (
                          <Link
                            key={i}
                            to={{
                              pathname: '/offender-summary',
                              state: {
                                offender: offender
                              }
                            }}>
                            <li>
                              <span className="far fa-user-o" />{' '}
                              {offender.SURNAME + ', ' + offender.FIRST_NAME}
                            </li>
                          </Link>
                        ))}
                      </ul>
                      <hr />
                    </div>
                  )}
                </div>
              );
            }}
          </RecentOffendersContext.Consumer>

          {this.state.currentOffenders &&
            this.state.currentOffenders.length > 0 && (
              <div className="omit-tablet">
                <ul>
                  <li>Current offender List</li>
                </ul>
                <ul>
                  <Link
                    to={{
                      pathname: '/offender-summary',
                      state: {
                        offender: this.state.currentOffenders[0]._source
                      }
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
                      state: {
                        offender: this.state.currentOffenders[4]._source
                      }
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
                      state: {
                        offender: this.state.currentOffenders[5]._source
                      }
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
                      state: {
                        offender: this.state.currentOffenders[3]._source
                      }
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
                <span className="far fa-search" />
                <span className="omit-tablet"> Search</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="far fa-clipboard" />
                <span className="omit-tablet"> Cases</span>
              </Link>
            </li>
            <li>
              <span className="far fa-file-text-o" />
              <span className="omit-tablet"> Documents</span>
            </li>
            <li>
              <span className="far fa-tags" />
              <span className="omit-tablet"> Tags</span>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <span className="far fa-bell-o" />
              <span className="omit-tablet"> Alerts &amp; notifications</span>
            </li>
          </ul>

          <hr />
          <ul>
            <li>
              <Link to="/feedback">
                <span className="far fa-comment" />
                <span className="omit-tablet"> Give feedback</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
