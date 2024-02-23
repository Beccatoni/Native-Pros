import React from "react";
import { Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import { TextInput,  } from "react-native-paper";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Page5 = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Page5");

const handlePress2 = () => {
    navigation.navigate("Page4");
}
  };
  return (
    <>
      <View
        style={{
          backgroundColor: "black",
          height: height,
          flex:1,
          padding: 40,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity onPress={handlePress}>
            <AntDesign name="arrowleft" size={30} color="yellow" />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            Register
          </Text>
        </View>
        <View>
            <Image source={require('../assets/logo.jpg')} />
            <Text>Sign Up to discover all our movies and enjoy our features.</Text>
        </View>
        <View>
        <TextInput
          label="Email"
          mode="flat"
          style={{ marginTop: 15, backgroundColor: 'black' }}
          theme={{ colors: { primary: 'white', placeholder: 'white', text: 'white', background: 'black' } }}
          right={<TextInput.Icon icon={"email-outline"} color="yellow" />}
        />
         <TextInput
          label="Password"
          mode="flat"
          style={{ marginTop: 15, backgroundColor: 'black' }}
          theme={{ colors: { primary: 'white', placeholder: 'white', text: 'white', background: 'black' } }}
          right={<TextInput.Icon icon="lock-outline" color="yellow" />}
        />
         <TextInput
          label="Confirm Password"
          mode="flat"
          style={{ marginTop: 15, backgroundColor: 'black' }}
          theme={{ colors: { primary: 'white', placeholder: 'white', text: 'white', background: 'black' } }}
          right={<TextInput.Icon icon="lock-outline" color="yellow" />}
        />  
        </View>

        <View style={{justifyContent:"space-between", alignItems:"center"}}>
            <TouchableOpacity style={{backgroundColor:"yellow", height:40, width:350,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{ color: "black", fontSize: 18, fontWeight: "normal" ,}}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            
            <Text style={{ color: "white", fontSize: 18, fontWeight: "normal" }}>By signing up I accept <Text style={{color:'yellow'}}>terms of use</Text> and privacy policy</Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "normal" }}>or simply sign up with</Text>
            <TouchableOpacity style={{backgroundColor:"grey", height:40, width:350,borderRadius:10 }}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "normal", borderRadius:10 }}>
                    Sign Up with apple
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"white", height:40, width:350,borderRadius:10}}>
                <Text style={{ color: "black", fontSize: 18, fontWeight: "normal" }}>
                    Sign Up with google
                </Text>
            </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "normal" }}>Already have an account? <Text style={{color:'yellow', fontWeight:"bold"}}>Sign In</Text></Text>
        </View>
        
      </View>
    </>
  );
};

export default Page5;
