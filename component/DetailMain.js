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

export default function DetailMainMain() {
  const navigation = useNavigation();
    return (
      <>
        <View style={styles.container}>
            <View style={styles.Ticket}>
                <Text style={styles.Heading}>
                    Incident Ticket
                </Text>
                <View style={styles.Detail}>
                    <Text style={styles.Title}>
                        Title : 
                    </Text>
                    <Text style={styles.IsiTitle}>
                        xxxxxxxxxx
                    </Text>
                </View>
                <View style={styles.Detail}>
                    <Text style={styles.Service}>
                        Service : 
                    </Text>
                    <Text style={styles.Isi}>
                        xxxxxxxxxx
                    </Text>
                </View>
                <View style={styles.Detail}>
                    <Text style={styles.SSCategory}>
                        Service Sub Category : 
                    </Text>
                    <Text style={styles.Isi}>
                        xxxxxxxxxx
                    </Text>
                </View>
                <View style={styles.Detail}>
                    <Text style={styles.SSCategory}>
                        Impact : 
                    </Text>
                    <Text style={styles.Isi}>
                        xxxxxxxxxx
                    </Text>
                </View>
                <View style={styles.Detail}>
                    <Text style={styles.SSCategory}>
                        Urgancy : 
                    </Text>
                    <Text style={styles.Isi}>
                        xxxxxxxxxx
                    </Text>
                </View>
            </View>
            <View style={styles.Ticket}>
                <View>
                    <Text style={styles.Desc}>
                        Description : 
                    </Text>
                    <Text style={styles.IsiDesc}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                     </Text>
                </View>       
            </View>
            <View style={styles.Ticket}>
                <View>
                    <Text style={styles.Picture}>
                        Picture : 
                    </Text>
                    <Image 
                        style={{width: 120, height: 120,top:6,left:WIDTH-290}}
                        source={require('../Images/noImage.png')}
                    />              
                </View>       
            </View>
            <View>
                <View>
                    <Text style={styles.Attach}>
                        Attachment : 
                    </Text>
                   <Text style={styles.IsiAttach}>
                       XXXXXXX
                   </Text>
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
   
      Ticket:{
        paddingTop:5,
        paddingLeft: 6,
        paddingBottom:14,
        fontWeight:'700',
        color: '#ffffff',
        textAlign: 'left',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      },
      Heading:{
        fontSize: 22,
        fontWeight: "700",
        color: '#7F7F7F',
      },
      Title:{
        paddingTop:15,
        fontSize: 15,
        fontWeight: "700",
        color: '#7F7F7F',
      },
      Detail:{
        flexDirection:'row',
      },
      IsiTitle:{
        paddingTop:15,
        fontSize: 15,
        paddingLeft:5,
      },
      Service:{
        paddingTop:10,
        fontSize: 15,
        fontWeight: "700",
        color: '#7F7F7F',
      },
      SSCategory:{
        paddingTop:10,
        fontSize: 15,
        fontWeight: "700",
        color: '#7F7F7F',
      },
      Desc:{
        paddingTop:10,
        fontSize: 15,
        fontWeight: "700",
        color: '#7F7F7F',
      },
      Picture:{
        paddingTop:10,
        fontSize: 15,
        fontWeight: "700",
        color: '#7F7F7F',
      },
      Attach:{
        paddingTop:10,
        fontSize: 15,
        fontWeight: "700",
        color: '#7F7F7F',
      },
      Isi:{
        paddingTop:10,
        fontSize: 15,
        paddingLeft:5,
      },
      IsiDesc:{
        paddingBottom:10,
        fontSize: 15,
      },
      IsiAttach:{
        paddingTop:5,
        fontSize: 15,
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
     
  });
  