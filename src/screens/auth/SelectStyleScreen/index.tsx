import {
  Button,
  Center,
  FlatList,
  HStack,
  Icon,
  Image,
  Text,
  View,
} from 'native-base';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import images from '~/assets/images';
import {ImageCard} from '~/components/atoms';
import {Colors} from '~/styles';

export default function SelectStyleScreen({
  navigation: {navigate, goBack},
}: any) {
  const [style, setStyle] = useState();

  return (
    <View flex={1} p={5}>
      <FlatList
        ListHeaderComponent={() => (
          <Center>
            <Image
              alt="logo"
              resizeMode="contain"
              height={30}
              width={200}
              source={images.logo}
            />

            <Text textAlign={'center'} fontSize={'xl'} my={5}>
              Whats your style?
            </Text>
          </Center>
        )}
        mt={10}
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

            <Text color={style === item.id ? Colors.ROUGE : Colors.SHADY_LADY}>
              {item.title}
            </Text>
          </View>
        )}
      />

      <HStack justifyContent="space-around" my={2}>
        <Button
          variant="outline"
          width={'45%'}
          onPress={() => navigate('SelectFavoriteBrand')}>
          Back
        </Button>

        <Button variant="primary" width={'45%'} onPress={() => goBack()}>
          Next
        </Button>
      </HStack>
    </View>
  );
}
