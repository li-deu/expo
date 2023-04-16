import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { HStack} from 'native-base';

const {width, height} = Dimensions.get('window');

export default function Header() {
  return (
    <View  style={styles.header}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>Title</Text>
      <Text style={{ color: 'white', marginTop: '10px' }}>Subtitle</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
      height: '80px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#016855',
      width: '100%',
  },
});