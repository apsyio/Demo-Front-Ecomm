import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function CustomKeyboardAwareScrollView({children}: any) {
  return (
    <KeyboardAwareScrollView enableResetScrollToCoords={false}>
      {children}
    </KeyboardAwareScrollView>
  );
}
