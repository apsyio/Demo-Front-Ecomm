import {atomWithToggleAndStorage} from './atomWithToggleAndStorage';
import storage from './storage';

const userIdAtom = atomWithToggleAndStorage('userId', false, {
  ...storage,
  delayInit: true,
});

export default userIdAtom;
