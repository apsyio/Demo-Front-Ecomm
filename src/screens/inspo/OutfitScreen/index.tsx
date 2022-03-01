import {Button, Image, Text, View} from 'native-base';
import React, {useState} from 'react';
import {Linking, Modal, TouchableWithoutFeedback} from 'react-native';

import {CustomContainer, CustomTag} from '~/components/atoms';
import type {ClosetItems} from '~/generated/graphql';
import {Colors} from '~/styles';
import {deviceHeight, deviceWidth} from '~/utils/style';

export default function OutfitScreen({route}: any) {
  const {outfit} = route?.params;

  const [selectedCloset, setSelectedCloset] = useState<ClosetItems | null>(
    null,
  );

  return (
    <CustomContainer>
      <Modal
        animationType="slide"
        transparent
        visible={!!selectedCloset}
        onRequestClose={() => setSelectedCloset(null)}>
        <TouchableWithoutFeedback onPress={() => setSelectedCloset(null)}>
          <View px={5} py={20} flex={1} bg={Colors.BLACK_TRANSPARENT}>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.WHITE,
                borderRadius: 20,
                padding: 20,
              }}>
              <View flex={1} alignItems="center" justifyContent={'center'}>
                <Image
                  borderRadius={'2xl'}
                  height={300}
                  width={180}
                  source={{uri: outfit.photo}}
                  resizeMode={'contain'}
                />
              </View>

              <Button
                onPress={() => {
                  setSelectedCloset(null);
                  if (selectedCloset?.url) {
                    console.log('selectedCloset.url', selectedCloset.url);
                    Linking.openURL(selectedCloset.url);
                  }
                }}
                variant={'primary'}>
                <Text color={Colors.WHITE}>Buy this item </Text>
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View alignItems={'center'}>
        <Image
          borderRadius={'2xl'}
          height={300}
          width={180}
          source={{uri: outfit.photo}}
          resizeMode={'contain'}
        />

        {outfit.closetItems?.map((closetItem: ClosetItems) => {
          const {name, url, yCoordinate, xCoordinate} = closetItem;
          return (
            <CustomTag
              key={url}
              name={name}
              top={+((deviceHeight * yCoordinate) / 100).toFixed(0)}
              left={+((deviceWidth * xCoordinate) / 100).toFixed(0) + 50}
              onPress={() => {
                if (url) {
                  setSelectedCloset(closetItem);
                }
              }}
            />
          );
        })}
      </View>
    </CustomContainer>
  );
}
