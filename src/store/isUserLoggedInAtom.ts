import {atomWithToggleAndStorage} from './atomWithToggleAndStorage';
import storage from './storage';

const isUserLoggedInAtom = atomWithToggleAndStorage(
  'isUserLoggedInAtom',
  false,
  {
    ...storage,
    delayInit: true,
  },
);

export default isUserLoggedInAtom;
