
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';




import Navigator from './routes/indexStack';

//import all used images


export default function App() {
  

  return (
      <ImageBackground source={require('./Images/login.png')} style={styles.background}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
          <Navigator/>
      </View>
      </ImageBackground>
  );
  
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#455A64',
    flex: 1,
    width: null,
    height: null,
    //alignItems: 'center',
    justifyContent : 'center'
  },
  background:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

