import Config from 'react-native-config';

import {noImageUrl} from '~/constants/image';
import type {Maybe} from '~/generated/graphql';

export const getImageUrl = (fileName: Maybe<string> | undefined) => {
  if (fileName?.startsWith('http://') || fileName?.startsWith('https://')) {
    return fileName;
  }

  if (fileName) {
    console.log(Config.SAS_CONTAINER_URI + '/images/' + fileName);
    return Config.SAS_CONTAINER_URI + '/images/' + fileName;
  } else {
    return noImageUrl;
  }
};
