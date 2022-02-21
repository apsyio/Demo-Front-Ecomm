import {Formiz, useForm} from '@formiz/core';
import {Button, Text} from 'native-base';
import React from 'react';

import {
  AvatarWithTitle,
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
} from '~/components/atoms';
import {SocialNetworks} from '~/generated/graphql';
import useGetInspoByInspoId from '~/hooks/inspo/useGetInspo';
import useUpdateUser from '~/hooks/inspo/useUpdateUser';
import {navigate} from '~/navigation/methods';
import {useStore} from '~/store';

export default function EditProfileSocialNetworksScreen() {
  const userId = useStore(state => state.userId);
  const {inspo} = useGetInspoByInspoId(userId);

  const {mutate} = useUpdateUser();

  const editForm = useForm();

  const handleSubmit = (values: any) => {
    mutate(
      {
        socials: [
          {address: values.instagram, socialNetworks: SocialNetworks.Instagram},
          {address: values.tikTok, socialNetworks: SocialNetworks.TikTok},
          {address: values.pinterest, socialNetworks: SocialNetworks.Pinterest},
        ],
      },
      {
        onSuccess: data => {
          console.log('data', data);
          navigate('MyProfile');
        },
      },
    );
  };
  return (
    <CustomContainer>
      <CustomKeyboardAwareScrollView>
        <Formiz onValidSubmit={handleSubmit} connect={editForm}>
          <AvatarWithTitle uri={inspo?.avatarUrl} title={inspo?.fullName} />

          <Text fontWeight={'bold'} fontSize="lg" mb={3}>
            Social Network
          </Text>

          <CustomInput
            defaultValue={
              inspo?.socials?.find(
                a => a?.socialNetworks === SocialNetworks.Instagram,
              )?.address
            }
            label="Instagram"
            name="instagram"
            placeholder="Enter Your Instagram Link"
          />

          <CustomInput
            defaultValue={
              inspo?.socials?.find(
                a => a?.socialNetworks === SocialNetworks.TikTok,
              )?.address
            }
            label="TikTok"
            name="tikTok"
            placeholder="Enter Your TikTok Link"
          />

          <CustomInput
            defaultValue={
              inspo?.socials?.find(
                a => a?.socialNetworks === SocialNetworks.Pinterest,
              )?.address
            }
            label="Pinterest"
            name="pinterest"
            placeholder="Enter Your Pinterest Link"
          />

          <Button my={5} variant={'primary'} onPress={editForm.submit}>
            Done
          </Button>
        </Formiz>
      </CustomKeyboardAwareScrollView>
    </CustomContainer>
  );
}
