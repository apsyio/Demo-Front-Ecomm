import {Formiz, useForm} from '@formiz/core';
import {isEmail, isMinLength} from '@formiz/validations';
import auth from '@react-native-firebase/auth';
import {
  Button,
  HStack,
  Image,
  ScrollView,
  Spinner,
  Text,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {Alert} from 'react-native';

import images from '~/assets/images';
import {
  CustomContainer,
  CustomInput,
  LineWithText,
  SocialButton,
} from '~/components/atoms';
import {ResponseStatus} from '~/generated/graphql';
import useSignup from '~/hooks/auth/useSignup';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function SignupScreen() {
  const signupForm = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const {mutate} = useSignup();

  const onSuccessSignup = (data: {user_signUp: any}) => {
    const {user_signUp} = data;
    const status = user_signUp?.status;
    if (status === ResponseStatus.Success) {
      navigate('SelectStyle');
    } else {
      Alert.alert('Error', status);
    }
  };

  const completeRegistrationWithEmailPassword = async () => {
    mutate(undefined, {
      onSuccess: data => onSuccessSignup(data),
    });
  };

  const createUser = async () => {
    setIsLoading(true);

    const email = signupForm.values?.email;
    const password = signupForm.values?.password;
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
          completeRegistrationWithEmailPassword();
          return true;
        })
        .catch(error => {
          console.log(error, 'error');

          const errorMessage = error?.message;
          if (errorMessage) {
            Alert.alert('Error', errorMessage);
          }
        });
      setIsLoading(false);
    } catch (err) {
      console.log(err, 'err*****');

      setIsLoading(false);
    }
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    createUser();
  };

  return (
    <CustomContainer bg={Colors.SEA_PINK}>
      {isLoading && <Spinner color={Colors.WHITE} />}

      <Spinner />
      <ScrollView
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
    </CustomContainer>
  );
}
