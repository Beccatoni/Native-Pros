import React , { useEffect } from "react";
import { Text, TextInput, Image, Button, View, Pressable, Dimensions } from "react-native";
import {useNavigation} from "@react-navigation/core"


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Page1 = ({}) => {
  const navigation = useNavigation()
  useEffect(()=> {
    setTimeout(()=> {
      navigation.navigate('Page2')
    }, 1000)
  })
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 150,
          width:width,
          height:height,

        }}
      >
       
       <View style={{backgroundColor:'black', width:'100%', height:'100%',justifyContent:'center',alignItems:'center'}}>
    <View >
 <Image source={require('../assets/logo.jpg')} />
</View>
</View>
      </View>
    </>
  );
};

export default Page1;
