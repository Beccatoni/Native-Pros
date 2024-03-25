// Sign In page

import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { height, width } from "./Page5";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Firebase_App, Firebase_Auth } from "../firebaseConfiguration";
import { signInWithEmailAndPassword,  } from "firebase/auth";
import { MyContext } from "../global/ContextApi";

import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";

export const authenticate = Firebase_Auth;

const Page4 = ({ navigation }) => {
  const {darkMode,setDarkMode, DarkModeSet} = useContext(MyContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passworShow = () => {
    setShowPassword(!showPassword);
  };

  const ValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validateForm = () => {
    let valid = true;
    // Email validation
    if (email.trim() === "") {
      setEmailError("Email is required");
      valid = false;
    } else if (!ValidEmail(email)) {
      setEmailError("Invalid Email");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (password.trim() === "") {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handlePress = async () => {
    if (validateForm()) {
      // Navigate to the next screen or perform sign-in action
      // navigation.navigate("Mytabs");
      try {
        const User = await signInWithEmailAndPassword(
          authenticate,
          email,
          password
        );

        // const idToken = await User.getIdToken();
        console.log(User);
        showMessage({
          message: User.user.email,
          description: "sign in success",
          type: "success",
          duration: 10000,
        });
        navigation.navigate("Mytabs");
      } catch (error) {
        console.log(error);
        showMessage({
          message: error.code.toString(),
          description: "sign in failed",
          type: "danger",
          duration: 10000,
        });
      }

      // storing email
      try {
        //  await AsyncStorage.setItem('email', email);
        // console.log("Email stored successfully");
        const data = {
          email: email,
          password: password,
        };
        const jsonData = JSON.stringify(data);
        await AsyncStorage.setItem("data", jsonData);
      } catch (error) {
        console.error(error);
      }

      try {
        const getData = await AsyncStorage.getItem("data");
        if (getData != null) {
          console.log(JSON.parse(getData));
        } else {
          console.log("No data");
        }
        // const getEmail = await AsyncStorage.getItem('email');
        // console.log(getEmail);
      } catch (error) {
        console.error(error);
      }
      // AsyncStorage.setItem("email", email)
      //    .then((result)=>{
      //     console.log("Email stored successfully:", email);
      //     // console.log(result);
      //    })
      //    .catch(()=>{
      //     console.error('Error storing email:', error);
      //    });
    }
  };

  // const gettingData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("email");
  //     if (value!== null) {
  //       console.log(value);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <FlashMessage position={"top"} />
      <View
        style={{
          backgroundColor: darkMode?"#26282C":"white",
          height: height,
          width: width,
          justifyContent: "center",
          padding: 20,
          gap: 15,
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="#E9AB17" />
          </TouchableOpacity>
          <Text style={{ color:darkMode? "white":"black", fontSize: 23, fontWeight: "bold" }}>
            Sign In
          </Text>
        </View>
        <Text
          style={{
            color:darkMode? "white":"black",
            fontSize: 16,
            fontWeight: "normal",
          }}
        >
          Email Address
        </Text>
        <TextInput
          placeholder="e.g johndoe@gmail.com"
          mode="outlined"
          textColor={darkMode?"white":"black"}
          style={{ backgroundColor: "transparent" }}
          theme={{
            colors: {
              primary: "white",
              placeholder: "white",
              text: "white",
              underlineColor: "transparent",
            },
          }}
          onChangeText={setEmail}
          error={emailError !== ""}
          left={<TextInput.Icon icon={"email-outline"} color="grey" />}
        />
        {emailError !== "" && (
          <Text style={{ color: "red" }}>{emailError}</Text>
        )}

        <Text
          style={{
            color:darkMode? "white":"black",
            fontSize: 16,
            fontWeight: "normal",
          }}
        >
          Password
        </Text>
        <TextInput
          placeholder="Your password"
          mode="outlined"
          textColor={darkMode?"white":"black"}
          style={{ backgroundColor: "transparent" }}
          theme={{
            colors: {
              primary: "white",
              placeholder: "white",
              text: "white",
              background: "transparent",
            },
          }}
          onChangeText={setPassword}
          error={passwordError !== ""}
          left={<TextInput.Icon icon="lock-outline" color="grey" />}
          right={
            <TextInput.Icon
              color="grey"
              icon={showPassword ? "eye-off" : "eye"}
              onPress={passworShow}
            />
          }
          secureTextEntry={!showPassword}
        />
        {passwordError !== "" && (
          <Text style={{ color: "red" }}>{passwordError}</Text>
        )}

        <Text
          style={{
            color:darkMode? "white":"black",
            fontSize: 16,
            textAlign: "right",
            marginRight: 10,
          }}
          onPress={()=>{navigation.navigate('Resetpass')}}
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
            color:darkMode?"white":"black",
            fontSize: 16,
            fontWeight: "normal",
            textAlign: "center",
          }}
        >
          or signin with
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor:"black",
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            height: 45,
            width: 370,
            borderRadius: 5,
            borderColor: "grey",
            padding: 10,
            marginTop: 10,
          }}
        >
          <AntDesign name="apple1" size={24} color="white" />
          <Text style={{ color: "white", fontSize: 16, fontWeight: "normal" }}>
            Sign In with Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:darkMode?"white":"black",
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            height: 45,
            width: 370,
            borderRadius: 5,
            padding: 10,
            borderColor: "grey",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/GOOGLE.png")}
            style={{ height: 20, width: 20 }}
          />
          <Text style={{ color:darkMode?"black":"white", fontSize: 16, fontWeight: "normal" }}>
            Sign In with Google
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
