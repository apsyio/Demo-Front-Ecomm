import {Center, FlatList, HStack, ScrollView, Text, View} from 'native-base';
import React from 'react';

import {
  AvatarWithTitle,
  Container,
  ImageCard,
  SocialButton,
} from '~/components/atoms';
import {navigate} from '~/navigation/methods';

export default function MyProfileScreen({route}: any) {
  const id = route?.params?.id;

  return (
    <Container p={5}>
      <ScrollView>
        <AvatarWithTitle title="Anna Howard" uri="https://picsum.photos/200" />

        <Center>
          <HStack>
            <SocialButton iconName="instagram" onPress={() => null} />
            <View mx={3} />
            <SocialButton iconName="pinterest" onPress={() => null} />
            <View mx={3} />
            <SocialButton iconName="tiktok" onPress={() => null} />
          </HStack>
        </Center>

        <Text fontSize={'xl'} mt={3} mb={1}>
          Bio
        </Text>
        <Text mb={5}>
          Cupidatat cupidatat nulla irure ipsum mollit laborum nostrud ea.
          Consequat id aliquip labore tempor consectetur laborum exercitation
          nostrud nisi. Anim nostrud consequat deserunt duis exercitation
          nostrud excepteur adipisicing ex magna.
        </Text>

        <Text fontSize={'xl'} mt={3}>
          Creator Closet
        </Text>

        <FlatList
          numColumns={3}
          data={[
            {
              id: 1,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 2,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 3,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 4,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 5,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 6,
              uri: 'https://picsum.photos/200',
            },
          ]}
          renderItem={({item: {uri}}) => (
            <ImageCard
              containerStyle={{marginTop: 12}}
              isSmall
              key={uri}
              uri={uri}
              onPress={() => navigate('Outfit', {uri})}
            />
          )}
        />

        <Text fontSize={'xl'} mt={7} mb={2}>
          Favorite Brand
        </Text>

        <ScrollView horizontal>
          {[
            {
              id: 1,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 2,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 3,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 4,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 5,
              uri: 'https://picsum.photos/200',
            },
            {
              id: 6,
              uri: 'https://picsum.photos/200',
            },
          ].map(({uri}) => (
            <ImageCard
              containerStyle={{marginRight: 12}}
              isSmall
              key={uri}
              uri={uri}
              onPress={() => navigate('BrandDetails', {id})}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </Container>
  );
}
