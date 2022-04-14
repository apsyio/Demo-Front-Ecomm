import {useAtom} from 'jotai';
import {Button, HStack, Image, Text, View} from 'native-base';
import React, {useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';

import images from '~/assets/images';
import {CustomContainer, Logo} from '~/components/atoms';
import isOnboardingViewedAtom from '~/store/isOnboardingViewedAtom';
import {Colors, Spacing} from '~/styles';

const data = [
  {
    imageUrl: images.onboarding1,
    title: 'discover clothing that makes you want to celebrate.',
    // subtitle: 'discover clothing that makes you want to celebrate.',
  },
  {
    imageUrl: images.onboarding2,
    title: 'Clothes that fit you AND your style.',
    // subtitle:
    //   'Record your own routes and driving adventures! Keep them to yourself or share them within private groups or the entire Drives & Detours community.',
  },
  {
    imageUrl: images.onboarding3,
    title:
      'Join a communing of plus-size women making a better shopping experience.',
    // subtitle:
    //   'Rate and review drives, share pictures from along the way, and connect with other drivers and groups.',
  },
];

export default function OnboardingScreen() {
  const [, setIsOnboardingViewed] = useAtom(isOnboardingViewedAtom);
  const [page, setPage] = useState(0);

  const viewPager = useRef(null);

  const move = (pager: any, pageNumber: number, delta: any) => {
    pager.current.setPage(pageNumber + delta);
  };

  const onPressDone = () => {
    setIsOnboardingViewed(true);
  };

  return (
    <CustomContainer
      px={0}
      py={Spacing.largest}
      justifyContent="space-between"
      backgroundColor={Colors.CHABLIS}>
      <PagerView
        style={{flex: 1}}
        ref={viewPager}
        initialPage={0}
        onPageSelected={e => setPage(e.nativeEvent.position)}>
        {data.map(({title, subtitle, imageUrl}, index) => (
          <View
            flex={1}
            key={index + 1}
            borderRadius={Spacing.base}
            backgroundColor={Colors.CHABLIS}
            alignItems="center"
            justifyContent={'space-around'}>
            <Logo alt={title} />

            <Image
              alt={title}
              // my={8}
              height={250}
              width={'100%'}
              source={imageUrl}
            />

            <Text fontSize="2xl" textAlign={'center'} mx={4}>
              {title}
            </Text>
            {/* <Text fontSize="md" textAlign={'center'} mx={4}>
              {subtitle}
            </Text> */}

            <View alignItems={'center'}>
              <HStack flexDirection={'row'}>
                {data.map((_, i) => (
                  <View
                    key={i}
                    rounded={'full'}
                    width={i === page ? 8 : 2}
                    height={2}
                    backgroundColor={
                      i === page ? Colors.ROUGE : Colors.SEA_PINK
                    }
                    mr={1}
                  />
                ))}
              </HStack>
            </View>
          </View>
        ))}
      </PagerView>

      <HStack justifyContent="space-around" px={6} mt={8}>
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
    </CustomContainer>
  );
}
