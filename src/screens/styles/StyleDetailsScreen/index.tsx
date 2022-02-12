import {HStack, Image, ScrollView, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {CustomContainer, ImageCard, StyleOrBrandCard} from '~/components/atoms';
import BrandCard from '~/components/atoms/BrandCard';
import {navigate} from '~/navigation/methods';

export default function StyleDetailsScreen({route}: any) {
  const id = route.params?.id;
  console.log('id', id);

  return (
    <CustomContainer>
      <ScrollView>
        <StyleOrBrandCard
          uri="https://picsum.photos/200"
          title="Cottage core"
          likesCount={12}
        />
        <View mt={3}>
          <ScrollView horizontal>
            {[
              {
                id: 1,
                imageUrl: 'https://picsum.photos/200',
                colors: ['#ff0', '#f0f', '#0ff'],
              },
              {
                id: 2,
                imageUrl: 'https://picsum.photos/200',
                colors: ['#ff0', '#f0f'],
              },
              {
                id: 3,
                imageUrl: 'https://picsum.photos/200',
                colors: ['#ff0', '#f0f', '#0ff'],
              },
              {
                id: 4,
                imageUrl: 'https://picsum.photos/200',
                colors: ['#ff0', '#f0f'],
              },
            ].map(({imageUrl, colors}) => (
              <HStack key={imageUrl} mr={2}>
                <View>
                  {colors.map(c => (
                    <View
                      key={c}
                      rounded="full"
                      mb={2}
                      mr={2}
                      bg={c}
                      width={5}
                      height={5}
                    />
                  ))}
                </View>
                <Image
                  borderRadius={'2xl'}
                  mr={2}
                  width={130}
                  height={160}
                  source={{uri: imageUrl}}
                />
              </HStack>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{marginVertical: 20, alignItems: 'center'}}
          onPress={() => console.log(null)}>
          <Text>Show More</Text>
        </TouchableOpacity>

        <Text mb={3} fontSize={'xl'}>
          Brands
        </Text>

        <View>
          <ScrollView horizontal>
            {[
              {
                id: 1,
                sizes: ['CASUAL', 'STREET CASUAL'],
                thumbnail: 'https://picsum.photos/200',
              },
              {
                id: 2,
                sizes: ['CASUAL', 'STREET CASUAL'],
                thumbnail: 'https://picsum.photos/200',
              },
              {
                id: 3,
                sizes: ['CASUAL', 'ELEGANT'],
                thumbnail: 'https://picsum.photos/200',
              },
              {
                id: 4,
                sizes: ['CASUAL', 'SPORT CASUAL'],
                thumbnail: 'https://picsum.photos/200',
              },
            ].map(item => (
              <BrandCard
                key={item.id}
                thumbnail={item.thumbnail}
                onPress={() =>
                  navigate('BrandDetails', {
                    id: item.id,
                  })
                }
              />
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{marginBottom: 20, alignItems: 'center'}}
          onPress={() => navigate('Brands')}>
          <Text>Show More</Text>
        </TouchableOpacity>

        <Text mb={3} fontSize={'xl'}>
          Get some inspirations
        </Text>

        <View>
          <ScrollView horizontal>
            {[
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
            ].map(item => (
              <ImageCard
                containerStyle={{marginRight: 10}}
                key={item.id}
                uri={item.uri}
                onPress={() =>
                  navigate('BrandDetails', {
                    id: item.id,
                  })
                }
              />
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{marginVertical: 20, alignItems: 'center'}}
          onPress={() => navigate('Inspo')}>
          <Text>Show More</Text>
        </TouchableOpacity>
      </ScrollView>
    </CustomContainer>
  );
}
