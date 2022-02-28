import {Formiz, useForm} from '@formiz/core';
import {isEmail} from '@formiz/validations';
import {Button, Text} from 'native-base';
import React from 'react';

import {
  AvatarWithTitle,
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
} from '~/components/atoms';
import useGetInspoByInspoId from '~/hooks/inspo/useGetInspo';
import useUpdateUser from '~/hooks/inspo/useUpdateUser';
import {navigate} from '~/navigation/methods';
import {useStore} from '~/store';

export default function EditProfileInformationScreen() {
  const userId = useStore(state => state.userId);
  const {inspo} = useGetInspoByInspoId(userId);

  const {mutate} = useUpdateUser();

  const editForm = useForm();

  const handleSubmit = (values: any) => {
    console.log(values);

    mutate(values, {
      onSuccess: data => {
        console.log('data', data);
        navigate('MyProfile');
      },
    });
  };

  return (
    <CustomContainer>
      <CustomKeyboardAwareScrollView>
        <Formiz onValidSubmit={handleSubmit} connect={editForm}>
          <AvatarWithTitle uri={inspo?.avatarUrl} title={inspo?.fullName} />

          <Text fontWeight={'bold'} fontSize="lg" mb={3}>
            Information
          </Text>

          <CustomInput
            defaultValue={inspo?.fullName}
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
            required="Full Name is required"
          />

          <CustomInput
            defaultValue={inspo?.email}
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
            defaultValue={inspo?.phone}
            label="Phone Number"
            name="phone"
            placeholder="Enter your phone number"
          />

          <CustomInput
            defaultValue={inspo?.bio}
            multiline
            minHeight={150}
            label="Bio"
            name="bio"
            placeholder="Enter your bio"
          />

          <Button
            isDisabled={!editForm.isValid}
            my={5}
            variant={'primary'}
            onPress={editForm.submit}>
            Done
          </Button>
        </Formiz>
      </CustomKeyboardAwareScrollView>
    </CustomContainer>
  );
}
