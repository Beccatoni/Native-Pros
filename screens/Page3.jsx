import React, {useContext} from "react";
import { Button, Text, View, Image, Pressable, StyleSheet, Dimensions } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { MyContext } from "../global/ContextApi";

const width = Dimensions.get('window').width;

const Page3 = () => {
  const {darkMode,setDarkMode, DarkModeSet} = useContext(MyContext);

  const navigation = useNavigation()

const handlePress = ( ) => {
  navigation.navigate('Page5')
}

  return (
    <View style={[styles.container, {backgroundColor:darkMode?"#26282C":'white'}]}>
      <View style={styles.logoContainer}>
      <Image source={require('../assets/logo.jpg')} />
      </View>
      <View 
        style={{justifyContent: 'center',alignItems: 'center', height: 300, width: 400}}
        >
      <Image
        source={require("../assets/tube.jpg")}     

      />
      </View>
      
      <View style={styles.textContainer}>
        <Text style={[styles.headerText, {color:darkMode?'white':'black'} ]}>Welcome To MUVI</Text>
        <Text style={[styles.descriptionText, {color:darkMode?'white':'black'}]}>
          Free movie streaming all your needs everytime and everywhere.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Watch Movie</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Page4')} style={styles.signInButton}>
          <Text style={[styles.signInText, {color:darkMode?'white':'black'}]}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

 export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#26282C',
    height: "100%",
    gap:40
  },
  logoContainer: {
    paddingBottoms: 40,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor:'black',
    justifyContent:'center',
    height:110,
    width:width
  },
  titleContainer: {
    height: 70,
    width: 90,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "white",
    fontSize: 40,
    marginRight: 0,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color:'white',
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  descriptionText: {
    color:'white',
    textAlign: "center",
    fontSize:17
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#E9AB17",
    height: 35,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    paddingTop: 5,
  },
   signInButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    color:'white',
  },
});

export default Page3;
