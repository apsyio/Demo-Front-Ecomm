import {Avatar, HStack, Icon, Image, ScrollView, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, ImageCard} from '~/components/atoms';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function BrandDetailsScreen({params}: any) {
  const id = params?.id;

  return (
    <Container>
      <ScrollView>
        <View p={5}>
          <HStack mb={5}>
            <Avatar
              mr={2}
              size={'lg'}
              source={{uri: 'https://picsum.photos/200'}}
            />

            <View justifyContent={'space-around'}>
              <Text fontSize={'xl'}>Torrid</Text>
              <HStack alignItems={'center'}>
                <Icon
                  size={'sm'}
                  as={MaterialCommunityIcons}
                  name="heart"
                  color={Colors.RED}
                />
                <Text color={Colors.RED}>12</Text>
              </HStack>
            </View>
          </HStack>

          <ScrollView horizontal>
            {[
              {id: 1, uri: 'https://picsum.photos/200'},
              {id: 2, uri: 'https://picsum.photos/200'},
              {id: 3, uri: 'https://picsum.photos/200'},
              {id: 4, uri: 'https://picsum.photos/200'},
            ].map(({uri}) => (
              <Image
                key={uri}
                borderRadius={'2xl'}
                mr={4}
                width={140}
                height={180}
                source={{uri}}
              />
            ))}
          </ScrollView>
        </View>

        <HStack mt={3} p={5} justifyContent="space-between" bg={Colors.GREEN}>
          <Text color={Colors.WHITE}>Size offered </Text>
          <Text color={Colors.WHITE}>{['XS', 'SM'].join('  ')}</Text>
        </HStack>

        <View p={5}>
          <ScrollView horizontal>
            {[
              {id: 1, title: 'CASUAL'},
              {id: 2, title: 'STREET CASUAL'},
              {id: 3, title: 'STREET CASUAL'},
              {id: 4, title: 'CASUAL'},
              {id: 5, title: 'STREET CASUAL'},
              {id: 6, title: 'STREET CASUAL'},
            ].map(({title}) => (
              <Text fontSize={'sm'} key={title} color={Colors.SEA_PINK}>
                {title}
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
            {[
              {id: 1, uri: 'https://picsum.photos/200'},
              {id: 2, uri: 'https://picsum.photos/200'},
              {id: 3, uri: 'https://picsum.photos/200'},
              {id: 4, uri: 'https://picsum.photos/200'},
              {id: 5, uri: 'https://picsum.photos/200'},
            ].map(({uri}) => (
              <ImageCard
                isSmall
                containerStyle={{marginRight: 10}}
                key={uri}
                uri={uri}
                onPress={() => null}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </Container>
  );
}
