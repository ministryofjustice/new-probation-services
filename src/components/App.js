// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Feedback from '../scenes/feedback/components/Feedback';
import Navigation from './Navigation';
import Search from '../scenes/search/components/Search';
import CurrentCases from '../scenes/current-cases/components/CurrentCases';
import SfpsrRouter from '../scenes/sfpsr/components/SfpsrRouter';
import SfpsrNavigation from '../scenes/sfpsr/components/SfpsrNavigation';
import OffenderSummary from '../scenes/offender-summary/components/OffenderSummary';
import OffenderSummarySidebar from '../scenes/offender-summary/components/OffenderSummarySidebar';

const App = () => (
  <div className="App">
    <div className="grid-row">
      <Navigation />
      <Switch>
        <Route path="/sfpsr" component={SfpsrNavigation} />
      </Switch>
      <div className="grid-col">
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
      <Switch>
        <Route path="/offender-summary" component={OffenderSummarySidebar} />
      </Switch>
    </div>
  </div>
);

export default App;
