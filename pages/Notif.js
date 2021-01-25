
import * as React from 'react';
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


import Header from '../component/HeaderNotf';
import NotifMain from '../component/NotifMain';

export default function Home() {

  return (
    <ImageBackground source={require('../Images/login.png')} style={styles.background}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
        <Header/>
          <View style={styles.content}>
              <NotifMain/>
          </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    //backgroundColor: '#455A64',
    flex: 1,
    width: null,
    height: null,
  },
  content: {
      padding: 10,
  },
  
});

