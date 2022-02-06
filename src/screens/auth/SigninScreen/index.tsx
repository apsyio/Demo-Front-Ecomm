import {Formiz, useForm} from '@formiz/core';
import {isEmail, isMinLength} from '@formiz/validations';
import {Button, HStack, Image, ScrollView, Text, View} from 'native-base';
import React from 'react';

import images from '~/assets/images';
import {Container, LineWithText, SocialButton} from '~/components/atoms';
import {CustomInput} from '~/components/atoms/CustomInput';
import {Colors} from '~/styles';

export default function SigninScreen({navigation: {navigate}}: any) {
  const signinForm = useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Container flex={1} bg={Colors.SEA_PINK}>
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
          <View bg={Colors.WHITE} p={5} m={5} borderRadius={20}>
            <Text>Welcome back</Text>
            <Text mb={5}>
              <Text bold>Sign In</Text> to continue
            </Text>

            <CustomInput
              name="email"
              placeholder="Email"
              required="Email address is required"
              validations={[
                {
                  rule: isEmail(),
                  message: 'Email is invalid',
                },
              ]}
            />
            <CustomInput
              name="password"
              placeholder="Password"
              secureTextEntry
              required="Password is required"
              validations={[
                {
                  rule: isMinLength(6),
                  message: 'Password should be at least 6 characters',
                },
              ]}
            />

            <Button
              alignSelf={'flex-end'}
              variant="sub"
              onPress={() => navigate('ForgotPassword')}>
              Forgot Password
            </Button>

            <Button my={5} variant={'primary'} onPress={signinForm.submit}>
              Sign in
            </Button>

            <LineWithText text="Or continue with " />

            <HStack justifyContent={'center'} my={5}>
              <SocialButton
                iconName="facebook"
                onPress={() => console.log('facebook pressed')}
              />
              <View mx={2} />
              <SocialButton
                iconName="google"
                onPress={() => console.log('google pressed')}
              />
            </HStack>

            <HStack alignItems="center" justifyContent="center">
              <Text>Dont have an account?</Text>

              <Button
                variant="sub"
                fontWeight={'bold'}
                onPress={() => navigate('Signup')}>
                <Text fontSize={'sm'} fontWeight={'bold'}>
                  Sign Up now
                </Text>
              </Button>
            </HStack>
          </View>
        </Formiz>
      </ScrollView>
    </Container>
  );
}
