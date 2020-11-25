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
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
import AddIcon from 'react-native-vector-icons/Octicons';

export default function MainHome() {

  return (
    <>
    <View style={styles.container}>
        <Image 
            style={{width: 80, height: 80}}
            source={require('../Images/person.png')}
          />
        <View style={(styles.Profil)}>
            <Text style={styles.Name}>William Hans</Text>
            <Text style={styles.Company}>PT. Jedi Global Teknologi</Text>
            <Text style={styles.Logged}>Logged in as User</Text>
        </View>
    </View>
    <View style={styles.button}>
        <TouchableOpacity style={styles.buttonTicket}>
            <Text style={styles.buttonTextTicket}>My Ticket</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.button2}>
        <TouchableOpacity style={styles.buttonIncident}>
            <Text style={styles.buttonTextIncident}>Incident</Text>
        </TouchableOpacity>
        <View>
            <TouchableOpacity style={styles.buttonRequest}>
                <Text style={styles.buttonTextRequest}>Request</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.new}>
        <View style={styles.newIncident}>
            <Text style={styles.newTextIncident}>New</Text>
            <Text style={styles.newNumberIncident}>12</Text>
        </View>
        <View style={styles.newRequest}>
            <Text style={styles.newTextRequest}>New</Text> 
            <Text style={styles.newNumberRequest}>3</Text> 
        </View>
    </View>
    <View style={styles.assign}>
        <View style={styles.assignIncident}>
            <Text style={styles.assignTextIncident}>Assigned</Text>
            <Text style={styles.assignNumberIncident}>6</Text>
        </View>
        <View style={styles.assignRequest}>
            <Text style={styles.assignTextRequest}>Assigned</Text> 
            <Text style={styles.assignNumberRequest}>2</Text> 
        </View>
    </View>
    <View style={styles.resolve}>
        <View style={styles.resolveIncident}>
            <Text style={styles.resolveTextIncident}>Resolved</Text>
            <Text style={styles.resolveNumberIncident}>4</Text>
        </View>
        <View style={styles.resolveRequest}>
            <Text style={styles.resolveTextRequest}>Resolved</Text> 
            <Text style={styles.resolveNumberRequest}>9</Text> 
        </View>
    </View>
    <View style={styles.pending}>
        <View style={styles.pendingIncident}>
            <Text style={styles.pendingTextIncident}>Pending</Text>
            <Text style={styles.pendingNumberIncident}>0</Text>
        </View>
        <View style={styles.pendingRequest}>
            <Text style={styles.pendingTextRequest}>Pending</Text> 
            <Text style={styles.pendingNumberRequest}>9</Text> 
        </View>
    </View>
    <View style={styles.addTicket}>
        <TouchableOpacity style={styles.addTicketButton}>
        <AddIcon name={'diff-added'} size={40} color="#D9001B"
            style={styles.inputAddIcon}/>
        <Text style={styles.addText}>New Ticket</Text>
        </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
