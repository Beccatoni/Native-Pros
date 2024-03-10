import { View, Text } from "react-native";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/core";
import AntDesign from "react-native-vector-icons/AntDesign";
import  Entypo from "react-native-vector-icons/Entypo";
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome } from '@expo/vector-icons';
import Page7 from "./Page7";
import Search from "./Search";
import Profile from "./Profile";
import Mylist from "./Mylist";
import DrawerNav from "./Drawer";
import { ContextApi } from "../global/ContextApi";

const Tab = createBottomTabNavigator();

export default function Mytabs() {
  return (
    <ContextApi>
    <Tab.Navigator initialRouteName="Page7">
      <Tab.Screen
        name="Home"
        component={Page7}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => <AntDesign name="home" size={size} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
        headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="magnifying-glass" size={size} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="My List"
        component={Mylist}
        options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
            <FontAwesome name="folder-o" size={24} color="black" />
      
      
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={DrawerNav}
        options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
      
      
          ),
        }}
      />
      
      
    </Tab.Navigator>
    </ContextApi>

  );
}

// export default Mytabs;
