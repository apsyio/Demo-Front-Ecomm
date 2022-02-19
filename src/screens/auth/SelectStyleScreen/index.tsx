import {
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Text,
  Toast,
  View,
} from 'native-base';
import React, {useState} from 'react';

import images from '~/assets/images';
import {CustomContainer, ImageCard} from '~/components/atoms';
import {ResponseStatus} from '~/generated/graphql';
import useSetStyles from '~/hooks/inspo/useSetStyles';
import useGetStyles from '~/hooks/styles/useGetStyles';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function SelectStyleScreen() {
  const [styleIds, setStyleIds] = useState<number[]>([]);

  const {isRefetching, data, fetchNextPage, hasNextPage, refetch} =
    useGetStyles({});

  const {mutate} = useSetStyles();

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
              Whats Your Style?
            </Text>
          </Center>
        )}
        mt={10}
        numColumns={2}
        refreshing={isRefetching}
        onRefresh={refetch}
        keyExtractor={(item, index) =>
          item?.id ? item?.id?.toString() : index?.toString()
        }
        data={data?.pages}
        renderItem={({item}) => (
          <View style={{width: '50%', marginTop: 10}}>
            <ImageCard
              {...item}
              uri={item?.thumbnail}
              onPress={() => {
                if (styleIds?.includes(item.id)) {
                  setStyleIds(prev => prev?.filter(a => a !== item.id));
                } else {
                  setStyleIds(prev => [...prev, item.id]);
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
                {styleIds?.includes(item.id) && (
                  <View
                    bg={Colors.SEA_PINK}
                    borderRadius={4}
                    width={4}
                    height={4}
                  />
                )}
              </Center>
            </ImageCard>

            <Text
              color={
                styleIds?.includes(item.id) ? Colors.ROUGE : Colors.EMPRESS
              }>
              {item.name}
            </Text>
          </View>
        )}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
      />

      <HStack justifyContent="space-around" my={2}>
        {/* <Button
          variant="outline"
          width={'45%'}
          onPress={() => navigate('SelectFavoriteBrand')}>
          Back
        </Button> */}

        <Button
          variant="primary"
          width={'100%'}
          onPress={() => {
            if (styleIds && styleIds?.length > 0) {
              mutate(styleIds, {
                onSuccess: res => {
                  const status = res.user_setStyles?.status;
                  if (status === ResponseStatus.Success) {
                    navigate('SelectFavoriteBrand');
                  } else {
                    Toast.show({
                      title: 'Error',
                      status: 'error',
                      description: status,
                    });
                  }
                },
              });
            } else {
              navigate('SelectFavoriteBrand');
            }
          }}>
          Next
        </Button>
      </HStack>
    </CustomContainer>
  );
}
