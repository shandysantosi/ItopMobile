import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconP from 'react-native-vector-icons/Ionicons';
import IconL from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';
import { Component } from 'react';

const {width: WIDTH} = Dimensions.get('window');

const VALID_EMAIL = 'william.hans@jedi.id';
const VALID_PASSWORD = '123456';


export default function Form(){
   

    const navigation = useNavigation();



    return (
      <>
        
        <View style={styles.container}>
          
            <TextInput style={styles.inputBox}
                underlineColorAndroid="#797979"
                placeholder= "Username"
                placeholderTextColor= "#7F7F7F"
            />
            <IconP name={'md-person'} size={22} color="#D7D7D7"
            style={styles.inputIconP}/>
            <TextInput style={styles.inputBox}
                underlineColorAndroid="#797979"
                placeholder= "Password"
                secureTextEntry={true} 
                placeholderTextColor= "#7F7F7F"
            />
             <IconL name={'lock'} size={22} color="#D7D7D7"
            style={styles.inputIconL}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.buttonText}>Login</Text>
                
            </TouchableOpacity>
        </View>
      </>
    );

};
  
  const styles = StyleSheet.create({
    container: {
        fontFamily:'Arial',
        flex: 0,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent : 'center'
    },

    inputIconP:{
        position: 'absolute',
        top: 25,
        right: 30,

    },
    inputIconL:{
        position: 'absolute',
        top: 95,
        right: 30,

    },

    inputBox: {
        width: WIDTH-65,
        height :45,
        paddingHorizontal:50,
        //paddingVertical:20,
        paddingLeft:10,
        fontSize:20,
        color:'#7F7F7F',
        marginVertical:15,
        marginHorizontal: 10,
        
    },
    button:{
        width: WIDTH-65,
        backgroundColor: '#293B91',
        marginVertical:10,
        paddingVertical: 12,
    },

    buttonText:{
        fontSize: 20,
        fontWeight:'normal',
        color: '#ffffff',
        textAlign: 'center',
    },
  });
  
