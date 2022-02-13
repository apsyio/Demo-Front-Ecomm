import {
  Actionsheet,
  Button,
  Center,
  FlatList,
  Icon,
  Select,
  useDisclose,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CustomContainer, PostOrFeedCard} from '~/components/atoms';
import useGetBrandPosts from '~/hooks/post/useGetBrandPosts';
import useGetStylePosts from '~/hooks/post/useGetStylePosts';
import useGetPosts from '~/hooks/post/useGetUserPosts';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function PostsScreen({route}: any) {
  const brandId = route.params;
  const styleId = route.params;

  const {onClose, onOpen, isOpen} = useDisclose();

  const [postType, setPostType] = useState('');
  const [sizeTag, setSizeTag] = useState('');

  const [where, setWhere] = useState<object | undefined>(undefined);

  const {isRefetching, data, fetchNextPage, hasNextPage, refetch} = useGetPosts(
    {
      where,
      options: {
        enabled: !brandId && !styleId,
      },
    },
  );

  const {
    isRefetching: isRefetchingBrandPosts,
    data: brandPostsData,
    fetchNextPage: fetchNextPageBrandPosts,
    hasNextPage: hasNextPageBrandPosts,
    refetch: refetchBrandPosts,
  } = useGetBrandPosts({
    brandId,
    where,
  });

  const {
    isRefetching: isRefetchingStylePosts,
    data: stylePostsData,
    fetchNextPage: fetchNextPageStylePosts,
    hasNextPage: hasNextPageStylePosts,
    refetch: refetchStylePosts,
  } = useGetStylePosts({
    styleId,
    where,
  });

  return (
    <CustomContainer p={0}>
      <Center>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content p={7}>
            <Select
              mb={3}
              selectedValue={postType}
              minWidth="200"
              accessibilityLabel="Type of post"
              placeholder="Type of post"
              mt={1}
              onValueChange={itemValue => setPostType(itemValue)}>
              {['POST', 'REVIEW'].map(item => (
                <Select.Item key={item} label={item} value={item} />
              ))}
            </Select>

            <Select
              mb={3}
              selectedValue={sizeTag}
              minWidth="200"
              accessibilityLabel="Size"
              placeholder="Size"
              mt={1}
              onValueChange={itemValue => setSizeTag(itemValue)}>
              {[
                {label: 'SM', value: '0'},
                {label: 'MD', value: '1'},
                {label: 'LG', value: '2'},
                {label: '2XL', value: '3'},
              ].map(item => (
                <Select.Item key={item.value} {...item} />
              ))}
            </Select>

            <Button
              mt={10}
              width={'100%'}
              variant={'primary'}
              onPress={() => {
                onClose();

                if (postType) {
                  setWhere(prev => ({...prev, postType: {eq: postType}}));
                }
                if (sizeTag) {
                  setWhere(prev => ({...prev, sizeTag: {eq: +sizeTag}}));
                }
              }}>
              FILTER
            </Button>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>

      {brandId && (
        <FlatList
          refreshing={isRefetchingBrandPosts}
          onRefresh={refetchBrandPosts}
          keyExtractor={(item, index) =>
            item?.id ? item?.id?.toString() : index?.toString()
          }
          data={brandPostsData?.pages}
          renderItem={({item}) => <PostOrFeedCard {...item} />}
          onEndReached={() => {
            if (hasNextPageBrandPosts) {
              fetchNextPageBrandPosts();
            }
          }}
        />
      )}

      {styleId && (
        <FlatList
          refreshing={isRefetchingStylePosts}
          onRefresh={refetchStylePosts}
          keyExtractor={(item, index) =>
            item?.id ? item?.id?.toString() : index?.toString()
          }
          data={stylePostsData?.pages}
          renderItem={({item}) => <PostOrFeedCard {...item} />}
          onEndReached={() => {
            if (hasNextPageStylePosts) {
              fetchNextPageStylePosts();
            }
          }}
        />
      )}

      {!brandId && !styleId && (
        <FlatList
          refreshing={isRefetching}
          onRefresh={refetch}
          keyExtractor={(item, index) =>
            item?.id ? item?.id?.toString() : index?.toString()
          }
          data={data?.pages}
          renderItem={({item}) => <PostOrFeedCard {...item} />}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
        />
      )}

      <TouchableOpacity
        onPress={onOpen}
        style={{
          position: 'absolute',
          right: 20,
          bottom: 80,
          backgroundColor: Colors.ROUGE,
          padding: 10,
          borderRadius: 50,
        }}>
        <Icon as={MaterialCommunityIcon} name="filter" color={Colors.WHITE} />
      </TouchableOpacity>

      <Button
        onPress={() => navigate('WriteReviewOrPost', {brandId: 1})}
        borderRadius={0}
        variant={'primary'}>
        WRITE A POST
      </Button>
    </CustomContainer>
  );
}
