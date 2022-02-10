import {Formiz, useForm} from '@formiz/core';
import {Button, ScrollView, View} from 'native-base';
import React from 'react';

import {CustomContainer, CustomInput} from '~/components/atoms';
import {navigate} from '~/navigation/methods';

export default function TagClothesScreen() {
  const form = useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
    navigate('Profile', {...values});
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
              name="link"
              placeholder="Enter Item link "
              required="Item link is required"
            />
          </View>

          <Button
            disabled={!form.isValid}
            onPress={form.submit}
            variant={'primary'}>
            Confirm
          </Button>
        </Formiz>
      </ScrollView>
    </CustomContainer>
  );
}
