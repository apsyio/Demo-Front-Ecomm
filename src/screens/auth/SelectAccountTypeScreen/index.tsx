import {useAtom} from 'jotai';
import {
  Button,
  Center,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {CustomContainer, Logo} from '~/components/atoms';
import {AccountTypes, ResponseStatus} from '~/generated/graphql';
import useUpdateUser from '~/hooks/inspo/useUpdateUser';
import {goBack} from '~/navigation/methods';
import {isUserLoggedInAtom} from '~/store';
import {Colors} from '~/styles';

export default function SelectAccountTypeScreen() {
  const [, setIsUserLoggedIn] = useAtom(isUserLoggedInAtom);

  const [accountType, setAccountType] = useState<AccountTypes>();

  const {mutate} = useUpdateUser();

  const setUserLoggedIn = () => {
    setTimeout(() => {
      setIsUserLoggedIn(true);
    }, 100);
  };

  return (
    <CustomContainer px={5} pt={16} pb={5}>
      <ScrollView>
        <Center>
          <Logo />

          <Text fontWeight={'600'} textAlign={'center'} fontSize={'xl'} my={5}>
            Please enter your account type
          </Text>
        </Center>

        {[
          {
            id: 1,
            title: AccountTypes.Private,
            iconName: 'key-outline',
            subTitles: [
              ['Favorite', 'Brand And Write Post'],
              ['Reviews', 'But other users cant ', 'See your profile'],
            ],
          },
          {
            id: 2,
            title: AccountTypes.Public,
            iconName: 'eye-outline',
            subTitles: [
              ['Can recommended', 'Outfits an and be'],
              ['Seen by users'],
            ],
          },
        ].map(({id, title, iconName, subTitles}) => (
          <TouchableOpacity
            key={id}
            onPress={() => setAccountType(title)}
            style={{
              marginTop: 40,
              marginHorizontal: 40,
              borderRadius: 20,
              padding: 20,
              paddingBottom: 40,
              backgroundColor:
                accountType === title ? Colors.APRICOT_PEACH : Colors.CHABLIS,
            }}>
            <Center
              mt={-10}
              mb={5}
              alignSelf={'center'}
              borderRadius={100}
              width={60}
              height={60}
              bg={
                accountType === title ? Colors.APRICOT_PEACH : Colors.SEA_PINK
              }>
              <Icon
                as={MaterialCommunityIcons}
                size="md"
                name={iconName}
                color={Colors.WHITE}
              />
            </Center>
            <Center>
              <Text fontSize={'lg'}>{title}</Text>
            </Center>
            {subTitles.map((sub, i) => (
              <HStack key={i} mt={3}>
                <Icon
                  as={MaterialCommunityIcons}
                  size="sm"
                  name={'arrow-right'}
                  color={Colors.ROUGE}
                  mt={2}
                  mr={2}
                />
                <VStack>
                  {sub.map(s => (
                    <Text mt={2} key={s} color={Colors.EMPRESS}>
                      {s}
                    </Text>
                  ))}
                </VStack>
              </HStack>
            ))}
          </TouchableOpacity>
        ))}

        <HStack mt={10} justifyContent="space-around" m={2}>
          <Button variant="outline" width={'45%'} onPress={() => goBack()}>
            Back
          </Button>

          <Button
            isDisabled={!accountType}
            variant="primary"
            width={'45%'}
            onPress={() => {
              if (accountType) {
                mutate(
                  {accountType},
                  {
                    onSuccess: res => {
                      const status = res.user_updateUser?.status;
                      if (status === ResponseStatus.Success) {
                        setUserLoggedIn();
                      }
                    },
                  },
                );
              } else {
                setUserLoggedIn();
              }
            }}>
            Next
          </Button>
        </HStack>
      </ScrollView>
    </CustomContainer>
  );
}
