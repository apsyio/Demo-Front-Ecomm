import {Box, Text} from 'native-base';
import React, {memo} from 'react';

import {Colors} from '~/styles';

export default memo(function ProfileCard({
  label,
  value,
}: {
  label?: string | null;
  value?: string | null;
}) {
  return (
    <Box key={label} mt={3} p={4} bg={Colors.CHABLIS}>
      <Text color={Colors.EMPRESS}>{label}</Text>
      <Text mt={1}>{value}</Text>
    </Box>
  );
});
