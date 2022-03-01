import React from 'react';
import type {KeyboardAwareScrollViewProps} from 'react-native-keyboard-aware-scroll-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CustomKeyboardAwareScrollView = ({
  children,
  ...otherProps
}: KeyboardAwareScrollViewProps) => {
  return (
    <KeyboardAwareScrollView enableResetScrollToCoords={false} {...otherProps}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default CustomKeyboardAwareScrollView;
