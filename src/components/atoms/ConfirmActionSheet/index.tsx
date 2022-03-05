import {Actionsheet, Button, Center, HStack, Text} from 'native-base';
import React, {memo} from 'react';

export default memo(function CustomActionSheet({
  title,
  onPressYes,
  isOpen,
  onClose,
}: {
  title: string;
  onPressYes: () => void;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Center>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content p={7}>
          <Text mt={2} textAlign={'center'} fontSize="lg">
            {title}
          </Text>
          <HStack mt={16}>
            <Button width={'40%'} variant={'primary'} onPress={onClose}>
              No
            </Button>

            <Text>{'      '}</Text>
            <Button
              width={'40%'}
              variant={'outline'}
              onPress={() => {
                onPressYes();
                onClose();
              }}>
              Yes
            </Button>
          </HStack>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
});
