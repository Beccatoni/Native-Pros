import { View, Text } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Series from './Series'
import Films from './Films'
import Origin from './Origin'
import Featured from './Featured'
import Page7 from './Page7'

const Top = createMaterialTopTabNavigator()

const TopNav = () => {
  return (
    <Top.Navigator>
    <Top.Screen name="Featured" component={Page7}/>
    <Top.Screen name="Series" component={Series}/>
    <Top.Screen name="Origin" component={Origin}/>
    <Top.Screen name="Films" component={Films}/>
    </Top.Navigator>
  )
}

export default TopNav