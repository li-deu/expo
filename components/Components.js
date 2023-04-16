import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Box, Center, CheckIcon, Select } from 'native-base';

const {width, height} = Dimensions.get('window');

export default function Components() {
  const [service, setService] = React.useState("");

  return (
    <Center>
    <Box maxW="300">
      <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
      bg: "teal.600",
      endIcon: <CheckIcon size="5" />
    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
    </Box>
  </Center>
  )
}
const styles = StyleSheet.create({
  header: {
      height: height/10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#016855',
      width: '100%',
  },
});