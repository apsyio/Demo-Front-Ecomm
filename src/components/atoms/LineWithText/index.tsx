import {HStack, Text, View} from 'native-base';
import React, {memo} from 'react';
import {Colors} from 'src/styles';

export default memo(function LineWithText({text}: {text: string}) {
  return (
    <HStack>
      <View
        backgroundColor={Colors.SHADY_LADY}
        height={0.5}
        flex={1}
        alignSelf={'center'}
      />
      <Text alignSelf={'center'} px={3} color={Colors.SHADY_LADY}>
        {text}
      </Text>
      <View
        backgroundColor={Colors.SHADY_LADY}
        height={0.5}
        flex={1}
        alignSelf={'center'}
      />
    </HStack>
  );
});
