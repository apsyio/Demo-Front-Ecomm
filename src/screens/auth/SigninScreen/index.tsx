import {Formiz, useForm} from '@formiz/core';
import {isEmail, isMinLength} from '@formiz/validations';
import auth from '@react-native-firebase/auth';
import {useAtom} from 'jotai';
import {Button, HStack, Text, Toast, View} from 'native-base';
import React, {useState} from 'react';
import {Platform} from 'react-native';

import {
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
  CustomSpinner,
  LineWithText,
  Logo,
  SocialButton,
} from '~/components/atoms';
import type {User_LoginQuery} from '~/generated/graphql';
import {ResponseStatus} from '~/generated/graphql';
import useSignin from '~/hooks/auth/useSignin';
import {navigate} from '~/navigation/methods';
import thirdPartyAuthService from '~/services/thirdPartyAuthService/thirdPartyAuthService';
import {isUserLoggedInAtom} from '~/store';
import {Colors} from '~/styles';

export default function SigninScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [, setIsUserLoggedIn] = useAtom(isUserLoggedInAtom);

  const {mutate} = useSignin();

  const signinForm = useForm();

  const handleSubmit = () => {
    onSignin(true);
  };

  const onSigninWithSocial = async () => {
    setIsLoading(true);
    mutate(undefined, {
      onSuccess: onSuccessSignin,
      onSettled: () => setIsLoading(false),
    });
  };

  const googleSignin = async () => {
    const {thirdPartyAccessToken, firebaseIdToken, firebaseUser, success} =
      await thirdPartyAuthService.loginWithGoogle();
    console.log(firebaseIdToken, 'firebaseIdToken');
    if (success) {
      console.log('thirdPartyAccessToken', thirdPartyAccessToken);
      console.log('firebaseIdToken', firebaseIdToken);
      console.log('firebaseUser', firebaseUser);

      onSigninWithSocial();
    }
  };

  const facebookSignIn = async () => {
    const {thirdPartyAccessToken, firebaseIdToken, firebaseUser, success} =
      await thirdPartyAuthService.loginWithFacebook();
    if (success) {
      console.log('thirdPartyAccessToken', thirdPartyAccessToken);
      console.log('firebaseIdToken', firebaseIdToken);
      console.log('firebaseUser', firebaseUser);
      onSigninWithSocial();
    }
  };

  const signinWithEmail = async () => {
    try {
      await auth().signInWithEmailAndPassword(
        signinForm.values.email,
        signinForm.values.password,
      );
      return true;
    } catch (error: any) {
      console.log(error, 'error for get token');

      const errorMessage = error?.message;
      if (errorMessage) {
        Toast.show({
          title: 'Error',
          status: 'error',
          description: errorMessage,
        });
      }
      return false;
    }
  };

  const onSuccessSignin = (data: User_LoginQuery) => {
    const status = data?.user_login?.status;
    if (status === ResponseStatus.Success) {
      setTimeout(() => {
        setIsUserLoggedIn(true);
      }, 100);
    }
  };

  const onSignin = async (withEmail: boolean) => {
    try {
      setIsLoading(true);
      if (withEmail) {
        const res = await signinWithEmail();
        if (!res) {
          return;
        }
      }

      mutate(undefined, {
        onSuccess: onSuccessSignin,
      });
    } catch (e) {
      console.log(e, 'e');
    } finally {
      setIsLoading(false);
    }
  };

  async function doAppleSignin() {
    const {thirdPartyAccessToken, firebaseIdToken, firebaseUser, success} =
      await thirdPartyAuthService.loginWithApple();

    if (success) {
      console.log('thirdPartyAccessToken', thirdPartyAccessToken);
      console.log('firebaseIdToken', firebaseIdToken);
      console.log('firebaseUser', firebaseUser);

      onSigninWithSocial();
    }
  }

  return (
    <CustomContainer bg={Colors.SEA_PINK}>
      <CustomSpinner visible={isLoading} />
      <CustomKeyboardAwareScrollView
        contentContainerStyle={{justifyContent: 'space-between'}}>
        <Logo mt={7} my={5} />

        <Formiz onValidSubmit={handleSubmit} connect={signinForm}>
          <View bg={Colors.WHITE} p={5} borderRadius={20}>
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

            <Button
              disabled={!signinForm.isValid}
              my={5}
              variant={'primary'}
              onPress={signinForm.submit}>
              Sign in
            </Button>

            <LineWithText text="Or continue with " />

            <HStack justifyContent={'center'} my={5}>
              <SocialButton iconName="facebook" onPress={facebookSignIn} />
              <View mx={2} />
              <SocialButton iconName="google" onPress={googleSignin} />
              {Platform.OS === 'ios' && (
                <>
                  <View mx={2} />
                  <SocialButton iconName="apple" onPress={doAppleSignin} />
                </>
              )}
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
      </CustomKeyboardAwareScrollView>
    </CustomContainer>
  );
}
