import {Toast} from 'native-base';
import {Platform} from 'react-native';
import Config from 'react-native-config';
import RNFetchBlob from 'rn-fetch-blob';

const uploader = async (response: any) => {
  const {path, filename, mime} = response;

  return new Promise(async (resolve, reject) => {
    try {
      const sasContainerUri = Config.SAS_CONTAINER_URI;
      const customBlobName = Math.random().toString(16).slice(2);
      const fileExtension = filename.split('.').pop();
      const newFileName = `${customBlobName}.${fileExtension}`;
      const container = 'images';
      const sasToken = Config.SAS_TOKEN; // you may need to play with other html verbs in this string e.g., `sp`, `ss` e.t.c.
      const assetPath = `${sasContainerUri}/${container}/${newFileName}`;

      const localUri =
        Platform.OS === 'ios' ? path.replace('file://', '/') : path;

      const res = await RNFetchBlob.fetch(
        'PUT',
        `${assetPath}?${sasToken}`,
        {
          'x-ms-blob-type': 'BlockBlob',
          'content-type': 'application/octet-stream',
          'x-ms-blob-content-type': mime ?? 'image/png',
        },
        RNFetchBlob.wrap(decodeURIComponent(localUri)),
      );
      if (res.respInfo.status === 201) {
        resolve({
          ...res,
          uploadedFileName: newFileName,
          uploadedUrl: res?.respInfo?.redirects?.[0],
        });
      }
    } catch (error) {
      console.log(error, 'error');

      Toast.show({
        title: 'Error',
        status: 'error',
        description: JSON.stringify(error),
      });

      reject(error);
    } finally {
    }
  });
};

export default uploader;
