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
import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import images from '~/assets/images';
import {CustomContainer, ImageCard} from '~/components/atoms';
import {noImageUrl} from '~/constants/image';
import useGetRecommendBrand from '~/hooks/brand/useGetRecommendBrand';
import useGetInspos from '~/hooks/inspo/useGetInspos';
import useGetPosts from '~/hooks/post/useGetUserPosts';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function HomeScreen() {
  const {recommendBrand} = useGetRecommendBrand({});

  const {data: posts} = useGetPosts({});
  const lastPost = posts?.pages?.[0];

  const {data: inspos} = useGetInspos({});
  const topInspo = inspos?.pages?.[0];

  return (
    <CustomContainer pt={0}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <HStack alignItems={'center'} justifyContent={'space-between'}>
              <Image
                alt="logo"
                resizeMode="contain"
                height={30}
                width={200}
                source={images.logo}
              />
              <Button variant={'sub'} onPress={() => navigate('MyProfile')}>
                <Icon
                  as={MaterialCommunityIcons}
                  size="md"
                  name={'account'}
                  color={Colors.SEA_PINK}
                />
              </Button>
            </HStack>

            <Text
              mt={7}
              mb={1}
              fontSize={'lg'}
              color={Colors.ROUGE}
              fontWeight="bold">
              Check this out
            </Text>

            <HStack>
              <Button
                mr={2}
                height={150}
                width={120}
                borderRadius={'2xl'}
                borderWidth={1}
                borderColor={Colors.APRICOT_PEACH}
                variant={'sub'}
                onPress={() => navigate('Brands')}>
                <Center p={5}>
                  <Image
                    height={150}
                    width={120}
                    resizeMode="contain"
                    source={{uri: recommendBrand?.thumbnail ?? noImageUrl}}
                  />
                </Center>
              </Button>

              <TouchableOpacity
                onPress={() => navigate('Inspo')}
                style={{flex: 1}}>
                <ImageBackground
                  resizeMode="contain"
                  source={{uri: topInspo?.avatarUrl || noImageUrl}}
                  imageStyle={{borderRadius: 20}}
                  style={{
                    height: 150,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: Colors.APRICOT_PEACH,
                    justifyContent: 'flex-end',
                  }}>
                  <Center
                    mb={-0.5}
                    borderBottomRightRadius={20}
                    borderBottomLeftRadius={20}>
                    <View
                      bg={Colors.ROUGE_TRANSPARENT}
                      padding={1}
                      width={'100%'}
                      alignItems={'center'}
                      borderBottomLeftRadius={20}
                      borderBottomRightRadius={20}>
                      <Text fontSize={'sm'} color={Colors.WHITE}>
                        {topInspo?.fullName}
                      </Text>
                    </View>
                  </Center>
                </ImageBackground>
              </TouchableOpacity>
            </HStack>

            {lastPost && (
              <>
                <Text
                  mt={7}
                  mb={1}
                  fontSize={'lg'}
                  color={Colors.ROUGE}
                  fontWeight="bold">
                  Whats new
                </Text>

                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: Colors.CHABLIS,
                  }}
                  onPress={() => navigate('Posts')}>
                  <ImageBackground
                    resizeMode="contain"
                    source={{uri: lastPost?.photo || noImageUrl}}
                    imageStyle={{
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                    }}
                    style={{
                      height: 120,
                    }}
                  />
                  <View p={3}>
                    <Text>{lastPost?.title}</Text>
                    <Text fontSize={'sm'} color={Colors.SHADY_LADY} mt={1}>
                      {new Date(lastPost?.postedAt)?.toLocaleString('en-us', {
                        month: 'short',
                      })}{' '}
                      {new Date(lastPost?.postedAt)?.getDate()}
                    </Text>

                    <HStack
                      mt={4}
                      alignItems={'center'}
                      justifyContent="space-between">
                      <HStack alignItems={'center'}>
                        <Image
                          rounded={'full'}
                          source={{
                            uri: lastPost?.poster?.avatarUrl || noImageUrl,
                          }}
                          width={7}
                          height={7}
                          mr={2}
                        />
                        <Text fontSize={'sm'}>
                          {' '}
                          {lastPost?.poster?.fullName}
                        </Text>
                      </HStack>

                      <Button variant="t" onPress={() => navigate('Posts')}>
                        <HStack alignItems={'center'}>
                          <Text color={Colors.ROUGE} fontSize={'xs'}>
                            Show more
                          </Text>
                          <Icon
                            as={MaterialCommunityIcons}
                            size="xs"
                            name={'arrow-right'}
                            color={Colors.ROUGE}
                          />
                        </HStack>
                      </Button>
                    </HStack>
                  </View>
                </TouchableOpacity>
              </>
            )}

            <Text
              mt={7}
              mb={1}
              fontSize={'lg'}
              color={Colors.ROUGE}
              fontWeight="bold">
              Find inspirations
            </Text>
          </>
        )}
        mt={10}
        numColumns={2}
        data={inspos?.pages?.splice(1, 6)}
        renderItem={({item}) => (
          <ImageCard
            containerStyle={{marginTop: 16}}
            {...item}
            uri={item.avatarUrl}
            bottomTitle={item.fullName}
            onPress={() =>
              navigate('Profile', {
                id: item.id,
              })
            }
          />
        )}
      />
    </CustomContainer>
  );
}
