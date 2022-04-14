console.error = () => null;
import 'react-native';
import '@testing-library/jest-native/extend-expect';

import {cleanup, fireEvent, waitFor} from '@testing-library/react-native';
import React from 'react';

import {navigate} from '~/navigation/methods';
import {ForgotPasswordScreen} from '~/screens/auth';
import {render} from '~/test/utils';

jest.useFakeTimers();

const myNavigate = navigate as jest.Mock<Partial<ReturnType<typeof navigate>>>;

jest.mock('~/navigation/methods');

let mockedSendPasswordResetEmail = () => null;
jest.mock('@react-native-firebase/auth', () => () => {
  return {
    sendPasswordResetEmail: mockedSendPasswordResetEmail,
  };
});

describe('<ForgotPasswordScreen />', () => {
  afterAll(() => {
    jest.clearAllMocks();
    cleanup();
  });

  const mockMutate = jest.fn();

  beforeEach(() => {
    mockedSendPasswordResetEmail = jest.fn();
  });

  it('should show validation empty errors if inputs are empty', async () => {
    const {getByText} = render(<ForgotPasswordScreen />);

    const button = getByText('Send');

    fireEvent.press(button);

    await waitFor(() => {
      getByText('Email address is required');
    });
  });

  it('should show validation errors if inputs are not invalid', async () => {
    const {getByText, getByPlaceholderText} = render(<ForgotPasswordScreen />);

    const email = getByPlaceholderText('Email');
    fireEvent.changeText(email, 'a@a');

    const button = getByText('Send');
    fireEvent.press(button);

    await waitFor(() => {
      getByText('Email is invalid');
    });
  });

  it('should call signin mutation if all fields are valid', async () => {
    const {getByPlaceholderText, getByText} = render(<ForgotPasswordScreen />);

    const email = getByPlaceholderText('Email');
    fireEvent.changeText(email, 'a@a.com');

    const button = getByText('Send');

    fireEvent.press(button);

    await waitFor(() => {
      expect(button).not.toBeDisabled();
      expect(mockedSendPasswordResetEmail).toHaveBeenCalledTimes(1);
    });
  });

  it('should call signup on press Sign Up Now', async () => {
    const {getByText} = render(<ForgotPasswordScreen />);

    const signupButton = getByText('Sign Up Now');
    fireEvent.press(signupButton);

    await waitFor(() => {
      expect(myNavigate).toHaveBeenCalledWith('Signup');
    });
  });
});
