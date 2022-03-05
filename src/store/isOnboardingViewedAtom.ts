import {atomWithToggleAndStorage} from './atomWithToggleAndStorage';
import storage from './storage';

const isOnboardingViewedAtom = atomWithToggleAndStorage(
  'isOnboardingViewed',
  true,
  {
    ...storage,
    delayInit: true,
  },
);

export default isOnboardingViewedAtom;
