import React from "react";
import { Text, TextInput, Image, Button, View, Pressable } from "react-native";

const Page1 = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          margin: 150,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "yellow",
            height: 70,
            width: 70,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              padding: 5,
              color: "black",
              fontSize: 60,
              fontWeight: "bold",
            }}
          >
            M
          </Text>
        </Pressable>
        <Pressable style={{ height: 70, width: 139, borderRadius: 8 }}>
          <Text style={{ padding: 5, color: "white", fontSize: 60 }}>Muvi</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Page1;
