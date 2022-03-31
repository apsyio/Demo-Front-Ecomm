import type {IImageProps} from 'native-base';
import {Image} from 'native-base';
import React from 'react';

import images from '~/assets/images';

export default function Logo(
  props: JSX.IntrinsicAttributes & IImageProps & React.RefAttributes<unknown>,
) {
  return (
    <Image
      alt="logo"
      resizeMode="contain"
      height={30}
      width={30}
      source={images.logo}
      {...props}
    />
  );
}