// styles untuk profile
  container: {
    flexDirection:'row',
    fontFamily: 'Arial',
  },
  Profil:{
    paddingTop:15,
    paddingLeft:10,
  },
  Name:{
    fontFamily: 'Arial Bold',
    fontSize: 20,
    fontWeight:'700',
    color: '#7F7F7F',
        
  },
  Company:{
    paddingTop:5,
    fontSize: 10,
    color: '#7F7F7F',
  },
  Logged:{
    fontSize: 10,
    color: '#7F7F7F',
  },

  //   Styles untuk button
  button:{
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection:'row',
    fontFamily: 'Arial'
  },
  buttonTicket:{
    width: WIDTH-20,
    backgroundColor: '#D9001B',
    marginVertical:5,
    paddingVertical: 4,
  },
  buttonTextTicket:{
    fontSize: 15,
    fontWeight:'normal',
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonIncident:{
    backgroundColor: '#293B91',
    //marginVertical:10,
    paddingVertical: 5,
    width:WIDTH-217,
    right : 1,
  },
  buttonRequest:{
    backgroundColor: '#293B91',
    //marginVertical:10,
    paddingVertical: 5,
    width:WIDTH-217,
    left: 1,
  },
  buttonTextIncident:{
    fontSize: 15,
    fontWeight:'normal',
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonTextRequest:{
    fontSize: 15,
    fontWeight:'normal',
    color: '#ffffff',
    textAlign: 'center',
  },
  button2:{
    flexDirection:'row',
    fontFamily: 'Arial',
    justifyContent: 'center',
  },
//   Styles untuk kotak new
  newTextIncident:{
    fontSize: 15,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  newTextRequest:{
    fontSize: 15,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  newNumberIncident:{
    fontSize: 25,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop:20,
  },
  newNumberRequest:{
    fontSize: 25,
    paddingTop:20,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  newIncident:{
    height: 90,
    top: 5,
    backgroundColor:'#000000',
    width:WIDTH-217,
    right: 1,
    opacity:0.5,
    marginTop:2,
  },
  newRequest:{
    height: 90,
    top: 5,
    backgroundColor:'#000000',
    width:WIDTH-217,
    left: 1,
    opacity:0.5,
    marginTop:2,
  },
  new:{
    flexDirection:'row',
    fontFamily: 'Arial',
    justifyContent: 'center',
  },
  //   Styles untuk kotak Assigned
  assignTextIncident:{
    fontSize: 15,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  assignTextRequest:{
    fontSize: 15,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  assignNumberIncident:{
    fontSize: 25,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop:20,
  },
  assignNumberRequest:{
    fontSize: 25,
    paddingTop:20,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  assignIncident:{
    height: 90,
    top: 5,
    backgroundColor:'#000000',
    width:WIDTH-217,
    right: 1,
    opacity:0.5,
    marginTop:2,
  },
  assignRequest:{
    height: 90,
    top: 5,
    backgroundColor:'#000000',
    width:WIDTH-217,
    left: 1,
    opacity:0.5,
    marginTop:2,
  },
  assign:{
    flexDirection:'row',
    fontFamily: 'Arial',
    justifyContent: 'center',
  },
   //   Styles untuk kotak Resolve
   resolveTextIncident:{
    fontSize: 15,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  resolveTextRequest:{
    fontSize: 15,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  resolveNumberIncident:{
    fontSize: 25,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop:20,
  },
  resolveNumberRequest:{
    fontSize: 25,
    paddingTop:20,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  resolveIncident:{
    height: 90,
    top: 5,
    backgroundColor:'#000000',
    width:WIDTH-217,
    right: 1,
    opacity:0.5,
    marginTop:2,
  },
  resolveRequest:{
    height: 90,
    top: 5,
    backgroundColor:'#000000',
    width:WIDTH-217,
    left: 1,
    opacity:0.5,
    marginTop:2,
  },
  resolve:{
    flexDirection:'row',
    fontFamily: 'Arial',
    justifyContent: 'center',
  },
   //   Styles untuk kotak Pending
   pendingTextIncident:{
    fontSize: 15,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  pendingTextRequest:{
    fontSize: 15,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  pendingNumberIncident:{
    fontSize: 25,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop:20,
  },
  pendingNumberRequest:{
    fontSize: 25,
    paddingTop:20,
    fontWeight:'700',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 1,
  },
  pendingIncident:{
    height: 90,
    top: 5,
    backgroundColor:'#000000',
    width:WIDTH-217,
    right: 1,
    opacity:0.5,
    marginTop:2,
  },
  pendingRequest:{
    height: 90,
    top: 5,
    backgroundColor:'#000000',
    width:WIDTH-217,
    left: 1,
    opacity:0.5,
    marginTop:2,
  },
  pending:{
    flexDirection:'row',
    fontFamily: 'Arial',
    justifyContent: 'center',
  },
  //style untuk add ticket
  addTicket:{
    paddingTop:10,
    alignItems:'center',
    justifyContent: 'center',
  },
  addTicketButton:{
    alignItems:'center',
    justifyContent: 'center',
  },
  addText:{
    fontSize: 10,
    fontWeight:'normal',
    color: '#000000',
    textAlign: 'center',
  },
});