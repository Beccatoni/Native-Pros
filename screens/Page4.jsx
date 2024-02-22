import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { TextInput, Button } from 'react-native-paper';

const Page4 = () => {
  return (
    <>
      <View></View>
      <View style={{ backgroundColor: 'black', width: "100%", height: "100%", padding: 25, marginTop: 10 }}>
        <AntDesign name="arrowleft" size={30} color="yellow" />
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', paddingTop: 20 }}>Create Account</Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '' }}>Enter information below or login with social account to get started</Text>
        <TextInput
          label="Email"
          mode="outlined"
          style={{ marginTop: 15, backgroundColor: 'black' }}
          theme={{ colors: { primary: 'white', placeholder: 'white', text: 'white', background: 'black' } }}
          right={<TextInput.Icon name="email" color="yellow" />}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={{ marginTop: 15, backgroundColor: 'black' }}
          theme={{ colors: { primary: 'white', placeholder: 'white', text: 'white', background: 'black' } }}
          right={<TextInput.Icon name="eye" color="yellow" />}
        />
        <TextInput
          label="Confirm Password"
          mode="outlined"
          secureTextEntry
          style={{ marginTop: 15, marginBottom: 15, backgroundColor: 'black' }}
          theme={{ colors: { primary: 'white', placeholder: 'white', text: 'white', background: 'black' } }}
          right={<TextInput.Icon name="eye" color="yellow" />}
        />
        <Text style={{ color: "white", paddingTop: 10, paddingBottom: 10 }}>or continue with</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <Button
            icon={() => <AntDesign name="google" size={24} color="white" />}
            mode="contained"
            style={{ borderRadius: 8, flex: 1, marginRight: 5, backgroundColor: 'red' }}
            contentStyle={{ height: 50, width: 50 }}
          >
          </Button>
          <Button
            icon={() => <Entypo name="facebook" size={24} color="white" />}
            mode="contained"
            style={{ borderRadius: 8, flex: 1, marginLeft: 5, backgroundColor: 'blue' }}
            contentStyle={{ height: 40 }}
          >
            Facebook
          </Button>
        </View>
        <Pressable style={{ backgroundColor: "yellow", height: 40, width: "100%", borderRadius: 8, marginTop: 10 }}>
          <Text style={{ textAlign: 'center', padding: 10 }}>Register</Text>
        </Pressable>
      </View>
    </>
  )
}

export default Page4;
