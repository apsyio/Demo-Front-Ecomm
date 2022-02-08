import {Image} from 'native-base';
import React from 'react';

import {Container} from '~/components/atoms';
import {deviceHeight} from '~/utils/style';

export default function OutfitScreen({route}: any) {
  const uri = route?.params?.uri;

  return (
    <Container>
      <Image borderRadius={'2xl'} height={deviceHeight - 170} source={{uri}} />
    </Container>
  );
}
