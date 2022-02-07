import {FlatList} from 'native-base';
import React from 'react';

import {Container, PostOrFeedCard} from '~/components/atoms';

export default function FeedsScreen() {
  return (
    <Container>
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
    </Container>
  );
}
