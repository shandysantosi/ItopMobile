import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

export default function Logo() {
    return (
      <>
        <View style={styles.container}>
          <Image 
            style={{width: 180, height: 180}}
            source={require('../Images/logo_jedi.png')}
          />
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      alignItems: 'center',
      justifyContent : 'center'
    },
  });
  