import {HStack, Image, ScrollView, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {CustomContainer, ImageCard, StyleOrBrandCard} from '~/components/atoms';
import {noImageUrl} from '~/constants/image';
import useGetBrandByBrandId from '~/hooks/brand/useGetBrandByBrandId';
import useLikeBrand from '~/hooks/brand/useLikeBrand';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function BrandDetailsScreen({route}: any) {
  const id = route.params?.id;

  const {brandDetails} = useGetBrandByBrandId(id);

  const {mutate} = useLikeBrand();

  return (
    <CustomContainer p={0}>
      <ScrollView>
        <View p={5}>
          <StyleOrBrandCard
            {...brandDetails}
            onPressLike={() => {
              mutate({brandId: id, liked: !brandDetails?.liked});
            }}
          />

          <ScrollView horizontal>
            {brandDetails?.photos?.map((photo, index) => (
              <Image
                key={index}
                borderRadius={'2xl'}
                mr={4}
                width={140}
                height={180}
                source={{uri: photo ?? noImageUrl}}
              />
            ))}
          </ScrollView>
        </View>

        <HStack mt={3} p={5} justifyContent="space-between" bg={Colors.GREEN}>
          <Text color={Colors.WHITE}>Size offered </Text>
          <Text color={Colors.WHITE}>{brandDetails?.sizes?.join('  ')}</Text>
        </HStack>

        <View p={5}>
          <ScrollView horizontal>
            {brandDetails?.styles?.map((item, index) => (
              <Text fontSize={'sm'} key={index} color={Colors.SEA_PINK}>
                {item?.name}
                {'   '}
              </Text>
            ))}
          </ScrollView>

          <TouchableOpacity onPress={() => navigate('Posts')}>
            <View
              my={5}
              p={4}
              borderRadius={'lg'}
              borderWidth={1}
              borderColor={Colors.GALLERY}>
              <HStack justifyContent={'space-between'}>
                <Text>Review</Text>

                <Text fontSize={'sm'} color={Colors.SEA_PINK}>
                  {' '}
                  See More
                </Text>
              </HStack>
              <Text mt={2} fontSize={'sm'} color={Colors.SHADY_LADY}>
                $$$$
              </Text>
            </View>
          </TouchableOpacity>

          <Text fontSize={'xl'} mb={3}>
            Get some inspirations
          </Text>

          <ScrollView horizontal>
            {brandDetails?.inspos?.map((item, index) => (
              <ImageCard
                key={index}
                isSmall
                containerStyle={{marginRight: 10}}
                uri={item?.avatarUrl}
                onPress={() => navigate('Profile', {id: item?.id})}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </CustomContainer>
  );
}
