import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Page7 from './Page7';
import Search from './Search';
import Profile from './Profile';
import Mylist from './Mylist';
import { ContextApi } from '../global/ContextApi';

const Drawer = createDrawerNavigator(); 
const DrawerNav = () => {
  return (
    <ContextApi>
    
        <Drawer.Navigator initialRouteName='Profile'>
            <Drawer.Screen name='Profile' component={Profile} options={{headerShown:false}} />
            <Drawer.Screen name='Search' component={Search} />
            <Drawer.Screen name='Home' component={Page7} />
            <Drawer.Screen name='Mylist' component={Mylist} />
        </Drawer.Navigator>
        </ContextApi>
  )
}

export default DrawerNav