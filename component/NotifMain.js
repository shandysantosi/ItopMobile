import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default function NotifMain() {
  const navigation = useNavigation();
    return (
      <>
        <View style={styles.container}>
            <View style={styles.Notif}>
              <Image 
                style={{width: 40, height: 40,top:9,left:7}}
                source={require('../Images/noImage.png')}
              />              
              <View style={styles.allTextNotif}>
                <Text style={styles.notifTicket}>Ticket OnGoing</Text>
                <Text style={styles.notifClock}>09:30</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail')}>
                    <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.Notif}>
            <Image 
                style={{width: 40, height: 40,top:9,left:7}}
                source={require('../Images/noImage.png')}
              />              
              <View style={styles.allTextNotif}>
                <Text style={styles.notifTicket}>Ticket OnGoing</Text>
                <Text style={styles.notifClock}>09:30</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail')}>
                    <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.Notif}>
            <Image 
                style={{width: 40, height: 40,top:9,left:7}}
                source={require('../Images/noImage.png')}
              />              
              <View style={styles.allTextNotif}>
                <Text style={styles.notifTicket}>Ticket OnGoing</Text>
                <Text style={styles.notifClock}>09:30</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail')}>
                    <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            </View>
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //flexDirection:'row',
      fontFamily: 'Arial',
      justifyContent: 'center',
    },
    Notif:{
        flexDirection:'row',
        height: 60,
        top: 5,
        backgroundColor:'#000000',
        width:WIDTH-25,
        opacity:0.5,
        marginTop:6,
      },
      notifTicket:{
        //paddingTop:8,
        paddingLeft: 6,
        fontSize: 12,
        fontWeight:'700',
        color: '#ffffff',
        textAlign: 'left',
        
      },
      notifClock:{
        paddingTop:3,
        paddingLeft: 6,
        fontSize: 12,
        fontWeight:'700',
        color: '#ffffff',
        textAlign: 'left',
        
      },
      allTextNotif:{
        paddingTop:10,
        paddingLeft:10,
        opacity:1,
      },
      button:{
        width: 70,
        height:30,
        backgroundColor: '#293B91',
        marginVertical:12,
        marginLeft: 150,
       paddingVertical: 5,
       opacity:1,
    },
    buttonText:{
      fontSize: 15,
      fontWeight:'normal',
      color: '#ffffff',
      textAlign: 'center',
  },
  });
  