
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



import Login from './pages/Login';
import Home from './pages/Home';
import Notif from './pages/Notif';
import Incident from './pages/Incident';
import Request from './pages/Request';
import Ticket from './pages/CreateTicket';


export default function App() {

  return (
    <ImageBackground source={require('./Images/login.png')} style={styles.background}>
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
        <Ticket/>
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

