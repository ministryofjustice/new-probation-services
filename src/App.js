// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Header from './components/Header';

import Feedback from './scenes/feedback/FeedbackScene';
import Search from './scenes/search/SearchScene';
import CurrentCases from './scenes/current-cases/CurrentCasesScene';
import SfpsrRouter from './scenes/sfpsr/SfpsrRouter';
import OffenderSummary from './scenes/offender-summary/OffenderSummaryScene';

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
