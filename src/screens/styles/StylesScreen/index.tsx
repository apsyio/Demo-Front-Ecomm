import {Center, FlatList, Icon, Text, View} from 'native-base';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, ImageCard} from '~/components/atoms';
import {Colors} from '~/styles';

export default function StylesScreen({navigation: {navigate, goBack}}: any) {
  const [style, setStyle] = useState<number>();

  return (
    <Container>
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
            <ImageCard {...item} onPress={() => setStyle(item.id)}>
              <Center flex={1}>
                {style === item.id && (
                  <Icon
                    as={MaterialCommunityIcons}
                    size="xl"
                    name={'check-circle'}
                    color={Colors.WHITE}
                  />
                )}
              </Center>
            </ImageCard>

            <Text color={style === item.id ? Colors.ROUGE : Colors.EMPRESS}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </Container>
  );
}
