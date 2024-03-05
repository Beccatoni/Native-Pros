import React, { useEffect } from "react";
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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Page1 = ({}) => {
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
            backgroundColor: "#26282C",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image source={require("../assets/logo.jpg")} style={{height:85, width:270}} />
          </View>
        </View>
    
    </>
  );
};

export default Page1;
