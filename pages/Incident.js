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
  import Header from '../component/HeaderIncident';

	
export default function App() {
  var x=1;
  
  return (
      <>
    <ImageBackground source={require('../Images/login.png')} style={styles.background}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
        <Header/>
        <View style={styles.box}>
            <Text style={styles.headerText}>Incident 1</Text>
            <Text style={styles.textRincian}> </Text>
            <Text style={styles.textRincian}>Urgency:</Text>
            <Text style={styles.textRincian}>Description:</Text>
            <Text style={styles.textRincian}>Status:</Text>  
    </View>
    </ImageBackground>
      
    
      
    </>
  );
}
const {width:panjang}=Dimensions.get('window');
const styles = StyleSheet.create({
  background:{
    flex:1,
    width:null,
    height:null,
    fontFamily: 'Arial',
    alignContent:'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight:'700',
  },
  box: {
    backgroundColor: '#000000',
    opacity: 0.5,
    paddingTop: 5,
    height: 150,
    width: panjang-10,
    marginTop:10,
    marginLeft: 5,
    paddingLeft: 5,
  },
  textRincian:{
      color:'#ffffff',
      fontSize:12,
      paddingTop:5,
  }

});