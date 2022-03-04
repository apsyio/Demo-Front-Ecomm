import {atom} from 'recoil';

import persistAtom from './persistAtom';

const isOnboardingViewedState = atom({
  key: 'isOnboardingViewedState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom('in-onboarding-viewed-storage-key')],
});

export default isOnboardingViewedState;
