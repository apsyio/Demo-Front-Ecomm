import {Formiz, useForm} from '@formiz/core';
import {isEmail} from '@formiz/validations';
import {Button, HStack, Image, ScrollView, Text, View} from 'native-base';
import React from 'react';

import images from '~/assets/images';
import {CustomContainer} from '~/components/atoms';
import {CustomInput} from '~/components/atoms/CustomInput';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function ForgotPasswordScreen() {
  const signinForm = useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <CustomContainer bg={Colors.SEA_PINK}>
      <ScrollView
        contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
        <Image
          alt="logo"
          mt={12}
          resizeMode="contain"
          height={30}
          source={images.logo}
        />

        <Formiz onValidSubmit={handleSubmit} connect={signinForm}>
          <View bg={Colors.WHITE} p={5} borderRadius={20}>
            <Text mb={5}>Please Enter Your Email Or Phone Number</Text>

            <CustomInput
              name="email"
              placeholder="Email Or Phone Number"
              required="Email Or Phone Number is required"
              validations={[
                {
                  rule: isEmail(),
                  message: 'Email is invalid',
                },
              ]}
            />

            <Button
              mb={40}
              mt={5}
              variant={'primary'}
              onPress={signinForm.submit}>
              Send
            </Button>

            <HStack alignItems="center" justifyContent="center">
              <Text>Dont have an account? </Text>

              <Button
                variant="sub"
                fontWeight={'bold'}
                onPress={() => navigate('Signup')}>
                <Text fontSize={'sm'} fontWeight={'bold'}>
                  Sign Up Now
                </Text>
              </Button>
            </HStack>
          </View>
        </Formiz>
      </ScrollView>
    </CustomContainer>
  );
}
