import Context, { createContext } from 'react';

import type { Offender } from '../../../_shared/model/Offender.type';

type CurrentContext = {
  offender: Offender
};

const SfpsrContext: Context<CurrentContext> = createContext({
  offender: void 0
});

export default SfpsrContext;
