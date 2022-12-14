import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock('@react-native-google-signin/google-signin', () => {});

jest.mock('react-native-image-crop-picker', () => {
  return {
    __esModule: true,
    openPicker: jest.fn(() => 'mocked baz'),
  };
});

jest.mock('react-native-autocomplete-dropdown', () => {
  // do nothing.
});

jest.mock('rn-fetch-blob', () => {
  // do nothing.
});

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = require('react-native').ScrollView;
  return {KeyboardAwareScrollView};
});

const mockedFirebaseAuthSignInWithCustomToken = jest.fn();
const mockedFirebaseAuthSignUpWithCustomToken = jest.fn();
const mockedSendPasswordResetEmail = jest.fn();
jest.mock('@react-native-firebase/auth', () => () => {
  return {
    signInWithEmailAndPassword: mockedFirebaseAuthSignInWithCustomToken,
    createUserWithEmailAndPassword: mockedFirebaseAuthSignUpWithCustomToken,
    sendPasswordResetEmail: mockedSendPasswordResetEmail,
  };
});
