import {Box, Text} from 'native-base';
import React from 'react';

import {Colors} from '~/styles';

export default function ProfileCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Box key={label} mt={3} p={4} bg={Colors.CHABLIS}>
      <Text color={Colors.EMPRESS}>{label}</Text>
      <Text mt={1}>{value}</Text>
    </Box>
  );
}
