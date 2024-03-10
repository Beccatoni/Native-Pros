import React, { useContext, useEffect } from "react";
import {
  Text,
  TextInput,
  Image,
  Button,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { MyContext } from "../global/ContextApi";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Page1 = ({}) => {
  const {darkMode,setDarkMode, DarkModeSet} = useContext(MyContext);
  
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Page2");
    }, 1000);
  });
  return (
    <>
      
        <View
          style={{
            backgroundColor:darkMode?"#26282C":'white',
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",}
          }
        >
          <View>
            <Image source={require("../assets/logo.jpg")} style={{height:85, width:270}} />
          </View>
        </View>
    
    </>
  );
};

export default Page1;
