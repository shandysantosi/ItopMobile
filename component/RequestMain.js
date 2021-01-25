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

export default function IncidentMain() {
  const navigation = useNavigation();
    return (
      <>
        <View style={styles.container}>
            <View style={styles.RequestTicket}>
              <Image 
                style={{width: 80, height: 80,top:9,left:7}}
                source={require('../Images/noImage.png')}
              />              
              <View style={styles.allTextNotif}>
                <Text style={styles.TicketHeader}>Ticket 1</Text>
                <Text style={styles.TicketDate}>19 December 2020</Text>
                <Text style={styles.TicketBy}>William Hans</Text>
              </View>
            </View>
            <View style={styles.RequestTicket}>
            <Image 
                style={{width: 80, height: 80,top:9,left:7}}
                source={require('../Images/noImage.png')}
              />              
              <View style={styles.allTextNotif}>
                <Text style={styles.TicketHeader}>Ticket 2</Text>
                <Text style={styles.TicketDate}>19 December 2020</Text>
                <Text style={styles.TicketBy}>William Hans</Text>
              </View>
            </View>
            <View style={styles.RequestTicket}>
            <Image 
                style={{width: 80, height: 80,top:9,left:7}}
                source={require('../Images/noImage.png')}
              />              
              <View style={styles.allTextNotif}>
                <Text style={styles.TicketHeader}>Ticket 3</Text>
                <Text style={styles.TicketDate}>19 December 2020</Text>
                <Text style={styles.TicketBy}>William Hans</Text>
              </View>
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
    RequestTicket:{
        flexDirection:'row',
        height: 100,
        top: 5,
        backgroundColor:'#000000',
        width:WIDTH-25,
        opacity:0.5,
        marginTop:6,
      },
      TicketHeader:{
        //paddingTop:8,
        paddingLeft: 6,
        fontSize: 18,
        fontWeight:'700',
        color: '#ffffff',
        textAlign: 'left',
        
      },
      TicketDate:{
        paddingTop:3,
        paddingLeft: 6,
        fontSize: 12,
        //fontWeight:'700',
        color: '#ffffff',
        textAlign: 'left',
        
      },
      TicketBy:{
        paddingTop:20,
        paddingLeft: 6,
        fontSize: 12,
        //fontWeight:'700',
        color: '#ffffff',
        textAlign: 'left',
      },

      allTextNotif:{
        paddingTop:10,
        paddingLeft:10,
        opacity:1,
      },
      
  });