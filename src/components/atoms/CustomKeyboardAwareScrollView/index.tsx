import React from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

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
