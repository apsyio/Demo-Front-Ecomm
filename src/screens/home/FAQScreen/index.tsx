import {Divider, HStack, Icon, Text} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CustomContainer} from '~/components/atoms';
import {Colors} from '~/styles';

export default function FAQScreen() {
  const [selectedFAQa, setSelectedFAQa] = useState<string[]>([]);
  return (
    <CustomContainer>
      {[
        {
          title: 'What is Lorem ipsum dolor?',
          desc: 'Cillum laborum mollit magna ex nulla occaecat aute. Voluptate sint dolore adipisicing cillum incididunt culpa officia laboris commodo. Aliqua ea laboris proident commodo eiusmod culpa cupidatat elit. Velit ad aliqua voluptate occaecat adipisicing irure labore enim reprehenderit nostrud ex exercitation laborum. ',
        },
        {
          title: 'What is Lorem ipsum dolor2?',
          desc: 'Cillum laborum mollit magna ex nulla occaecat aute. Voluptate sint dolore adipisicing cillum incididunt culpa officia laboris commodo. Aliqua ea laboris proident commodo eiusmod culpa cupidatat elit. Velit ad aliqua voluptate occaecat adipisicing irure labore enim reprehenderit nostrud ex exercitation laborum2. ',
        },
      ].map(({title, desc}) => (
        <TouchableOpacity
          onPress={() => {
            if (selectedFAQa?.includes(title)) {
              setSelectedFAQa(prev => prev?.filter(a => a !== title));
            } else {
              setSelectedFAQa(prev => [...prev, title]);
            }
          }}
          style={{
            backgroundColor: selectedFAQa?.includes(title)
              ? Colors.CHABLIS
              : Colors.WHITE,
            borderWidth: 1,
            borderColor: Colors.GALLERY,
            borderRadius: 10,
            padding: 14,
            marginTop: 20,
          }}
          key={title}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text>{title}</Text>

            <Icon
              color={Colors.SHADY_LADY}
              as={
                <MaterialCommunityIcon
                  name={`chevron${
                    selectedFAQa?.includes(title) ? '-up' : '-down'
                  }`}
                />
              }
            />
          </HStack>

          {selectedFAQa?.includes(title) && (
            <>
              <Divider my={2} />
              <Text>{desc}</Text>
            </>
          )}
        </TouchableOpacity>
      ))}
    </CustomContainer>
  );
}
