import type {IImageProps} from 'native-base';
import {View} from 'native-base';
import {Image} from 'native-base';
import React from 'react';

import images from '~/assets/images';

export default function Logo(
  props: JSX.IntrinsicAttributes & IImageProps & React.RefAttributes<unknown>,
) {
  return (
    <View justifyContent="center" alignItems={'center'}>
      <Image
        alt="logo"
        resizeMode="contain"
        height={30}
        width={200}
        source={images.logo}
        {...props}
      />
    </View>
  );
}
