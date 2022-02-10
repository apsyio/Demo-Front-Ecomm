import {Formiz, useForm} from '@formiz/core';
import {Button, ScrollView, View} from 'native-base';
import React from 'react';

import {CustomContainer, PhotoInput} from '~/components/atoms';
import {navigate} from '~/navigation/methods';

export default function CreateClosetScreen() {
  const form = useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <CustomContainer>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Formiz onValidSubmit={handleSubmit} connect={form}>
          <View flex={1}>
            <PhotoInput
              name="image"
              onChange={e => console.log('e', e?.path)}
              required="Image is required"
            />
          </View>

          {form.values?.image && (
            <Button
              mt={3}
              mb={5}
              onPress={() => navigate('TagClothes')}
              variant={'outline'}
              borderRadius="md">
              Tag Clothes
            </Button>
          )}

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
