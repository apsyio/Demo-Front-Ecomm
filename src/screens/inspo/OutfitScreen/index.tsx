import {Image} from 'native-base';
import React from 'react';

import {CustomContainer} from '~/components/atoms';
import {deviceHeight} from '~/utils/style';

export default function OutfitScreen({route}: any) {
  const photo = route?.params?.photo;

  return (
    <CustomContainer>
      <Image
        borderRadius={'2xl'}
        height={deviceHeight - 170}
        source={{uri: photo}}
      />
    </CustomContainer>
  );
}
