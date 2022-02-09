import {Formiz, useForm} from '@formiz/core';
import {isEmail} from '@formiz/validations';
import {Button, ScrollView, Text} from 'native-base';
import React from 'react';

import {AvatarWithTitle, CustomContainer} from '~/components/atoms';
import {CustomInput} from '~/components/atoms/CustomInput';

export default function EditProfileInformationScreen() {
  const editForm = useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <CustomContainer>
      <ScrollView>
        <Formiz onValidSubmit={handleSubmit} connect={editForm}>
          <AvatarWithTitle
            uri="https://picsum.photos/200"
            title="Anna Howard"
          />

          <Text fontWeight={'bold'} fontSize="lg" mb={3}>
            Information
          </Text>

          <CustomInput
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
            required="Full Name is required"
          />

          <CustomInput
            label="Email"
            name="email"
            placeholder="Enter your email"
            required="Email is required"
            validations={[
              {
                rule: isEmail(),
                message: 'Email is invalid',
              },
            ]}
          />

          <CustomInput
            label="Phone Number"
            name="phoneNumber"
            placeholder="Enter your phone number"
          />

          <CustomInput
            multiline
            minHeight={150}
            label="Bio"
            name="bio"
            placeholder="Enter your bio"
          />

          <Button my={5} variant={'primary'} onPress={editForm.submit}>
            Done
          </Button>
        </Formiz>
      </ScrollView>
    </CustomContainer>
  );
}
