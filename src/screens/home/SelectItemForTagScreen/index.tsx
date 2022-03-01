import {Image, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Linking, TouchableWithoutFeedback} from 'react-native';

import {CustomContainer, CustomTag} from '~/components/atoms';
import type {ClosetItems} from '~/generated/graphql';
import {navigate} from '~/navigation/methods';
import {deviceHeight, deviceWidth} from '~/utils/style';

export default function SelectItemForTagScreen({route}: any) {
  const {photo, closetItems: closetItemsInParams} = route?.params || {};

  const [closetItems, setClosetItems] = useState<ClosetItems[]>([]);

  useEffect(() => {
    if (closetItemsInParams?.length > 0) {
      setClosetItems(closetItemsInParams);
    }
  }, [closetItemsInParams]);

  const handlePress = (event: any) => {
    const {locationY, locationX} = event.nativeEvent;

    if (!locationY && !locationX) {
      return;
    }

    const xCoordinate = +((locationX * 100) / deviceWidth).toFixed(0);
    const yCoordinate = +((locationY * 100) / deviceHeight).toFixed(0);

    navigate('TagClothes', {photo, closetItems, xCoordinate, yCoordinate});
  };

  return (
    <CustomContainer>
      <Text mb={3}>Select the item that you want to tag:</Text>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View alignItems={'center'}>
          <Image
            borderRadius={'2xl'}
            height={300}
            width={180}
            source={{uri: photo}}
            resizeMode={'contain'}
          />

          {closetItems?.map(({name, url, yCoordinate, xCoordinate}) => (
            <CustomTag
              key={url}
              name={name}
              top={+((deviceHeight * yCoordinate) / 100).toFixed(0)}
              left={+((deviceWidth * xCoordinate) / 100).toFixed(0)}
              onPress={() => {
                if (url) {
                  Linking.openURL(url);
                }
              }}
              onPressRemove={() => {
                setClosetItems(prev =>
                  prev.filter(item => item.yCoordinate !== yCoordinate),
                );
              }}
            />
          ))}
        </View>
      </TouchableWithoutFeedback>
    </CustomContainer>
  );
}
