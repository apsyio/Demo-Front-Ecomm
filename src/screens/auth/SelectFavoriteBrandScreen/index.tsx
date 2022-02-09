import {Button, Center, FlatList, HStack, Image, Text, View} from 'native-base';
import React, {useState} from 'react';

import images from '~/assets/images';
import {CustomContainer, ImageCard} from '~/components/atoms';
import {goBack, navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function SelectStyleScreen() {
  const [favoriteBrands, setFavoriteBrands] = useState<number[]>([]);

  return (
    <CustomContainer>
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
              Whats your Favorite brand?
            </Text>
          </Center>
        )}
        my={10}
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
          <ImageCard
            containerStyle={{width: '50%', marginTop: 10}}
            {...item}
            onPress={() => {
              if (favoriteBrands?.includes(item.id)) {
                setFavoriteBrands(prev => prev?.filter(a => a !== item.id));
              } else {
                setFavoriteBrands(prev => [...prev, item.id]);
              }
            }}>
            <Center
              bg={Colors.WHITE}
              borderRadius={7}
              width={6}
              height={6}
              alignSelf="flex-end"
              m={2}
              borderWidth={1}
              borderColor={Colors.SEA_PINK}>
              {favoriteBrands?.includes(item.id) && (
                <View
                  bg={Colors.SEA_PINK}
                  borderRadius={4}
                  width={4}
                  height={4}
                />
              )}
            </Center>
          </ImageCard>
        )}
      />

      <HStack justifyContent="space-around" my={2}>
        <Button variant="outline" width={'45%'} onPress={() => goBack()}>
          Back
        </Button>

        <Button
          variant="primary"
          width={'45%'}
          onPress={() => navigate('MainStack')}>
          Next
        </Button>
      </HStack>
    </CustomContainer>
  );
}
