
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
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackIcon from 'react-native-vector-icons/AntDesign';

export default function HeaderMain() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <BackIcon name={'left'} size={38} color="#ffffff"/>
       </TouchableOpacity> 
        <Text style={styles.headerText}>NOTIFICATION</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Arial',
    backgroundColor: '#293B91',
    height: 80,
    paddingTop:38,
    paddingLeft:10,
    flexDirection:'row',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight:'700',
  },
  button:{
    //backgroundColor: '#ffffff',
    bottom: 5,
},
});

