import {FlatList, Text, View} from 'native-base';
import React from 'react';

import {Container, ImageCard} from '~/components/atoms';
import {Colors} from '~/styles';

export default function BrandsScreen({navigation: {navigate}}: any) {
  return (
    <Container p={3}>
      <FlatList
        numColumns={2}
        data={[
          {
            id: 1,
            tags: ['CASUAL', 'STREET CASUAL'],
            uri: 'https://picsum.photos/200',
          },
          {
            id: 2,
            tags: ['CASUAL', 'STREET CASUAL'],
            uri: 'https://picsum.photos/200',
          },
          {
            id: 3,
            tags: ['CASUAL', 'ELEGANT'],
            uri: 'https://picsum.photos/200',
          },
          {
            id: 4,
            tags: ['CASUAL', 'SPORT CASUAL'],
            uri: 'https://picsum.photos/200',
          },
          {id: 5, tags: ['CASUAL', 'EXOTIC'], uri: 'https://picsum.photos/200'},
          {id: 6, tags: ['CASUAL', 'GRUNGE'], uri: 'https://picsum.photos/200'},
        ]}
        renderItem={({item}) => (
          <View
            p={2}
            borderWidth={1}
            borderColor={Colors.GALLERY}
            borderRadius="3xl"
            flex={0.5}
            m={1}
            mt={4}>
            <ImageCard hasBorder {...item} onPress={() => navigate('Home')} />

            <Text
              fontWeight={'bold'}
              numberOfLines={1}
              fontSize={'sm'}
              color={Colors.SEA_PINK}
              mt={3}
              mb={1}>
              {item.tags.join('   ')}
            </Text>
          </View>
        )}
      />
    </Container>
  );
}