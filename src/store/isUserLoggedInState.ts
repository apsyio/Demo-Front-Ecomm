import {atom} from 'recoil';

import persistAtom from './persistAtom';
const isUserLoggedInState = atom({
  key: 'isUserLoggedInState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom('is-user-logged-in-storage-key')],
});

export default isUserLoggedInState;
