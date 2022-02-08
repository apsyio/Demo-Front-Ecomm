import {Formiz, useForm} from '@formiz/core';
import {isEmail} from '@formiz/validations';
import {Button, View} from 'native-base';
import React from 'react';

import {Container} from '~/components/atoms';
import {CustomInput} from '~/components/atoms/CustomInput';

export default function SupportScreen() {
  const supportForm = useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Container>
      <Formiz onValidSubmit={handleSubmit} connect={supportForm}>
        <View flex={1}>
          <CustomInput
            label="Full Name"
            name="fullName"
            placeholder="Full Name"
            required="Full Name is required"
          />

          <CustomInput
            label="Email"
            name="email"
            placeholder="Email"
            required="Email is required"
            validations={[
              {
                rule: isEmail(),
                message: 'Email is invalid',
              },
            ]}
          />

          <CustomInput
            multiline
            numberOfLines={4}
            minHeight={150}
            label="Message"
            name="Message"
            placeholder="Message"
            required="Message is required"
          />
        </View>
        <Button my={5} variant={'primary'} onPress={supportForm.submit}>
          Send
        </Button>
      </Formiz>
    </Container>
  );
}
