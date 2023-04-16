import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, TouchableOpacity } from 'react-native';
import { Button, Text, Menu, Divider, Provider, Surface } from 'react-native-paper';
import Header from './components/Header';
import { Camera, CameraType } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Components from './components/Components';
import { Center, NativeBaseProvider } from 'native-base';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [startCamera,setStartCamera] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
    // const fetchData = async () => {
    //   const { status } = await Camera.requestCameraPermissionsAsync();
    //     setHasPermission(status === 'granted');
    //     return status;
    // }

    // fetchData();
  // }, []);

  // const __startCamera = async () => {
  //   const {status} = await Camera.requestCameraPermissionsAsync()
  //   if (status === 'granted') {
  //     // start the camera
  //     setStartCamera(true)
  //   } else {
  //     Alert.alert('Access denied')
  //   }
  // }

  // function toggleCameraType() {
  //   setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  // }

  return (
    <>
    <View style={styles.container}>
      <Header />
      {/* <Text style={styles.text} variant='titleLarge'>das ist ein längerer Text, um zu sehen wie das aussieht</Text> */}
      <Surface  style={{ padding: 10, backgroundColor: '#fff', elevation: 4, marginBottom: '20px', boxShadow: 'none' }}>
        <Text style={styles.text} variant='titleLarge'>Text</Text>
        <Text variant="bodyMedium">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        </Surface>
      <Button buttonColor='#90D7BD' textColor='black' mode="contained" onPress={() => console.log('Pressed')} contentStyle={styles.button}>
        Press me
      </Button>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <MaterialCommunityIcons name="nutrition" size={24} color="black" />
      {/* <iframe src="..." allow="microphone; camera;"> */}
        {/* <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera> */}
       {/* {startCamera ? (
        <Camera
          style={{flex: 1,width:"100%"}}
          ref={(r) => {
            camera = r
          }}
        ></Camera>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Take picture
            </Text>
          </TouchableOpacity>
        </View>
      )} */}
      {/* </iframe>  */}

{/* 
    {hasPermission && <Camera style={{ flex: 1 }} />} */}
       {/* <Camera
    style={{flex: 1,width:"100%"}}
    ref={(r) => {
    camera = r
    }}
    ></Camera> */}
    <NativeBaseProvider>
            <Center px="3" style={{ marginTop: '20px'}}>
                <Components />
            </Center>
          </NativeBaseProvider>
      {/* <StatusBar style="auto" /> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
  },
  text: {
    // fontSize: 30,
    marginTop: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: 140,
  }
});
