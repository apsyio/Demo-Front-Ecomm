import {Center, FlatList, HStack, ScrollView, Text, View} from 'native-base';
import React from 'react';
import {Linking} from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

import {
  AvatarWithTitle,
  CustomContainer,
  ImageCard,
  SocialButton,
} from '~/components/atoms';
import {SocialNetworks} from '~/generated/graphql';
import useGetInspoByInspoId from '~/hooks/inspo/useGetInspo';
import {navigate} from '~/navigation/methods';

export default function ProfileScreen({route}: any) {
  const id = route?.params?.id;
  const {inspo} = useGetInspoByInspoId(id);

  return (
    <CustomContainer>
      <ScrollView>
        <AvatarWithTitle title={inspo?.fullName || ''} uri={inspo?.avatarUrl} />

        <Center>
          <HStack>
            <SocialButton
              iconName="instagram"
              onPress={() => {
                const address = inspo?.socials?.find(
                  a => a?.socialNetworks === SocialNetworks.Instagram,
                )?.address;
                if (address) {
                  Linking.openURL(address);
                }
              }}
            />
            <View mx={3} />
            <SocialButton
              iconName="pinterest"
              onPress={() => {
                const address = inspo?.socials?.find(
                  a => a?.socialNetworks === SocialNetworks.Pinterest,
                )?.address;
                if (address) {
                  Linking.openURL(address);
                }
              }}
            />
            <View mx={3} />
            <SocialButton
              iconType={FontAwesome5Pro}
              iconName="tiktok"
              onPress={() => {
                const address = inspo?.socials?.find(
                  a => a?.socialNetworks === SocialNetworks.TikTok,
                )?.address;
                if (address) {
                  Linking.openURL(address);
                }
              }}
            />
          </HStack>
        </Center>

        <Text fontSize={'xl'} mt={3} mb={1}>
          Bio
        </Text>
        <Text mb={5}>{inspo?.bio}</Text>

        <Text fontSize={'xl'} mt={3}>
          Creator Closet
        </Text>

        <FlatList
          numColumns={3}
          data={inspo?.closets}
          renderItem={({item}) => (
            <ImageCard
              key={item?.id}
              containerStyle={{marginTop: 12}}
              isSmall
              uri={item?.photo}
              onPress={() => {
                if (item?.photo) {
                  navigate('Outfit', {photo: item?.photo});
                }
              }}
            />
          )}
        />

        <Text fontSize={'xl'} mt={7} mb={2}>
          Favorite Brand
        </Text>

        <ScrollView horizontal>
          {inspo?.brands?.map(item => (
            <ImageCard
              key={item?.id}
              containerStyle={{marginRight: 12}}
              isSmall
              uri={item?.thumbnail}
              onPress={() => navigate('BrandDetails', {id: item?.id})}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </CustomContainer>
  );
}
