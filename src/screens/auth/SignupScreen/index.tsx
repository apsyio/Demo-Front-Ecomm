import {Formiz, useForm} from '@formiz/core';
import {isEmail, isMinLength} from '@formiz/validations';
import auth from '@react-native-firebase/auth';
import {Button, HStack, Image, Text, Toast, View} from 'native-base';
import React, {useState} from 'react';
import {Platform} from 'react-native';

import images from '~/assets/images';
import {
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
  CustomSpinner,
  LineWithText,
  SocialButton,
} from '~/components/atoms';
import type {User_SignUpMutation} from '~/generated/graphql';
import {ResponseStatus} from '~/generated/graphql';
import useSignup from '~/hooks/auth/useSignup';
import {navigate} from '~/navigation/methods';
import thirdPartyAuthService from '~/services/thirdPartyAuthService/thirdPartyAuthService';
import {Colors} from '~/styles';

export default function SignupScreen() {
  const signupForm = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const {mutate} = useSignup();

  const onSuccessSignup = (data: User_SignUpMutation) => {
    const {user_signUp} = data;
    const status = user_signUp?.status;
    if (status === ResponseStatus.Success) {
      navigate('SelectStyle');
    }
  };

  const createUserWithSocial = async () => {
    setIsLoading(true);

    mutate(undefined, {
      onSuccess: data => onSuccessSignup(data),
      onSettled: () => setIsLoading(false),
    });
  };

  const googleSignup = async () => {
    const {thirdPartyAccessToken, firebaseIdToken, firebaseUser, success} =
      await thirdPartyAuthService.loginWithGoogle();
    console.log(success, 'success');
    if (success) {
      console.log('thirdPartyAccessToken', thirdPartyAccessToken);
      console.log('firebaseIdToken', firebaseIdToken);
      console.log('firebaseUser', firebaseUser);

      createUserWithSocial();
    }
  };

  const facebookSignup = async () => {
    const {thirdPartyAccessToken, firebaseIdToken, firebaseUser, success} =
      await thirdPartyAuthService.loginWithFacebook();
    if (success) {
      console.log('thirdPartyAccessToken', thirdPartyAccessToken);
      console.log('firebaseIdToken', firebaseIdToken);
      console.log('firebaseUser', firebaseUser);
      createUserWithSocial();
    }
  };

  async function doAppleSignup() {
    const {thirdPartyAccessToken, firebaseIdToken, firebaseUser, success} =
      await thirdPartyAuthService.loginWithApple();
    console.log(firebaseIdToken, 'firebaseIdToken');
    if (success) {
      console.log('thirdPartyAccessToken', thirdPartyAccessToken);
      console.log('firebaseIdToken', firebaseIdToken);
      console.log('firebaseUser', firebaseUser);

      createUserWithSocial();
    }
  }

  const completeRegistrationWithEmailPassword = async () => {
    mutate(undefined, {
      onSuccess: onSuccessSignup,
    });
  };

  const createUser = async () => {
    setIsLoading(true);

    const email = signupForm.values?.email;
    const password = signupForm.values?.password;
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser?.getIdToken();
      completeRegistrationWithEmailPassword();
      return true;
    } catch (error: any) {
      console.log(error, 'error');

      const errorMessage = error?.message;
      if (errorMessage) {
        Toast.show({
          title: 'Error',
          status: 'error',
          description: errorMessage,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    createUser();
  };

  return (
    <CustomContainer bg={Colors.SEA_PINK}>
      <CustomSpinner visible={isLoading} />

      <CustomKeyboardAwareScrollView
        contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
        <Image
          alt="logo"
          mt={12}
          resizeMode="contain"
          height={30}
          source={images.logo}
        />

        <Formiz onValidSubmit={handleSubmit} connect={signupForm}>
          <View bg={Colors.WHITE} p={5} borderRadius={20}>
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

            <Button my={5} variant={'primary'} onPress={signupForm.submit}>
              Sign Up
            </Button>

            <LineWithText text="Or continue with " />

            <HStack justifyContent={'center'} my={5}>
              <SocialButton iconName="facebook" onPress={facebookSignup} />
              <View mx={2} />
              <SocialButton iconName="google" onPress={googleSignup} />

              {Platform.OS === 'ios' && (
                <>
                  <View mx={2} />
                  <SocialButton iconName="apple" onPress={doAppleSignup} />
                </>
              )}
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
      </CustomKeyboardAwareScrollView>
    </CustomContainer>
  );
}
