import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';

import Login from '../pages/Login';
import Main from '../pages/Home';
import Notif from '../pages/Notif';
import Incident from '../pages/Incident';
import Request from '../pages/Request';
import Ticket from '../pages/CreateTicket';
import Detail from '../pages/DetailTIcket';

const Stack = createStackNavigator();

export default function indexStact(){
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName ="Login" headerMode="none">
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Main" component={Main}/>
                    <Stack.Screen name="Notif" component={Notif}/>
                    <Stack.Screen name="Incident" component={Incident}/>
                    <Stack.Screen name="Request" component={Request}/>
                    <Stack.Screen name="Ticket" component={Ticket}/>
                    <Stack.Screen name="Detail" component={Detail}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}