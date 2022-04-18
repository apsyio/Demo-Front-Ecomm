import {HStack, Icon, Image, ScrollView, Text, View} from 'native-base';
import React, {useLayoutEffect} from 'react';
import {Platform, Share, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {CustomContainer, ImageCard, StyleOrBrandCard} from '~/components/atoms';
import BrandCard from '~/components/atoms/BrandCard';
import {noImageUrl} from '~/constants/image';
import useGetStyleByStyleId from '~/hooks/styles/useGetStyleByStyleId';
import useLikeStyle from '~/hooks/styles/useLikeStyle';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function StyleDetailsScreen({navigation, route}: any) {
  const id = route.params?.id;

  const {styleDetails} = useGetStyleByStyleId(id);

  const {mutate} = useLikeStyle();

  useLayoutEffect(() => {
    if (Platform.OS === 'ios') {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              Share.share({
                message: 'cuethecurves://StyleDetails/' + id,
              });
            }}>
            <Icon
              color={Colors.SHADY_LADY}
              as={MaterialCommunityIcons}
              name="share-variant"
            />
          </TouchableOpacity>
        ),
      });
    }
  }, [id, navigation]);

  return (
    <CustomContainer>
      <ScrollView>
        <StyleOrBrandCard
          {...styleDetails}
          onPressLike={() => {
            mutate({styleId: id, liked: !styleDetails?.liked});
          }}
        />

        <View mt={3}>
          <ScrollView horizontal>
            {styleDetails?.photos?.map(photo => (
              <HStack key={photo.key} mr={2}>
                <View>
                  {photo?.value?.map(c => (
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
                  source={{uri: photo?.key ?? noImageUrl}}
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
                {...brand}
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
                uri={inspo?.avatarUrl}
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
