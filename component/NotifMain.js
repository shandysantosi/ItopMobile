import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default function Logo() {
    return (
      <>
        <View style={styles.container}>
            <View style={styles.Notif}>
                <Text style={styles.notifText}>Notif 1</Text>
            </View>
            <View style={styles.Notif}>
                <Text style={styles.notifText}>Notif 2</Text>
            </View>
            <View style={styles.Notif}>
                <Text style={styles.notifText}>Notif 3</Text>
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
        height: 40,
        top: 5,
        backgroundColor:'#000000',
        width:WIDTH-25,
        opacity:0.5,
        marginTop:6,
      },
      notifText:{
        paddingTop:8,
        paddingLeft: 3,
        fontSize: 15,
        fontWeight:'700',
        color: '#ffffff',
        textAlign: 'left',
        opacity: 1,
      },
  });
  