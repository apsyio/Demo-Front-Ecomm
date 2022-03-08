import {atomWithStorage} from 'jotai/utils';

import storage from './storage';

const activeTabAtom = atomWithStorage('activeTab', 'Home', {
  ...storage,
  delayInit: true,
});

export default activeTabAtom;
