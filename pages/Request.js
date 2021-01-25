import * as React from 'react';
import {SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,} from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  import BellIcon from 'react-native-vector-icons/FontAwesome';
  import Header from '../component/HeaderRequest';
  import RequestMain from '../component/RequestMain';
	
export default function App() {
  var x=1;
  
  return (
      <>
    <ImageBackground source={require('../Images/login.png')} style={styles.background}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
        <Header/>
        <View style={styles.content}>
            <RequestMain/>
        </View>
    </ImageBackground>
      
    
      
    </>
  );
}
const {width:panjang}=Dimensions.get('window');
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