import {Formiz, useForm} from '@formiz/core';
import {Button, ScrollView, View} from 'native-base';
import React from 'react';

import {CustomContainer, CustomInput} from '~/components/atoms';
import {navigate} from '~/navigation/methods';

export default function TagClothesScreen({route}: any) {
  const {outfitName, photo, closetItems, xCoordinate, yCoordinate} =
    route.params;

  const form = useForm();

  const handleSubmit = (values: any) => {
    navigate('CreateCloset', {
      outfitName,
      photo,
      closetItems: [
        ...closetItems,
        {
          xCoordinate,
          yCoordinate,
          name: values.name,
          url: values.url,
        },
      ],
    });
  };

  return (
    <CustomContainer>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Formiz onValidSubmit={handleSubmit} connect={form}>
          <View flex={1}>
            <CustomInput
              label="Item Name"
              name="name"
              placeholder="Enter Item name "
              required="Item name is required"
            />

            <CustomInput
              label="Item link"
              name="url"
              placeholder="Enter Item link "
              required="Item link is required"
            />
          </View>

          <Button
            isDisabled={!form.isValid}
            onPress={form.submit}
            variant={'primary'}>
            Done
          </Button>
        </Formiz>
      </ScrollView>
    </CustomContainer>
  );
}
