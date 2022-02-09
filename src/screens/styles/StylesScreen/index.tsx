import {FlatList, View} from 'native-base';
import React from 'react';

import {CustomContainer, ImageCard} from '~/components/atoms';
import {navigate} from '~/navigation/methods';

export default function StylesScreen() {
  return (
    <CustomContainer>
      <FlatList
        numColumns={2}
        data={[
          {id: 1, title: 'CASUAL', uri: 'https://picsum.photos/200'},
          {id: 2, title: 'STREET CASUAL', uri: 'https://picsum.photos/200'},
          {id: 3, title: 'ELEGANT', uri: 'https://picsum.photos/200'},
          {id: 4, title: 'SPORT CASUAL', uri: 'https://picsum.photos/200'},
          {id: 5, title: 'EXOTIC', uri: 'https://picsum.photos/200'},
          {id: 6, title: 'GRUNGE', uri: 'https://picsum.photos/200'},
        ]}
        renderItem={({item}) => (
          <View style={{width: '50%', marginTop: 10}}>
            <ImageCard
              {...item}
              onPress={() => navigate('StyleDetails', {id: item.id})}
            />
          </View>
        )}
      />
    </CustomContainer>
  );
}
