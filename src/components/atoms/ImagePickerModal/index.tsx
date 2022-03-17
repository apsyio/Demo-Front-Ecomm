import {Text, View} from 'native-base';
import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import type {ImageOrVideo} from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-crop-picker';

import {cameraOptions} from '~/constants/camera';
import uploader from '~/services/uploader';
import {Colors} from '~/styles';

import {CustomSpinner} from '..';

export default function ImagePickerModal({
  onChange,
  visible,
  close,
}: {
  onChange: any;
  visible: boolean;
  close: any;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const onSuccessImagePick = async (image: ImageOrVideo) => {
    try {
      setIsLoading(true);
      const data: any = await uploader(image);

      if (data?.uploadedUrl) {
        onChange?.(data?.uploadedUrl);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const chooseImage = async () => {
    try {
      const image = await ImagePicker.openPicker(cameraOptions);
      onSuccessImagePick(image);
    } catch (error) {
      console.log(error);
    } finally {
      close();
    }
  };

  const openCamera = async () => {
    try {
      const image = await ImagePicker.openCamera(cameraOptions);
      onSuccessImagePick(image);
    } catch (error) {
      console.log(error);
    } finally {
      close();
    }
  };

  return (
    <>
      <CustomSpinner visible={isLoading} />
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={close}>
        <TouchableWithoutFeedback onPress={close}>
          <View
            flex={1}
            justifyContent={'flex-end'}
            alignItems={'center'}
            bg={Colors.BLACK_TRANSPARENT}>
            <SafeAreaView
              style={{
                backgroundColor: Colors.WHITE,
                flexDirection: 'row',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                }}
                onPress={chooseImage}>
                <Text>Library </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                }}
                onPress={openCamera}>
                <Text>Camera</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}
