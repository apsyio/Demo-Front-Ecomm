import {atom} from 'recoil';

import persistAtom from './persistAtom';

const userIdState = atom({
  key: 'userIdState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom('user-id-storage-key')],
});

export default userIdState;
