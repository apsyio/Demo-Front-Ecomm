import {FlatList} from 'native-base';
import React from 'react';

import {Container, ImageCard} from '~/components/atoms';
import {navigate} from '~/navigation/methods';

export default function InspoScreen() {
  return (
    <Container p={3}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        data={[
          {
            id: 1,
            title: 'Isabella Hutton',
            uri: 'https://picsum.photos/200',
          },
          {
            id: 2,
            title: 'Isabella Hutton',
            uri: 'https://picsum.photos/200',
          },
          {
            id: 3,
            title: 'Isabella Hutton',
            uri: 'https://picsum.photos/200',
          },
          {
            id: 4,
            title: 'Isabella Hutton',
            uri: 'https://picsum.photos/200',
          },
        ]}
        renderItem={({item}) => (
          <ImageCard
            containerStyle={{marginTop: 16}}
            hasBorder
            {...item}
            bottomTitle={item.title}
            onPress={() => navigate('MyProfile', {id: item.id})}
          />
        )}
      />
    </Container>
  );
}
