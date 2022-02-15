import {Button, Center, FlatList, HStack, Image, Text, View} from 'native-base';
import React, {useState} from 'react';

import images from '~/assets/images';
import {CustomContainer, ImageCard} from '~/components/atoms';
import {ResponseStatus} from '~/generated/graphql';
import useGetAllBrands from '~/hooks/brand/useGetBrands';
import useSetBrands from '~/hooks/inspo/useSetBrands';
import {goBack} from '~/navigation/methods';
import {useStore} from '~/store';
import {Colors} from '~/styles';

export default function SelectFavoriteBrandScreen() {
  const [brandIds, setBrandIds] = useState<number[]>([]);

  const setIsUserLoggedIn = useStore(state => state.setIsUserLoggedIn);

  const {isRefetching, data, fetchNextPage, hasNextPage, refetch} =
    useGetAllBrands({});

  const {mutate} = useSetBrands();

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
        refreshing={isRefetching}
        onRefresh={refetch}
        keyExtractor={(item, index) =>
          item?.id ? item?.id?.toString() : index?.toString()
        }
        data={data?.pages}
        renderItem={({item}) => (
          <ImageCard
            containerStyle={{width: '50%', marginTop: 10}}
            {...item}
            uri={item?.thumbnail}
            onPress={() => {
              if (brandIds?.includes(item.id)) {
                setBrandIds(prev => prev?.filter(a => a !== item.id));
              } else {
                setBrandIds(prev => [...prev, item.id]);
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
              {brandIds?.includes(item.id) && (
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
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
      />

      <HStack justifyContent="space-around" my={2}>
        <Button variant="outline" width={'45%'} onPress={() => goBack()}>
          Back
        </Button>

        <Button
          variant="primary"
          width={'45%'}
          onPress={() => {
            if (brandIds && brandIds?.length > 0) {
              mutate(brandIds, {
                onSuccess: res => {
                  if (res.user_setBrands?.status === ResponseStatus.Success) {
                    setIsUserLoggedIn(true);
                  }
                },
              });
            } else {
              setIsUserLoggedIn(true);
            }
          }}>
          Next
        </Button>
      </HStack>
    </CustomContainer>
  );
}
