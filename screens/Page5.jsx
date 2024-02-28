import React from "react";
import { Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

const styles = {
  container: {
    backgroundColor: "#26282C",
    height: height,
    justifyContent: "center",
    padding: 15,
    width: width,
    gap: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: width,
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: "center",
    gap: 20,
  },
  logo: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  input: {
    backgroundColor: "transparent",
  },
  signUpButton: {
    backgroundColor: "#E9AB17",
    height: 50,
    width: 350,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    color: "black",
    fontSize: 16,
    fontWeight: "normal",
  },
  termsText: {
    color: "white",
    fontSize: 12,
    fontWeight: "normal",
  },
};

const Page5 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Page4");
  };

  const handlePress2 = () => {
    navigation.navigate("Page6");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePress2}>
            <AntDesign name="arrowleft" size={30} color="yellow" />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 23, fontWeight: "bold" }}>
            Register
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.jpg")} />
          <Text style={styles.logo}>
            Sign Up to discover all our movies and enjoy our features.
          </Text>
        </View>
        <View>
          <TextInput
            label="Email"
            mode="flat"
            style={styles.input}
            theme={{
              colors: {
                primary: "white",
                placeholder: "white",
                text: "white",
                underlineColor: "transparent",
              },
            }}
            right={<TextInput.Icon icon={"email-outline"} color="#E9AB17" />}
          />
          <TextInput
            label="Password"
            mode="flat"
            style={styles.input}
            theme={{
              colors: {
                primary: "white",
                placeholder: "white",
                text: "white",
                background: "transparent",
              },
            }}
            right={<TextInput.Icon icon="lock-outline" color="#E9AB17" />}
          />
          <TextInput
            label="Confirm Password"
            mode="flat"
            style={styles.input}
            theme={{
              colors: {
                primary: "white",
                placeholder: "white",
                text: "white",
                background: "transparent",
              },
            }}
            right={<TextInput.Icon icon="lock-outline" color="#E9AB17" />}
          />
        </View>

        <View style={{ justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 20 }}>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.termsText}>
            By signing up I accept <Text style={{ color: "#E9AB17" }}>terms of use</Text> and{" "}
            <Text style={{ color: "#E9AB17", fontWeight: "normal" }}>privacy policy</Text>
          </Text>
          <Text style={{ color: "white", fontSize: 11, fontWeight: "normal" }}>
            or simply sign up with
          </Text>
          <TouchableOpacity style={{ backgroundColor: "black", flexDirection:"row", gap:20, justifyContent:"center", alignItems:"center",  height: 50, width: 350, borderRadius: 5, padding: 10 }}>
            <AntDesign name="apple1" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 16, fontWeight: "normal",  }}>
              Sign Up with apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "white", flexDirection:"row", gap:20, justifyContent:"center", alignItems:"center", height: 50, width: 350, borderRadius: 5, padding: 10 }}>
          <Image source={require('../assets/GOOGLE.png')} style={{height:20, width:20}}/>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "normal" }}>
              Sign Up with google
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "normal", marginTop: 20,  }}>
            Already have an account?
            <TouchableOpacity onPress={handlePress}>
              <Text style={{ color: "#E9AB17", fontWeight: "bold" }}>Sign In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Page5;
