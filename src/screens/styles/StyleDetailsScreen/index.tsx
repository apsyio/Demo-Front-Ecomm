import {HStack, Image, ScrollView, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {CustomContainer, ImageCard, StyleOrBrandCard} from '~/components/atoms';
import BrandCard from '~/components/atoms/BrandCard';
import {noImageUrl} from '~/constants/image';
import useGetStyleByStyleId from '~/hooks/styles/useGetStyleByStyleId';
import {navigate} from '~/navigation/methods';

export default function StyleDetailsScreen({route}: any) {
  const id = route.params?.id;

  const {styleDetails} = useGetStyleByStyleId(id);

  return (
    <CustomContainer>
      <ScrollView>
        <StyleOrBrandCard {...styleDetails} />

        <View mt={3}>
          <ScrollView horizontal>
            {styleDetails?.photos?.map(photo => (
              <HStack key={photo} mr={2}>
                <View>
                  {styleDetails?.colors?.map(c => (
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
                  source={{uri: photo ?? noImageUrl}}
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
            {styleDetails?.brands?.map(brand => (
              <BrandCard
                key={brand?.id}
                thumbnail={brand?.thumbnail}
                onPress={() =>
                  navigate('BrandDetails', {
                    id: brand?.id,
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
            {styleDetails?.inspos?.map(inspo => (
              <ImageCard
                containerStyle={{marginRight: 10}}
                key={inspo?.id}
                uri={inspo?.thumbnail}
                onPress={() =>
                  navigate('BrandDetails', {
                    id: inspo?.id,
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
