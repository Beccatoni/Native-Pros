import React from "react";
import { Button, ImageBackground, Text, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const Page2 = () => {
  const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
  return (
    <>
      <ImageBackground
        source={require("../assets/joker.png")}
        style={{
          flex: 1,
          justifyContent: "space-between",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          alignItems: "center",
          opacity: 0.6,
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      >
        <View style={{ flex: 1, alignItems: "center", justifyContent:"center", paddingTop:30, backgroundColor: "rgba(0, 0, 0, 0.3)", widht:'100%', height:'100%'}}>
          <Text style={{ color: "white", fontWeight: "normal", fontSize: 30 }}>
            Enjoy your favorite movie everywhere
          </Text>
          <Text style={{ color: "white" }}>
            Browse Through our collections and discover hundreds of movies and
            series that you'll love!
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <View
              style={{
                backgroundColor: "yellow",
                height: 10,
                width: 50,
                borderRadius: 10,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "white",
                height: 10,
                width: 20,
                borderRadius: 10,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "white",
                height: 10,
                width: 20,
                borderRadius: 10,
              }}
            ></View>
          </View>
        </View>
        <View style={{ alignItems: "baseline" }}>
          <Pressable
            style={{
              backgroundColor: "yellow",
              height: 30,
              width: 300,
              paddingLeft: 95,
              borderRadius: 8,
              marginBottom:15,
            }}
          >
            <Text style={{ paddingTop: 5 }}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
};

export default Page2;
