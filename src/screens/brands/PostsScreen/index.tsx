import {
  Actionsheet,
  Button,
  Center,
  FlatList,
  Icon,
  Select,
  useDisclose,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, PostOrFeedCard} from '~/components/atoms';
import {Colors} from '~/styles';

export default function PostsScreen() {
  const {onClose, onOpen, isOpen} = useDisclose();

  const [postType, setPostType] = useState('');
  const [postSize, setPostSize] = useState('');

  return (
    <Container>
      <Center>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content p={7}>
            <Select
              mb={3}
              selectedValue={postType}
              minWidth="200"
              accessibilityLabel="Type of post"
              placeholder="Type of post"
              mt={1}
              onValueChange={itemValue => setPostType(itemValue)}>
              {['Food', 'Drink', 'Cleaning', 'Other'].map(item => (
                <Select.Item key={item} label={item} value={item} />
              ))}
            </Select>

            <Select
              mb={3}
              selectedValue={postSize}
              minWidth="200"
              accessibilityLabel="Size"
              placeholder="Size"
              mt={1}
              onValueChange={itemValue => setPostSize(itemValue)}>
              {['SM', 'MD', 'LG', '2XL'].map(item => (
                <Select.Item key={item} label={item} value={item} />
              ))}
            </Select>

            <Button
              mt={10}
              width={'100%'}
              variant={'primary'}
              onPress={() => {
                onClose();
              }}>
              FILTER
            </Button>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>

      <FlatList
        data={[
          {
            id: 1,
            fullname: 'Charlotte Oxnam',
            title: 'Your Size Does Not Dictate Your Dating Standards',
            desc: ' Now that I am a few months into college and have watched and experienced hook-up culture and dating culture in college I have noticed a consistent theme. There seems to be a common belief that as women.',
            uri: 'https://picsum.photos/200',
            isLiked: false,
            createdAt: '2 days ago',
          },
          {
            id: 2,
            fullname: 'Feyi Odejimi',
            title: 'Being Plus-Sized on Social Media',
            desc: ' Now that I am a few months into college and have watched and experienced hook-up culture and dating culture in college I have noticed a consistent theme. There seems to be a common belief that as women.',
            uri: 'https://picsum.photos/200',
            isLiked: true,
            createdAt: '2 days ago',
          },
          {
            id: 3,
            fullname: 'Feyi Odejimi',
            title: 'Your Size Does Not Dictate Your Dating Standards',
            desc: ' Now that I am a few months into college and have watched and experienced hook-up culture and dating culture in college I have noticed a consistent theme. There seems to be a common belief that as women.',
            uri: 'https://picsum.photos/200',
            isLiked: false,
            createdAt: '2 days ago',
          },
        ]}
        renderItem={({item}) => <PostOrFeedCard {...item} />}
      />

      <TouchableOpacity
        onPress={onOpen}
        style={{
          position: 'absolute',
          right: 20,
          bottom: 20,
          backgroundColor: Colors.ROUGE,
          padding: 10,
          borderRadius: 50,
        }}>
        <Icon as={MaterialCommunityIcon} name="filter" color={Colors.WHITE} />
      </TouchableOpacity>
    </Container>
  );
}
