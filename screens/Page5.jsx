import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Firebase_App, Firebase_Auth } from "../firebaseConfiguration";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authenticate } from "./Page4";
import { MyContext } from "../global/ContextApi";

// const auth = initializeAuth(Firebase_App, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });



export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

// registration
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

const Page5 = ({ navigation }) => {
  
  const {darkMode, setDarkMode, DarkModeSet} = useContext(MyContext);

  const handlePress2 = () => {
    navigation.navigate("Page4");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  

  const ValidEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // validations
  const validateForm = () => {
    let valid = true;

    if (email.length === 0 && email.trim() === "") {
      setEmailError("Email is required😒");
      valid = false;
    }else if(!ValidEmail(email)){
      setEmailError("Invalid Email😒");
      valid = false;
    }else {
      
      setEmailError("");
    }

    // password
  if (password.trim() === '' && password.length === 0){
    setPasswordError('Password is required🤷‍♀️');
    valid=false;
  }else if(confirmPassword !== password){
    setPasswordError('Passwords do not match🤷‍♀️');
    valid=false;
  } else {
    setPasswordError('');
    setConfirmPasswordError('');
  }
  return valid;

  }

  const submitHandler = async() => {

    if (validateForm()) {
      console.log(email);
      console.log(password);
      
      try {
      const user = await createUserWithEmailAndPassword(authenticate, email, password);
      console.log(user);
      } catch (error) {
        console.error(error);
      }
      navigation.navigate('Page4')

    }
  }

  
  return (
    <>
      <View style={[styles.container, {backgroundColor:darkMode?"#26282C":"white"}]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="#E9AB17" />
          </TouchableOpacity>
          <Text style={{ color:darkMode? "white":"black", fontSize: 23, fontWeight: "bold" }}>
            Register
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.jpg")} />
          <Text style={[styles.logo, {color:darkMode?'white':'black'}]}>
            Sign Up to discover all our movies and enjoy our features.
          </Text>
        </View>
        <View>
          <TextInput
            label="Email"
            mode="flat"
            style={styles.input}
            textColor={darkMode?"white":"black"}
            theme={{
              colors: {
                primary: "white",
                placeholder: "white",
                text: darkMode?"white":"black",
                underlineColor: "transparent",
              },
              
            }}
            onChangeText={setEmail}
            error={emailError}
            right={<TextInput.Icon icon={"email-outline"} color="#E9AB17" />}
          />
          {emailError? (<Text style={{color:darkMode?"white":"black" }}>{emailError}</Text>): null}



          <TextInput
            label="Password"
            mode="flat"
            textColor={darkMode?"white":"black"}
            style={styles.input}
            theme={{
              colors: {
                primary: "white",
                placeholder: "white",
                text:darkMode?"white":"black",
                background: "transparent",
              },
            }}
            onChangeText={setPassword}
            error={passwordError}
            activeOutlineColor="blue"
            right={<TextInput.Icon icon="lock-outline" color="#E9AB17" />}
          />
          {passwordError ? (<Text style={{color:"red"}}>{passwordError}</Text>):null}
          <TextInput
            label="Confirm Password"
            mode="flat"
            textColor={darkMode?"white":"black"}
            style={styles.input}
            theme={{
              colors: {
                primary: "white",
                placeholder: "white",
                text: darkMode?"white":"black",
                background: "transparent",
              },
            }}
            onChangeText={setConfirmPassword}
            error={setConfirmPassword}
            right={<TextInput.Icon icon="lock-outline" color="#E9AB17" />}
          />
          {confirmPasswordError?(<Text style={{color:'red'}}>{confirmPasswordError}</Text>):null}
        </View>

        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            marginTop: 20,
          }}
        >
          <TouchableOpacity style={styles.signUpButton} onPress={submitHandler}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={[styles.termsText, {color:darkMode?"white":"black"}]}>
            By signing up I accept{" "}
            <Text style={{ color: "#E9AB17" }}>terms of use</Text> and{" "}
            <Text style={{ color: "#E9AB17", fontWeight: "normal" }}>
              privacy policy
            </Text>
          </Text>
          <Text style={{ color:darkMode?"white":"black", fontSize: 11, fontWeight: "normal" }}>
            or simply sign up with
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              flexDirection: "row",
              gap: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 350,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <AntDesign name="apple1" size={24} color="white" />
            <Text
              style={{color:"white", fontSize: 16, fontWeight: "normal" }}
            >
              Sign Up with apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor:darkMode?"white":"black",
              flexDirection: "row",
              gap: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 350,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Image
              source={require("../assets/GOOGLE.png")}
              style={{ height: 20, width: 20 }}
            />
            <Text
              style={{ color:darkMode?"black":"white", fontSize: 16, fontWeight: "normal" }}
            >
              Sign Up with google
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color:darkMode?"white":"black",
              fontSize: 18,
              fontWeight: "normal",
              marginTop: 20,
            }}
          >
            Already have an account?
            <TouchableOpacity onPress={handlePress2}>
              <Text style={{ color: "#E9AB17", fontWeight: "bold" }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Page5;
