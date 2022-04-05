import {Button, Center, FlatList, HStack, Text} from 'native-base';
import React, {useState} from 'react';

import {
  CustomCheckBox,
  CustomContainer,
  ImageCard,
  Logo,
} from '~/components/atoms';
import {ResponseStatus} from '~/generated/graphql';
import useGetAllBrands from '~/hooks/brand/useGetBrands';
import useSetBrands from '~/hooks/inspo/useSetBrands';
import {goBack, navigate} from '~/navigation/methods';

export default function SelectFavoriteBrandScreen() {
  const [brandIds, setBrandIds] = useState<number[]>([]);

  const {isRefetching, data, fetchNextPage, hasNextPage, refetch} =
    useGetAllBrands({});

  const {mutate} = useSetBrands();

  return (
    <CustomContainer>
      <FlatList
        ListHeaderComponent={() => (
          <Center>
            <Logo />

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
            <CustomCheckBox
              alignSelf={'flex-end'}
              checked={brandIds?.includes(item.id)}
            />
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
                  const status = res.user_setBrands?.status;
                  if (status === ResponseStatus.Success) {
                    navigate('SelectAccountType');
                  }
                },
              });
            } else {
              navigate('SelectAccountType');
            }
          }}>
          Next
        </Button>
      </HStack>
    </CustomContainer>
  );
}
