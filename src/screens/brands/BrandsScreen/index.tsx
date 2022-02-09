import {FlatList} from 'native-base';
import React from 'react';

import {CustomContainer} from '~/components/atoms';
import BrandCard from '~/components/atoms/BrandCard';
import {navigate} from '~/navigation/methods';

export default function BrandsScreen() {
  return (
    <CustomContainer p={3}>
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
          <BrandCard
            key={item.id}
            uri={item.uri}
            tags={item.tags}
            onPress={() => navigate('BrandDetails', {id: item.id})}
          />
        )}
      />
    </CustomContainer>
  );
}
