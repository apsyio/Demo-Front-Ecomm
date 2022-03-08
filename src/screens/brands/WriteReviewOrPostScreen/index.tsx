import {Formiz, useForm} from '@formiz/core';
import {useAtom} from 'jotai';
import {Button, HStack, ScrollView, Text, View} from 'native-base';
import React, {useLayoutEffect, useState} from 'react';

import {
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
  PhotoInput,
} from '~/components/atoms';
import type {Post_CreatePostMutation} from '~/generated/graphql';
import {PostTypes, ResponseStatus} from '~/generated/graphql';
import useCreatePost from '~/hooks/post/useCreatePost';
import {navigate} from '~/navigation/methods';
import {activeTabAtom} from '~/store';
import {Colors} from '~/styles';

export default function WriteReviewOrPostScreen({route, navigation}: any) {
  const [activeTab] = useAtom(activeTabAtom);

  const modeInParams = route.params?.mode || 'post';
  const {styleId, brandId} = route.params;
  const [mode, setMode] = useState(modeInParams);

  const writePostForm = useForm();
  const writeReviewForm = useForm();

  const {mutate} = useCreatePost();

  const onSuccess = (data: Post_CreatePostMutation) => {
    const status = data.post_createPost?.status;
    if (status === ResponseStatus.Success) {
      if (brandId) {
        navigate('BrandDetails', {
          id: brandId,
        });
      } else {
        navigate('StyleDetails', {
          id: styleId,
        });
      }
    }
  };

  const handleWritePostFormSubmit = (values: any) => {
    mutate(
      {...values, brandId, styleId, postType: PostTypes.Post},
      {
        onSuccess,
      },
    );
  };

  const handleWriteReviewFormSubmit = (values: any) => {
    console.log({
      ...values,
      brandId,
      styleId,
      postType: PostTypes.Review,
      sizeOffered: values.sizeOffered,
    });

    mutate(
      {
        ...values,
        brandId,
        styleId,
        postType: PostTypes.Review,
        sizeOffered: values.sizeOffered,
      },
      {
        onSuccess,
      },
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Write ' + mode,
    });
  }, [mode, navigation]);

  return (
    <CustomContainer>
      <CustomKeyboardAwareScrollView>
        <HStack justifyContent="space-around" my={3}>
          {activeTab === 'Brands' &&
            ['post', 'review'].map(m => (
              <Button
                key={m}
                onPress={() => setMode(m)}
                style={{
                  borderColor: m === mode ? undefined : Colors.GALLERY,
                }}
                _text={{
                  color: m === mode ? Colors.WHITE : Colors.SHADY_LADY,
                }}
                borderRadius={'md'}
                variant={m === mode ? 'primary' : 'outline'}
                width={'45%'}>
                <Text
                  style={{
                    color: m === mode ? Colors.WHITE : Colors.SHADY_LADY,
                  }}>
                  Write a {m}
                </Text>
              </Button>
            ))}
        </HStack>

        <View flex={1}>
          <ScrollView>
            {mode === 'post' && (
              <Formiz
                onValidSubmit={handleWritePostFormSubmit}
                connect={writePostForm}>
                <CustomInput
                  name="title"
                  label="Post title"
                  placeholder="Name of item"
                  required="Name of item is required"
                />

                <CustomInput
                  name="content"
                  label="Write post here"
                  placeholder="Your post"
                  required="Your post is required"
                  multiline
                  minHeight={150}
                />

                <PhotoInput name="photo" />
              </Formiz>
            )}

            {mode === 'review' && (
              <Formiz
                onValidSubmit={handleWriteReviewFormSubmit}
                connect={writeReviewForm}>
                <CustomInput
                  name="title"
                  label="Item Name"
                  placeholder="Name of item"
                  required="Name of item is required"
                />

                <CustomInput
                  name="sizeOffered"
                  label="Size"
                  placeholder="Size"
                  required="Size is required"
                />

                <CustomInput
                  multiline
                  minHeight={150}
                  name="content"
                  label="Review"
                  placeholder="Write review here"
                  required="Your review is required"
                />

                <PhotoInput
                  name="photo"
                  onChange={e => console.log('e', e.path)}
                />
              </Formiz>
            )}
          </ScrollView>

          <Button
            isDisabled={
              mode === 'post'
                ? !writePostForm.isValid
                : !writeReviewForm.isValid
            }
            onPress={
              mode === 'post' ? writePostForm.submit : writeReviewForm.submit
            }
            variant={'primary'}
            mt={5}>
            POST
          </Button>
        </View>
      </CustomKeyboardAwareScrollView>
    </CustomContainer>
  );
}
