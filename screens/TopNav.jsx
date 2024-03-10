import { View, Text } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Top = createMaterialTopTabNavigator()

const TopNav = () => {
  return (
    <Top.Navigator>
    <Top.Screen name="Home" component={Page7}/>
    <Top.Screen name="Action" component={Action}/>
    <Top.Screen name="Welcome" component={Page1}/>
    </Top.Navigator>
  )
}

export default TopNav