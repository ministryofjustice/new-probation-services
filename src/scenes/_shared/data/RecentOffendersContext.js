import Context, { createContext } from 'react';

import type { Offender } from '../model/Offender.type';

type RecentContext = {
  offenders: Array<Offender>
};

const RecentOffendersContext: Context<RecentContext> = createContext({
  offenders: []
});

export default RecentOffendersContext;
