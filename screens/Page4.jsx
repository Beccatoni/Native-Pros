import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { height, width } from "./Page5";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Page4 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Mytabs");
  };

  const handlePress2 = () => {
    navigation.navigate("Page3");
  };
  return (
    <>
      <View
        style={{
          backgroundColor: "#26282C",
          height: height,
          width: width,
          justifyContent: "center",
          padding: 20,
          gap: 15,
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePress2}>
            <AntDesign name="arrowleft" size={30} color="#E9AB17" />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 23, fontWeight: "bold" }}>
            Sign In
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "normal",
          }}
        >
          Email Address
        </Text>
        <TextInput
          placeholder="e.g johndoe@gmail.com"
          mode="outlined"
          style={{ backgroundColor: "transparent" }}
          theme={{
            colors: {
              primary: "white",
              placeholder: "white",
              text: "white",
              underlineColor: "transparent",
            },
          }}
          left={<TextInput.Icon icon={"email-outline"} color="grey" />}
        />
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "normal",
          }}
        >
          Password
        </Text>
        <TextInput
          placeholder="Your password"
          mode="outlined"
          style={{ backgroundColor: "transparent" }}
          theme={{
            colors: {
              primary: "white",
              placeholder: "white",
              text: "white",
              background: "transparent",
            },
          }}
          left={<TextInput.Icon icon="lock-outline" color="grey" />}
        />

        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "right",
            marginRight: 10,
          }}
        >
          Forgot Password?
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#E9AB17",
            height: 45,
            width: 370,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handlePress}
        >
          <Text
            style={{
              color: "black",
              fontSize: 16,
              fontWeight: "normal",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          }}
        >
          or signin with
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "black",
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            height: 45,
            width: 370,
            borderRadius: 5,
            borderColor: "grey",
            padding: 10,
          }}
        >
          <AntDesign name="apple1" size={24} color="white" />
          <Text style={{ color: "white", fontSize: 16, fontWeight: "normal" }}>
            Sign Up with apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            height: 45,
            width: 370,
            borderRadius: 5,
            padding: 10,
            borderColor: "grey",
          }}
        >
          <Image
            source={require("../assets/GOOGLE.png")}
            style={{ height: 20, width: 20 }}
          />
          <Text style={{ color: "black", fontSize: 16, fontWeight: "normal" }}>
            Sign Up with google
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
    paddingBottom: 40,
  },
};

export default Page4;
