import React from 'react';

import OnboardingScreen from '~/screens/OnboardingScreen';
import {render} from '~/test/utils';

jest.mock('react-native-pager-view', () => {
  const React = require('react');
  const {View} = require('react-native');
  return class ViewPager extends React.Component {
    // *********************
    // THIS WAS MISSING
    setPage() {}
    setPageWithoutAnimation() {}
    setScrollEnabled() {}
    // *********************

    render() {
      const {
        children,
        initialPage,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected,
        style,
        scrollEnabled,
        accessibilityLabel,
      } = this.props;

      return (
        <View
          testID={this.props.testID}
          initialPage={initialPage}
          onPageScroll={onPageScroll}
          onPageScrollStateChanged={onPageScrollStateChanged}
          onPageSelected={onPageSelected}
          style={style}
          scrollEnabled={scrollEnabled}
          accessibilityLabel={accessibilityLabel}>
          {children}
        </View>
      );
    }
  };
});

// Describing a test suite
describe('<OnboardingScreen />', () => {
  // Describing our test
  it('should display titles, button', async () => {
    const {getByText} = render(<OnboardingScreen />);

    getByText('Special and stylish');
    getByText('Use the best materials');
    getByText('Variety in color and size');

    getByText("Let's go");
  });
});
