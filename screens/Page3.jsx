import React from "react";
import { Button, Text, View, Image, Pressable, StyleSheet, Dimensions } from "react-native";
import {useNavigation} from '@react-navigation/native'

const width = Dimensions.get('window').width;

const Page3 = () => {
  const navigation = useNavigation()

const handlePress = ( ) => {
  navigation.navigate('Page4')
}
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../assets/logo.jpg')} />
      </View>
      <View 
        style={{backgroundColor:'#26282c',justifyContent: 'center',alignItems: 'center', height: 300, width: 400}}
        >
      <Image
        source={require("../assets/tube.jpg")}  
        resizeMethod="cover"    

      />
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Welcome To MUVI</Text>
        <Text style={styles.descriptionText}>
          Browse Through our collections and discover hundreds of movies and
          series that you'll love!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Watch Movie</Text>
        </Pressable>
        <Pressable onPress={handlePress} style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#1F2123",
    height: "100%",
  },
  logoContainer: {
    paddingBottoms: 40,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor:'black',
    justifyContent:'center',
    height:9,
    width:width,
    
  },
  iconContainer: {
    backgroundColor: "yellow",
    height: 45,
    width: 75,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
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
  image: {
    display:'flex',
    
    marginBottom: 20,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  descriptionText: {
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "yellow",
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
    color: "white",
  },
});

export default Page3;
