console.error = () => null;
import 'react-native';
import '@testing-library/jest-native/extend-expect';

import {cleanup, fireEvent, waitFor} from '@testing-library/react-native';
import React from 'react';

import useSignin from '~/hooks/auth/useSignin';
import {navigate} from '~/navigation/methods';
import {SigninScreen} from '~/screens/auth';
import {render} from '~/test/utils';

jest.useFakeTimers();

const mockUseSignin = useSignin as jest.Mock<
  Partial<ReturnType<typeof useSignin>>
>;
jest.mock('~/hooks/auth/useSignin');

const myNavigate = navigate as jest.Mock<Partial<ReturnType<typeof navigate>>>;

jest.mock('~/navigation/methods');

describe('<SigninScreen />', () => {
  afterAll(() => {
    jest.clearAllMocks();
    cleanup();
  });

  const mockMutate = jest.fn();

  beforeEach(() => {
    mockUseSignin.mockReturnValue({
      isLoading: false,
      mutate: mockMutate,
    });
  });

  it('should show validation empty errors if inputs are empty', async () => {
    const {getByText} = render(<SigninScreen />);

    const button = getByText('Sign in');

    fireEvent.press(button);

    await waitFor(() => {
      getByText('Email address is required');
      getByText('Password is required');
    });
  });

  it('should show validation errors if inputs are not invalid', async () => {
    const {getByText, getByPlaceholderText} = render(<SigninScreen />);

    const email = getByPlaceholderText('Email');
    fireEvent.changeText(email, 'a@a');

    const password = getByPlaceholderText('Password');
    fireEvent.changeText(password, '12345');

    const button = getByText('Sign in');
    fireEvent.press(button);

    await waitFor(() => {
      getByText('Email is invalid');
      getByText('Password should be at least 6 characters');
    });
  });

  it('should call signin mutation if all fields are valid', async () => {
    const {getByPlaceholderText, getByText} = render(<SigninScreen />);

    const email = getByPlaceholderText('Email');
    fireEvent.changeText(email, 'a@a.com');

    const password = getByPlaceholderText('Password');
    fireEvent.changeText(password, '123456');

    const button = getByText('Sign in');

    fireEvent.press(button);

    await waitFor(() => {
      expect(button).not.toBeDisabled();
      expect(mockMutate).toHaveBeenCalledTimes(1);
    });
  });
});
