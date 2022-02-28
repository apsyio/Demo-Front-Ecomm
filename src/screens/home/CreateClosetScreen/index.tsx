import {Formiz, useForm} from '@formiz/core';
import {useIsFocused} from '@react-navigation/native';
import {Button, ScrollView, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Linking} from 'react-native';

import {CustomContainer, CustomTag, PhotoInput} from '~/components/atoms';
import {ClosetItems, ResponseStatus} from '~/generated/graphql';
import useCreateCloset from '~/hooks/closet/useCreateCloset';
import {goBack, navigate} from '~/navigation/methods';
import {deviceHeight, deviceWidth} from '~/utils/style';

export default function CreateClosetScreen({route}: any) {
  const {photo, closetItems: closetItemsInParams} = route?.params || {};

  const [closetItems, setClosetItems] = useState<ClosetItems[]>([]);

  const {mutate} = useCreateCloset();

  const form = useForm();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!form.values.photo) {
      setClosetItems([]);
    }
  }, [form.values.photo]);

  useEffect(() => {
    form.setFieldsValues({photo});
  }, [closetItemsInParams, isFocused, photo]);

  useEffect(() => {
    if (isFocused) {
      setClosetItems(closetItemsInParams);
    }
  }, [closetItemsInParams, isFocused, photo]);

  const handleSubmit = (values: any) => {
    console.log({photo: values.photo, closetItems});

    mutate(
      {photo: values?.photo, closetItems},
      {
        onSuccess: data => {
          if (data.closet_createCloset?.status === ResponseStatus.Success) {
            goBack();
          }
        },
      },
    );
  };

  return (
    <CustomContainer>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Formiz onValidSubmit={handleSubmit} connect={form}>
          <View flex={1}>
            <PhotoInput name="photo" required="Image is required" />

            {closetItems?.map(
              ({name, url, yCoordinate, xCoordinate}: ClosetItems) => (
                <CustomTag
                  key={url}
                  name={name}
                  top={+((deviceHeight * yCoordinate) / 100).toFixed(0)}
                  left={+((deviceWidth * xCoordinate) / 100).toFixed(0)}
                  onPress={() => {
                    if (url) {
                      Linking.openURL(url);
                    }
                  }}
                  onPressRemove={() => {
                    setClosetItems(prev =>
                      prev.filter(item => item.yCoordinate !== yCoordinate),
                    );
                  }}
                />
              ),
            )}
          </View>

          {form.values?.photo && (
            <Button
              mt={3}
              mb={5}
              onPress={() =>
                navigate('SelectItemForTag', {
                  photo: form.values.photo,
                  closetItems,
                })
              }
              variant={'outline'}
              borderRadius="md">
              Tag Clothes
            </Button>
          )}

          <Button
            isDisabled={!form.isValid}
            onPress={form.submit}
            variant={'primary'}>
            Confirm
          </Button>
        </Formiz>
      </ScrollView>
    </CustomContainer>
  );
}
