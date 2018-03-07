// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Header from './Header';

import Feedback from '../scenes/feedback/components/Feedback';
import Search from '../scenes/search/components/Search';
import CurrentCases from '../scenes/current-cases/components/CurrentCases';
import SfpsrRouter from '../scenes/sfpsr/components/SfpsrRouter';
import OffenderSummary from '../scenes/offender-summary/components/OffenderSummary';

const App = () => (
  <div>
    <Header />
    <div id="main-container">
      <Navigation />
      <div id="main-container-content">
        <main>
          <Switch>
            <Route exact path="/" component={CurrentCases} />
            <Route exact path="/offender-summary" component={OffenderSummary} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/search" component={Search} />
            <Route path="/sfpsr" component={SfpsrRouter} />
          </Switch>
        </main>
      </div>
    </div>
  </div>
);

export default App;
