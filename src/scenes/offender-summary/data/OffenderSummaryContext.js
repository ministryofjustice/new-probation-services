import Context, { createContext } from 'react';

import type { Offender } from '../model/Offender.type';

type SummaryContext = {
  offender: Offender
};

const OffenderSummaryContext: Context<SummaryContext> = createContext({
  offender: void 0
});

export default OffenderSummaryContext;
