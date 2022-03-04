import {atom} from 'recoil';

const activeTabState = atom({
  key: 'activeTabState', // unique ID (with respect to other atoms/selectors)
  default: 'Home', // default value (aka initial value)
});

export default activeTabState;
