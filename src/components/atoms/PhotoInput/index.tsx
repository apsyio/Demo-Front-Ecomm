import {useField} from '@formiz/core';
import {Button, FormControl, HStack, Icon, Stack, Text} from 'native-base';
import React, {memo, useEffect, useState} from 'react';
import type {ImageProps} from 'react-native';
import {ImageBackground, TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '~/styles';
import {getImageUrl} from '~/utils/image';

import ImagePickerModal from '../ImagePickerModal';

interface PhotoInputProps extends ImageProps {
  onChange?: (file: string) => void;
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

  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);

  return (
    <>
      <ImagePickerModal
        visible={visible}
        close={close}
        onChange={(uploadedFileName: string) => {
          if (uploadedFileName) {
            setValue(uploadedFileName);
            props.onChange?.(uploadedFileName);
          }
        }}
      />

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
            <>
              {value && (
                <TouchableOpacity
                  onPress={() => {
                    setValue(undefined);
                    props.onChange?.(null);
                  }}>
                  <HStack
                    borderRadius={'sm'}
                    alignItems={'center'}
                    position={'absolute'}
                    right={-60}
                    top={0}
                    p={2}
                    bg={Colors.CHABLIS}>
                    <Icon
                      size={'sm'}
                      as={MaterialCommunityIcon}
                      name="delete"
                      color={Colors.RED}
                    />
                    <Text>Delete</Text>
                  </HStack>
                </TouchableOpacity>
              )}

              {
                //@ts-ignore
                value || props.source?.uri ? (
                  <ImageBackground
                    style={{width: 180, height: 300}}
                    resizeMode="contain"
                    // height={180}
                    {...props}
                    source={
                      value
                        ? {
                            uri: getImageUrl(value),
                          }
                        : getImageUrl(props.source)
                    }
                  />
                ) : (
                  <HStack alignItems="center">
                    <Icon
                      as={MaterialCommunityIcon}
                      size="sm"
                      name={'plus'}
                      color={Colors.SHADY_LADY}
                    />
                    <Text py={20} color={Colors.SHADY_LADY}>
                      Add your photo
                    </Text>
                  </HStack>
                )
              }
            </>
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

export default memo(PhotoInput);
