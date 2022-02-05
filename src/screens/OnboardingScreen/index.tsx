import {Button, HStack, Image, Text, View} from 'native-base';
import React, {useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';

import images from '~/assets/images';
import {Container} from '~/components/atoms';
import {Colors, Spacing} from '~/styles';

const data = [
  {
    imageUrl: images.onboarding1,
    title: 'Special and stylish',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    imageUrl: images.onboarding2,
    title: 'Use the best materials',
    subtitle:
      'Record your own routes and driving adventures! Keep them to yourself or share them within private groups or the entire Drives & Detours community.',
  },
  {
    imageUrl: images.onboarding3,
    title: 'Variety in color and size',
    subtitle:
      'Rate and review drives, share pictures from along the way, and connect with other drivers and groups.',
  },
];

export default function OnboardingScreen({navigation}: any) {
  const [page, setPage] = useState(0);

  const viewPager = useRef(null);

  const move = (pager: any, pageNumber: number, delta: any) => {
    pager.current.setPage(pageNumber + delta);
  };

  const onPressDone = () => {
    navigation.replace('AuthStack');
  };

  return (
    <Container
      flex={1}
      paddingHorizontal={Spacing.larger}
      paddingVertical={Spacing.extraLarge}
      justifyContent="space-between"
      backgroundColor={Colors.CHABLIS}>
      <PagerView
        style={{flex: 1}}
        ref={viewPager}
        initialPage={0}
        onPageSelected={e => setPage(e.nativeEvent.position)}>
        {data.map(({title, subtitle, imageUrl}, index) => (
          <View
            key={index + 1}
            borderRadius={Spacing.base}
            backgroundColor={Colors.CHABLIS}
            alignItems="center">
            <Image
              alt={title}
              resizeMode="contain"
              height={30}
              source={images.logo}
            />

            <Image
              alt={title}
              my={8}
              height={200}
              width={200}
              source={imageUrl}
            />
            <Text fontSize="2xl">{title}</Text>
            <Text fontSize="md" textAlign={'center'}>
              {subtitle}
            </Text>

            <View alignItems={'center'} mt={10}>
              <HStack flexDirection={'row'}>
                <View
                  rounded={'full'}
                  width={8}
                  height={2}
                  backgroundColor={Colors.ROUGE}
                />
                <View
                  rounded={'full'}
                  width={2}
                  height={2}
                  backgroundColor={Colors.SEA_PINK}
                  mx={1}
                />
                <View
                  rounded={'full'}
                  width={2}
                  height={2}
                  backgroundColor={Colors.SEA_PINK}
                />
              </HStack>
            </View>
          </View>
        ))}
      </PagerView>

      <HStack justifyContent="space-around">
        {page !== 0 && (
          <Button
            variant="outline"
            width={'45%'}
            onPress={() => move(viewPager, page, -1)}>
            Back
          </Button>
        )}

        <Button
          variant="primary"
          width={page !== 0 ? '45%' : '100%'}
          onPress={() => {
            if (page !== data.length - 1) {
              move(viewPager, page, 1);
            } else {
              onPressDone();
            }
          }}>
          {page === 0 ? "Let's go" : 'Next'}
        </Button>
      </HStack>
    </Container>
  );
}
