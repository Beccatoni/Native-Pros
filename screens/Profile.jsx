import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { height, width } from "./Page5";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather, AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Firebase_Auth } from "../firebaseConfiguration";

const Profile = ({ navigation }) => {
  const LogOut = async () => {
    try {
      await Firebase_Auth.signOut();
      navigation.navigate("Page4");
      console.log('Signed out successfully')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* <SafeAreaView> */}
      <View
        style={{ backgroundColor: "#26282C", height: height, width: width, gap:35 }}
      >
        <View style={{ backgroundColor: "black", height: 120, width: width }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              alignSelf: "start",
              textAlign: "left",
              paddingTop: 60,
              paddingLeft: 20,
              fontSize: 20,
            }}
          >
            More
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/beccas.jpg")}
            style={{ width: 100, height: 100, borderRadius: 7 }}
          />
          <Text style={{ color: "white" }}>Rebecca G</Text>
          <Text style={{ color: "white" }}>rbcctoni@gmail.com</Text>
          <Text style={{ color: "#E9AB17" }}>Edit Profile</Text>
        </View>
        <View style={{ flexDirection: "column", borderRadius: 10, backgroundColor:"#343434", height: 400, gap:20, justifyContent:"center", paddingLeft:20 }}>
          <Pressable style={{ flexDirection: "row", gap:20 }}>
            <AntDesign name="inbox" size={24} color="white" />
            <Text style={{ color: "white" }}>Inbox</Text>
          </Pressable>
          <Pressable style={{ flexDirection: "row", gap:20 }}>
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color="white"
            />
            <Text style={{ color: "white" }}>Profile</Text>
          </Pressable>
          <Pressable style={{ flexDirection: "row", gap:20 }}>
            <MaterialIcons name="language" size={24} color="white" />
            <Text style={{ color: "white" }}>Language</Text>
          </Pressable>
          <Pressable style={{ flexDirection: "row", gap:20 }}>
            <Feather name="help-circle" size={24} color="white" />
            <Text style={{ color: "white" }}>Help, FAQ</Text>
          </Pressable>
          <Text style={{ color: "white" }}> Terms and Conditions</Text>
          <Text style={{ color: "white" }}>Privacy & Policy</Text>
          <Pressable onPress={LogOut} style={{borderWidth:1, borderColor:"black", width:'90%', height:35, borderRadius:5, marginBottom:20}}>
            <Text style={{ color: "red", textAlign:"center" }}>Log Out</Text>
          </Pressable>
        </View>
        {/* <View>
      <Text onPress={() => navigation.navigate("Mytabs")}>Profile</Text>
    </View> */}
      </View>
      {/* </SafeAreaView> */}
    </>
  );
};

export default Profile;
