// @flow
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Start from './components/Start';
import OffenderDetails from './components/OffenderDetails';
import OffenceAnalysis from './components/OffenceAnalysis';
import RiskAssessment from './components/RiskAssessment';
import SignYourReport from './components/SignYourReport';
import Conclusion from './components/Conclusion';
import CourtDetails from './components/CourtDetails';
import SourceOfInformation from './components/SourceOfInformation';
import OffenderAssessment from './components/OffenderAssessment';
import ReportComplete from './components/ReportComplete';
import OffenceDetails from './components/OffenceDetails';
import SaveDraft from './components/SaveDraft';
import SfpsrContext from './data/SfpsrContext';

type Props = {
  location: any
};

export default class SfpsrRouter extends Component<Props> {
  render() {
    return (
      <SfpsrContext.Provider
        value={{ offender: this.props.location.state.offender }}>
        <Switch>
          <Route exact path="/sfpsr" component={Start} />
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
      </SfpsrContext.Provider>
    );
  }
}
