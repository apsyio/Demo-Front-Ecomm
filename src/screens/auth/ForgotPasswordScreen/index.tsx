import {Formiz, useForm} from '@formiz/core';
import {isEmail} from '@formiz/validations';
import auth from '@react-native-firebase/auth';
import {Button, HStack, Image, Text, Toast, View} from 'native-base';
import React, {useState} from 'react';

import images from '~/assets/images';
import {
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
  CustomSpinner,
} from '~/components/atoms';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function ForgotPasswordScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const signinForm = useForm();

  const handleSubmit = async (values: any) => {
    console.log(values);

    setIsLoading(true);
    try {
      const result = await auth().sendPasswordResetEmail(values.email);
      console.log(result, 'result');
      Toast.show({
        title: "You've got mail!",
        status: 'success',
        description: 'We have sent a password recover link to your email',
      });

      return true;
    } catch (err: any) {
      console.log(err?.message, 'err');

      Toast.show({
        title: 'Error',
        status: 'error',
        description: err?.message.split(']')[1],
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CustomContainer bg={Colors.SEA_PINK}>
      <CustomSpinner visible={isLoading} />
      <CustomKeyboardAwareScrollView
        contentContainerStyle={{justifyContent: 'space-between'}}>
        <Image
          alt="logo"
          mt={7}
          my={5}
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
              <Text>Dont have an account?</Text>

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
      </CustomKeyboardAwareScrollView>
    </CustomContainer>
  );
}
