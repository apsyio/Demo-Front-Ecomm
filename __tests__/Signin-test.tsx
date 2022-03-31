import 'react-native';

import {fireEvent, render} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {SigninScreen} from '~/screens/auth';

// import { render } from 'utils/testWrapper';

// Describing a test suite
describe('<Button />', () => {
  // Describing our test
  it('Calls onPress', async () => {
    // Mocking onPress method so we can check if its called or not
    const onPress = jest.fn();

    // test id to be applied on our button component
    const testID = 'signinButton';

    // Rendering Button component using react-native-test-renderer.
    const queryClient = new QueryClient();

    const res = render(
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <SigninScreen />
        </NativeBaseProvider>
      </QueryClientProvider>,
    );

    const wrapper = ({children}) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    console.log({wrapper});
    // Grabbing our button component to perform actions on it.
    const button = res.queryByTestId(testID);

    /**
     * RNTL gives us API to fire events on node
     * Here we are firing on press event
     */
    if (button) {
      fireEvent.press(button);
    }

    // Asserting if given mock method is called or not.
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
