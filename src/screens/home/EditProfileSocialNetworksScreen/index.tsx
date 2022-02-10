import {Formiz, useForm} from '@formiz/core';
import {Button, ScrollView, Text} from 'native-base';
import React from 'react';

import {
  AvatarWithTitle,
  CustomContainer,
  CustomInput,
} from '~/components/atoms';

export default function EditProfileSocialNetworksScreen() {
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
            Social Network
          </Text>

          <CustomInput
            label="Instagram"
            name="instagram"
            placeholder="Enter Your Instagram Link"
          />

          <CustomInput
            label="TikTok"
            name="tikTok"
            placeholder="Enter Your TikTok Link"
          />

          <CustomInput
            label="Pinterest"
            name="pinterest"
            placeholder="Enter Your Pinterest Link"
          />

          <Button my={5} variant={'primary'} onPress={editForm.submit}>
            Done
          </Button>
        </Formiz>
      </ScrollView>
    </CustomContainer>
  );
}
