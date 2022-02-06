import {Button, Icon} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '~/styles';

export default function SocialButton({
  iconName,
  onPress,
}: {
  iconName: string;
  onPress: () => void;
}) {
  return (
    <Button
      width={10}
      height={10}
      backgroundColor={Colors.CHABLIS}
      rounded={'full'}
      fontWeight={'bold'}
      onPress={onPress}>
      <Icon
        as={MaterialCommunityIcons}
        size="5"
        name={iconName}
        color={Colors.ROUGE}
      />
    </Button>
  );
}
