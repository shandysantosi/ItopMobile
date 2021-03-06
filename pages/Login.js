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



import Logo from '../component/Logo';
import Form from '../component/Form';
import Error from '../component/errorMassage';

export default function Login() {
    return (
      <>
         <ImageBackground source={require('../Images/login.png')} style={styles.background}>
          <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
            
            <Logo/>
            <View style={styles.form}>
              <Error error={''} />
              <Form/>
            </View>
          </ImageBackground>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      //backgroundColor: '#455A64',
      flex: 1,
      width: null,
      height: null,
      //alignItems: 'center',
      //justifyContent : 'center'
    },
    form: {
      flex: 1,
      width: null,
      height:null,
      alignItems: 'center',
      justifyContent:'center',
    }
  });
  
  