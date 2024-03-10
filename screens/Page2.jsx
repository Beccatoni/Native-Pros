import React, {useContext} from "react";
import { Text, View, Pressable, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { width } from "./Page5";
import { MyContext } from "../global/ContextApi";

const Page2 = () => {
  const {darkMode,setDarkMode, DarkModeSet} = useContext(MyContext);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Page3");
  };

  return (
    <ImageBackground
      source={require("../assets/joker.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>
          Enjoy your favorite movie everywhere
        </Text>
        <Text style={styles.subtitle}>
          Browse through our collections and discover hundreds of movies and series that you'll love!
        </Text>
        <View style={styles.progressBar}>
          <View style={styles.progressBarItemYellow} />
          <View style={styles.progressBarItemWhite} />
          <View style={styles.progressBarItemWhite} />
        </View>
      </View>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: width,
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontWeight: "normal",
    fontSize: 30,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    textAlign: "center",
  },
  progressBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignSelf:"flex-start",
    gap:3
  },
  progressBarItemYellow: {
    backgroundColor: "#E9AB17",
    height: 10,
    width: 50,
    borderRadius: 10,
  },
  progressBarItemWhite: {
    backgroundColor: "white",
    height: 10,
    width: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#E9AB17",
    height: 50,
    width: 380,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 15,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default Page2;
