import React, {useState} from 'react';
import {SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Button,Picker} from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  import BellIcon from 'react-native-vector-icons/FontAwesome';
  import { TextInput } from 'react-native-gesture-handler';
  import { Dropdown } from 'react-native-material-dropdown';
import { Component } from 'react';


  export default function CreateTicket(){
	
	/*let ServiceFamily = [{
		{value: 'Incident'},
        {value: 'User Request'},
		}];
  */
//  const [ServiceFamily, SetServiceFamily] = useState([
//   {value: 'Incident'},
//   {value: 'User Request'},
//   ]);
// const [Service, SetService] = useState([
//     {value: 'Incident'},
//     {value: 'User Request'},
//     ]);
// const [Impact, SetImpact] = useState([
//   {value: 'low'},
//   {value: 'personal'},
//   {value: 'company'},
//   ]);
// const [Urgency, SetUrgency] = useState([
//         {value: 'low'},
//         {value: 'medium'},
//         {value: 'high'},
//         ]);
const [selectedValue, setSelectedValue] = useState("value")
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      {/*list service*/}<Picker selectedValue={selectedValue} 
    label='Service Family' style={styles.dropDown}
    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
      <Picker.Item label="Incident" value="Incident"/>
      <Picker.Item label="User Request" value="Request"/>
      </Picker>
          
      {/*service*/}<Picker selectedValue={selectedValue} 
      label='Service' style={styles.dropDown}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
      <Picker.Item label="Incident" value="incident"/>
      <Picker.Item label="User Request" value="request"/>
      </Picker>
      <View style={styles.dropDown1}>
        {/*impact*/}
        <Picker selectedValue={selectedValue} 
        label='Impact' style={styles.Impact}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="No Impact" value="No Impact"/>
        <Picker.Item label="Personal" value="Personal"/>
        <Picker.Item label="Company" value="Company"/>
        </Picker>
        {/*urgency*/} 
        <Picker selectedValue={selectedValue} 
        label='Urgency' style={styles.urgency}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Low" value="Low"/>
        <Picker.Item label="Medium" value="Medium"/>
        <Picker.Item label="High" value="High"/>
        </Picker>
        </View>
        <TextInput >Title</TextInput>
        <TextInput >Description</TextInput>
        <Button title='Add Attachment' style={styles.button}></Button>
        <TextInput>file</TextInput>
        <Button title='Add Contact' style={styles.button}></Button>
        <TextInput>name</TextInput>
        <Button title='submit' style={styles.button1}></Button>
      </View>
    </View>
  );
}
const {width:panjang}=Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Arial',
    //backgroundColor: '#293B91',
    height: 80,
    paddingTop:38,
    paddingLeft:20,
 
  },
  button:{
    backgroundColor: '#D9001B',
    color: '#ffffff',
    justifyContent:'center',
  },
  button1:{
    backgroundColor: '#293B91',
    color: '#ffffff',
    justifyContent:'center',
  },

  dropDown: {
    fontFamily: 'Arial',
    justifyContent: 'center',
    color: "#ffffff",
    width: panjang-20,
    marginLeft: 40,
    marginRight: 40,
  },
  dropDown1: {
    flexDirection:'row',
    fontFamily: 'Arial',
    justifyContent: 'center',
    color: "#ffffff",
    width: panjang-20,
    marginLeft: 40,
    marginRight: 40,
    height: 40,
  },
  Impact: {
    fontFamily: 'Arial',
    justifyContent: 'center',
    color: "#ffffff",
    width: panjang-20,
    marginLeft:40,
    marginRight: 40,
    right: 1,
    height: 40,
  },
  urgency: {
    fontFamily: 'Arial',
    justifyContent: 'center',
    color: "#ffffff",
    width: panjang-20,
    marginLeft: 40,
    marginRight: 40,
    left: 1,
    height: 40,
  },
  
});