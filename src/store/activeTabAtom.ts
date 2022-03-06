import {atomWithToggleAndStorage} from './atomWithToggleAndStorage';
import storage from './storage';

const activeTabAtom = atomWithToggleAndStorage('activeTab', false, {
  ...storage,
  delayInit: true,
});

export default activeTabAtom;
