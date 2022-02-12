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
import useGetRecommendBrand from '~/hooks/brand/useGetRecommendBrand';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function HomeScreen() {
  const {recommendBrand} = useGetRecommendBrand({});

  return (
    <CustomContainer>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <HStack justifyContent={'space-between'}>
              <Image
                alt="logo"
                resizeMode="contain"
                height={30}
                width={200}
                source={images.logo}
              />
              <Button variant={'sub'} onPress={() => navigate('Profile')}>
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
                    resizeMode="contain"
                    source={recommendBrand?.thumbnail || ''}
                  />
                </Center>
              </Button>

              <TouchableOpacity
                onPress={() => navigate('Inspo')}
                style={{flex: 1}}>
                <ImageBackground
                  source={{uri: 'https://picsum.photos/200'}}
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
                        Anna Howard
                      </Text>
                    </View>
                  </Center>
                </ImageBackground>
              </TouchableOpacity>
            </HStack>

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
              onPress={() => null}>
              <ImageBackground
                source={{uri: 'https://picsum.photos/200'}}
                imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}
                style={{
                  height: 120,
                }}
              />
              <View p={3}>
                <Text>Being Plus-Sized on Social Media</Text>
                <Text fontSize={'sm'} color={Colors.SHADY_LADY} mt={1}>
                  Oct 22 . 3 min read
                </Text>

                <HStack
                  mt={4}
                  alignItems={'center'}
                  justifyContent="space-between">
                  <HStack alignItems={'center'}>
                    <Image
                      rounded={'full'}
                      source={{uri: 'https://picsum.photos/200'}}
                      width={7}
                      height={7}
                      mr={2}
                    />
                    <Text fontSize={'sm'}>Feyi Odejimi</Text>
                  </HStack>

                  <Button variant="t" onPress={() => navigate('Conversation')}>
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
        data={[
          {
            id: 1,
            title: 'Isabella Hutton',
            uri: 'https://picsum.photos/200',
          },
          {id: 2, title: 'Isabella Hutton', uri: 'https://picsum.photos/200'},
          {id: 3, title: 'Isabella Hutton', uri: 'https://picsum.photos/200'},
          {id: 4, title: 'Isabella Hutton', uri: 'https://picsum.photos/200'},
          {id: 5, title: 'Isabella Hutton', uri: 'https://picsum.photos/200'},
          {id: 6, title: 'Isabella Hutton', uri: 'https://picsum.photos/200'},
        ]}
        renderItem={({item}) => (
          <ImageCard
            containerStyle={{marginTop: 16}}
            {...item}
            bottomTitle={item.title}
            onPress={() =>
              navigate('MyProfile', {
                id: item.id,
              })
            }
          />
        )}
      />
    </CustomContainer>
  );
}
