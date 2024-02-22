import React from "react";
import { Button, Text, View, Image, Pressable, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const Page3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Pressable style={styles.iconContainer}>
          <Text style={styles.iconText}>M</Text>
        </Pressable>
        <Pressable style={styles.titleContainer}>
          <Text style={styles.titleText}>Muvi</Text>
        </Pressable>
      </View>
      <Image
        source={require("../assets/tube.jpg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Welcome To MUVI</Text>
        <Text style={styles.descriptionText}>
          Browse Through our collections and discover hundreds of movies and
          series that you'll love!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Watch Movie</Text>
        </Pressable>
        <Pressable style={styles.signInButton}>
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
    paddingBottom: 90,
    flexDirection: "row",
    // alignItems: "center",
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
    // width: 300,
    // height: 20,
    resizeMode: "cover",
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
