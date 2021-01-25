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

import BellIcon from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/AntDesign';

export default function HeaderMain() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
		<TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()} 
      >
        <BackIcon name={'left'} size={38} color="#ffffff"/>
      </TouchableOpacity>{/*button back*/}
        <Text style={styles.headerText}>Incident</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notif')}>
            <BellIcon name={'bell'} size={22} color="#D9001B"/>
        </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Arial',
    backgroundColor: '#293B91',
    height: 80,
    paddingTop:38,
    //paddingLeft:20,
    flexDirection:'row',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight:'700',
  },
  button:{
    //backgroundColor: '#ffffff',
    left:270,
    top: 2,
},
button1:{
    //backgroundColor: '#ffffff',
    bottom: 5,
},
});