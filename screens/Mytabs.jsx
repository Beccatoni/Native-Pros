import { View, Text } from 'react-native'
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/core'
import {AntDesign,} from 'react-native-vector-icons/AntDesign';
import { Entypo,  MaterialCommunityIcons } from '@expo/vector-icons';
import Page7 from './Page7';
import Search from './Search';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Mytabs = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' 
            component={Page7}
            options={{
                tabBarIcon: ()=> <AntDesign name='home' size={25}/>
            }} />
           <Tab.Screen name='Search' 
            component={Search}
            options={{
                tabBarIcon: ()=> <Entypo name="magnifying-glass" size={24} color="black" />
            }} />

<Tab.Screen name='Profile' 
            component={Profile}
            options={{
                tabBarIcon: ()=> <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
            }} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Mytabs;