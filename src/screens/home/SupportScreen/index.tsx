import {Formiz, useForm} from '@formiz/core';
import {Button, Toast, View} from 'native-base';
import React from 'react';

import {
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
} from '~/components/atoms';
import {ResponseStatus} from '~/generated/graphql';
import useSupportUser from '~/hooks/inspo/useSupportUser';
import {goBack} from '~/navigation/methods';

export default function SupportScreen() {
  const supportForm = useForm();

  const {mutate} = useSupportUser();

  const handleSubmit = (values: any) => {
    console.log(values);
    mutate(values, {
      onSuccess: data => {
        if (data.user_support?.status === ResponseStatus.Success) {
          Toast.show({
            title: 'Success',
            status: 'success',
            description: 'Your message has been sent successfully!',
          });
          goBack();
        }
      },
    });
  };

  return (
    <CustomContainer>
      <CustomKeyboardAwareScrollView>
        <Formiz onValidSubmit={handleSubmit} connect={supportForm}>
          <View flex={1}>
            <CustomInput
              label="Subject"
              name="subject"
              placeholder="Subject"
              required="Subject is required"
            />

            <CustomInput
              multiline
              numberOfLines={4}
              minHeight={150}
              label="Message"
              name="htmlContent"
              placeholder="Message"
              required="Message is required"
            />
          </View>
          <Button my={5} variant={'primary'} onPress={supportForm.submit}>
            Send
          </Button>
        </Formiz>
      </CustomKeyboardAwareScrollView>
    </CustomContainer>
  );
}
