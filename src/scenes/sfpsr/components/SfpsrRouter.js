// @flow
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Start from './Start';
import OffenderDetails from './OffenderDetails';
import OffenceAnalysis from './OffenceAnalysis';
import RiskAssessment from './RiskAssessment';
import SignYourReport from './SignYourReport';
import Conclusion from './Conclusion';
import CourtDetails from './CourtDetails';
import SourceOfInformation from './SourceOfInformation';
import OffenderAssessment from './OffenderAssessment';
import ReportComplete from './ReportComplete';
import OffenceDetails from './OffenceDetails';
import SaveDraft from './SaveDraft';
import SfpsrContext from '../data/SfpsrContext';

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
