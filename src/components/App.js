// @flow
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Feedback from '../scenes/feedback/components/Feedback';
import Navigation from './Navigation';
import Search from '../scenes/search/components/Search';
import CurrentCases from '../scenes/current-cases/components/CurrentCases';
import Sfpsr from '../scenes/sfpsr/components/Sfpsr';
import SfpsrNavigation from '../scenes/sfpsr/components/SfpsrNavigation';
import SaveDraft from '../scenes/sfpsr/components/SaveDraft';
import OffenderDetails from '../scenes/sfpsr/components/OffenderDetails';
import CourtDetails from '../scenes/sfpsr/components/CourtDetails';
import SourceOfInformation from '../scenes/sfpsr/components/SourceOfInformation';
import OffenceAnalysis from '../scenes/sfpsr/components/OffenceAnalysis';
import OffenderAssessment from '../scenes/sfpsr/components/OffenderAssessment';
import RiskAssessment from '../scenes/sfpsr/components/RiskAssessment';
import Conclusion from '../scenes/sfpsr/components/Conclusion';
import CheckYourReport from '../scenes/sfpsr/components/CheckYourReport';
import SignYourReport from '../scenes/sfpsr/components/SignYourReport';
import ReportComplete from '../scenes/sfpsr/components/ReportComplete';
import OffenceDetails from '../scenes/sfpsr/components/OffenceDetails';
import OffenderSummary from '../scenes/offender-summary/components/OffenderSummary';

const App = () => (
  <div className="App">
    <div className="grid-row">
      <div className="grid-col nav omit-mobile">
        <Navigation />
      </div>
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
            <Route exact path="/sfpsr" component={Sfpsr} />
            <Route exact path="/sfpsr/save-draft" component={SaveDraft} />
            <Route
              exact
              path="/sfpsr/offender-details"
              component={OffenderDetails}
            />
            <Route exact path="/sfpsr/court-details" component={CourtDetails} />
            <Route
              exact
              path="/sfpsr/sources-of-information"
              component={SourceOfInformation}
            />
            <Route
              exact
              path="/sfpsr/offence-details"
              component={OffenceDetails}
            />
            <Route
              exact
              path="/sfpsr/offence-analysis"
              component={OffenceAnalysis}
            />
            <Route
              exact
              path="/sfpsr/offender-assessment"
              component={OffenderAssessment}
            />
            <Route
              exact
              path="/sfpsr/risk-assessment"
              component={RiskAssessment}
            />
            <Route exact path="/sfpsr/conclusion" component={Conclusion} />
            <Route
              exact
              path="/sfpsr/check-your-report"
              component={CheckYourReport}
            />
            <Route
              exact
              path="/sfpsr/sign-your-report"
              component={SignYourReport}
            />
            <Route
              exact
              path="/sfpsr/report-complete"
              component={ReportComplete}
            />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </div>
  </div>
);

export default App;
