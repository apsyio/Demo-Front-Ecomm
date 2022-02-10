import {Formiz, useForm} from '@formiz/core';
import {Button, HStack, ScrollView, Text, View} from 'native-base';
import React, {useLayoutEffect, useState} from 'react';

import {CustomContainer, CustomInput, PhotoInput} from '~/components/atoms';
import {Colors} from '~/styles';

export default function WriteReviewOrPostScreen({route, navigation}: any) {
  const modeInParams = route.params?.mode || 'post';
  const [mode, setMode] = useState(modeInParams);

  const writePostForm = useForm();
  const writeReviewForm = useForm();

  const handleWritePostFormSubmit = (values: any) => {
    console.log(values);
  };

  const handleWriteReviewFormSubmit = (values: any) => {
    console.log(values);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Write ' + mode,
    });
  }, [mode, navigation]);

  return (
    <CustomContainer>
      <HStack justifyContent="space-around" my={3}>
        {['post', 'review'].map(m => (
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
            <Text style={{color: m === mode ? Colors.WHITE : undefined}}>
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
                name="post"
                label="Write post here"
                placeholder="Your post"
                required="Your post is required"
                multiline
                minHeight={150}
              />

              <PhotoInput
                name="image"
                required="Image is required"
                onChange={e => console.log('e', e.path)}
              />
            </Formiz>
          )}

          {mode === 'review' && (
            <Formiz
              onValidSubmit={handleWriteReviewFormSubmit}
              connect={writeReviewForm}>
              <CustomInput
                name="name"
                label="Item Name"
                placeholder="Name of item"
                required="Name of item is required"
              />

              <CustomInput
                name="size"
                label="Size"
                placeholder="Size"
                required="Size is required"
              />

              <CustomInput
                multiline
                minHeight={150}
                name="review"
                label="Review"
                placeholder="Write review here"
                required="Your review is required"
              />

              <PhotoInput
                name="image"
                onChange={e => console.log('e', e.path)}
                required="Image is required"
              />
            </Formiz>
          )}
        </ScrollView>

        <Button
          onPress={
            mode === 'post' ? writePostForm.submit : writeReviewForm.submit
          }
          variant={'primary'}
          mt={5}>
          POST
        </Button>
      </View>
    </CustomContainer>
  );
}
