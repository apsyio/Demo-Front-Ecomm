console.error = () => null;
import 'react-native';
import '@testing-library/jest-native/extend-expect';

import {cleanup, fireEvent, waitFor} from '@testing-library/react-native';
import React from 'react';

import useSignup from '~/hooks/auth/useSignup';
import {navigate} from '~/navigation/methods';
import {SignupScreen} from '~/screens/auth';
import {render} from '~/test/utils';

jest.useFakeTimers();

const mockUseSignup = useSignup as jest.Mock<
  Partial<ReturnType<typeof useSignup>>
>;
jest.mock('~/hooks/auth/useSignup');

const myNavigate = navigate as jest.Mock<Partial<ReturnType<typeof navigate>>>;

jest.mock('~/navigation/methods');

describe('<SignupScreen />', () => {
  afterAll(() => {
    jest.clearAllMocks();
    cleanup();
  });

  let mockMutate = () => null;
  beforeEach(() => {
    mockMutate = jest.fn();

    mockUseSignup.mockReturnValue({
      isLoading: false,
      mutate: mockMutate,
    });
  });

  it('should show validation empty errors if inputs are empty', async () => {
    const {getByText} = render(<SignupScreen />);

    const button = getByText('Sign Up');

    fireEvent.press(button);

    await waitFor(() => {
      getByText('Email address is required');
      getByText('Password is required');
    });
  });

  it('should show validation errors if inputs are not invalid', async () => {
    const {getByText, getByPlaceholderText} = render(<SignupScreen />);

    const email = getByPlaceholderText('Email');
    fireEvent.changeText(email, 'a@a');

    const password = getByPlaceholderText('Password');
    fireEvent.changeText(password, '12345');

    const button = getByText('Sign Up');
    fireEvent.press(button);

    await waitFor(() => {
      getByText('Email is invalid');
      getByText('Password should be at least 6 characters');
    });
  });

  it('should call signup mutation if all fields are valid', async () => {
    const {getByPlaceholderText, getByText} = render(<SignupScreen />);

    const email = getByPlaceholderText('Email');
    fireEvent.changeText(email, 'a@a.com');

    const password = getByPlaceholderText('Password');
    fireEvent.changeText(password, '123456');

    const button = getByText('Sign Up');

    fireEvent.press(button);

    await waitFor(() => {
      expect(button).not.toBeDisabled();
      expect(mockMutate).toHaveBeenCalledTimes(1);
    });
  });

  it('should call signin on press Sign in now', async () => {
    const {getByText} = render(<SignupScreen />);

    const signinButton = getByText('Sign In Now');
    fireEvent.press(signinButton);

    await waitFor(() => {
      expect(myNavigate).toHaveBeenCalledWith('Signin');
    });
  });
});
