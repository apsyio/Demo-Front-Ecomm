import {Formiz, useForm} from '@formiz/core';
import {isEmail, isMinLength} from '@formiz/validations';
import {Button, HStack, Image, ScrollView, Text, View} from 'native-base';
import React from 'react';

import images from '~/assets/images';
import {Container, LineWithText, SocialButton} from '~/components/atoms';
import {CustomInput} from '~/components/atoms/CustomInput';
import {Colors} from '~/styles';

export default function SignupScreen({navigation: {navigate}}: any) {
  const signinForm = useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Container bg={Colors.SEA_PINK}>
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
            <Text>Welcome</Text>
            <Text mb={5}>
              <Text bold>Sign Up</Text> to continue
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

            <Button my={5} variant={'primary'} onPress={signinForm.submit}>
              Sign Up
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
              <Text>Have An Account?</Text>

              <Button
                variant="sub"
                fontWeight={'bold'}
                onPress={() => navigate('Signin')}>
                <Text fontSize={'sm'} fontWeight={'bold'}>
                  Sign In Now
                </Text>
              </Button>
            </HStack>
          </View>
        </Formiz>
      </ScrollView>
    </Container>
  );
}
