import {atomWithStorage} from 'jotai/utils';

import storage from './storage';

const userIdAtom = atomWithStorage('userId', 0, {
  ...storage,
  delayInit: true,
});

export default userIdAtom;
