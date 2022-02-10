import {useField} from '@formiz/core';
import {
  Button,
  FormControl,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  View,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  ImageProps,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {cameraOptions} from '~/constants/camera';
import {Colors} from '~/styles';

interface PhotoInputProps extends ImageProps {
  onChange?: (file: ImageOrVideo) => void;
}

const PhotoInput = React.forwardRef((props: PhotoInputProps, ref) => {
  const {id, isValid, isSubmitted, resetKey, setValue, value, errorMessage} =
    useField(props);

  const {
    label,
    helper,
    placeholder,
    type,
    isDisabled,
    required,
    formatValue,
    keepValue,
    asyncValidations,
    defaultValue,
    ...otherProps
  } = props;

  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  //@ts-ignore

  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);

  const chooseImage = async () => {
    try {
      const image = await ImagePicker.openPicker(cameraOptions);
      setValue(image.path);
      props.onChange?.(image);
    } catch (error) {
      console.log(error);
    } finally {
      close();
    }
  };

  const openCamera = async () => {
    try {
      const image = await ImagePicker.openCamera(cameraOptions);
      setValue(image.path);
      props.onChange?.(image);
    } catch (error) {
      console.log(error);
    } finally {
      close();
    }
  };

  return (
    <>
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

      <FormControl
        isRequired={!!required}
        isInvalid={showError}
        isDisabled={isDisabled}
        mb={3}>
        <Stack>
          {!!label && <FormControl.Label mt={2}>{label}</FormControl.Label>}

          <Button
            ref={ref}
            id={id}
            onPress={() => {
              setIsTouched(true);
              open();
            }}
            borderWidth={1}
            borderColor={showError ? Colors.RED : Colors.SHADY_LADY}
            borderStyle={'dashed'}
            backgroundColor={Colors.WHITE}>
            {
              //@ts-ignore
              value || props.source?.uri ? (
                <Image
                  width={150}
                  height={150}
                  {...props}
                  source={
                    value
                      ? {
                          uri: value,
                        }
                      : props.source
                  }
                />
              ) : (
                <HStack alignItems="center">
                  <Icon
                    as={MaterialCommunityIcons}
                    size="sm"
                    name={'plus'}
                    color={Colors.SHADY_LADY}
                  />
                  <Text py={3} color={Colors.SHADY_LADY}>
                    Add your photo
                  </Text>
                </HStack>
              )
            }
          </Button>

          <FormControl.ErrorMessage>
            {showError && errorMessage}
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </>
  );
});

PhotoInput.displayName = 'PhotoInput';

export default PhotoInput;
