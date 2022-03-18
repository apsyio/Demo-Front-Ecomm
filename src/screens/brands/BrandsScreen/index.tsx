import {Button, FlatList, View} from 'native-base';
import React, {useState} from 'react';
import {Linking, Modal, TouchableWithoutFeedback} from 'react-native';

import {CustomContainer, FilterButton} from '~/components/atoms';
import BrandCard from '~/components/atoms/BrandCard';
import useGetAllBrands from '~/hooks/brand/useGetBrands';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function BrandsScreen({route}: any) {
  const sizes = route.params?.sizes ?? [];

  const {isRefetching, data, fetchNextPage, hasNextPage, refetch} =
    useGetAllBrands({
      where: sizes?.length > 0 ? {sizes: {some: {in: sizes}}} : undefined,
    });

  const [isFilerSizeModalVisible, setIsFilerSizeModalVisible] =
    useState<boolean>(false);

  return (
    <CustomContainer p={3}>
      <Modal
        animationType="slide"
        transparent
        visible={isFilerSizeModalVisible}
        onRequestClose={() => setIsFilerSizeModalVisible(false)}>
        <TouchableWithoutFeedback
          onPress={() => setIsFilerSizeModalVisible(false)}>
          <View px={5} py={20} flex={1} bg={Colors.BLACK_TRANSPARENT}>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.WHITE,
                borderRadius: 20,
                padding: 20,
              }}>
              <View flex={1} alignItems="center" justifyContent={'center'} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList
        numColumns={2}
        refreshing={isRefetching}
        onRefresh={refetch}
        keyExtractor={(item, index) =>
          item?.name ? item?.name : index?.toString()
        }
        data={data?.pages}
        renderItem={({item}) => (
          <BrandCard
            key={item.id}
            {...item}
            onPress={() => navigate('BrandDetails', {id: item.id})}
          />
        )}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
      />

      <FilterButton onOpen={() => navigate('FilterBrandSize', {sizes})} />

      <Button
        mt={3}
        onPress={() => Linking.openURL('https://www.cuethecurves.com/')}
        variant={'primary'}>
        Shop Now
      </Button>
    </CustomContainer>
  );
}
