import {Button, Center, FlatList, HStack, Text, View} from 'native-base';
import React, {useState} from 'react';

import {
  CustomCheckBox,
  CustomContainer,
  ImageCard,
  Logo,
} from '~/components/atoms';
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
            <Logo />

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
              <CustomCheckBox
                alignSelf={'flex-end'}
                checked={styleIds?.includes(item.id)}
              />
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
