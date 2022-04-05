import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import type {RenderOptions} from '@testing-library/react-native';
import {render} from '@testing-library/react-native';
import {GraphQLClient} from 'graphql-request';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import type {ColorSchemeName} from 'react-native';
import Config from 'react-native-config';
import {QueryClient, QueryClientProvider} from 'react-query';

export function createWrapper(themeMode?: ColorSchemeName) {
  // Create a React Query client for testing
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        retry: false,
        // Prevent "Jest did not exit one second after the test run completed"
        // https://github.com/tannerlinsley/react-query/issues/1847
        cacheTime: Infinity,
      },
    },
  });

  // Tests use local msw mock API server
  const testGraphQLEndpoint = Config.API_URL;
  const graphQLClientTestState = {
    graphQLClient: new GraphQLClient(testGraphQLEndpoint),
  };

  // Set the theme according to the provided theme mode
  const theme = themeMode === 'dark' ? DarkTheme : DefaultTheme;

  const wrapper = ({children}: {children: React.ReactNode}) => {
    return (
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider
          initialWindowMetrics={{
            frame: {x: 0, y: 0, width: 0, height: 0},
            insets: {top: 0, left: 0, right: 0, bottom: 0},
          }}>
          <NavigationContainer theme={theme}>
            <React.Suspense fallback={null}>{children}</React.Suspense>
          </NavigationContainer>
        </NativeBaseProvider>
      </QueryClientProvider>
    );
  };

  return wrapper;
}

function customRender(
  component: React.ReactElement<any>,
  options?: RenderOptions,
  themeMode?: ColorSchemeName,
) {
  return render(component, {wrapper: createWrapper(themeMode), ...options});
}

export * from '@testing-library/react-native';

export {customRender as render};
