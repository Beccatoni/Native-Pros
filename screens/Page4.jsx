import React from 'react';
import { Text, View, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Page4 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Page5');
  };

  const handlePress2 = () => {
    navigation.navigate('Page3');
  };

  return (
    <View style={{ flex: 1}}>
      <View style={{ backgroundColor: 'black', padding: 25, height:height }}>
        <TouchableOpacity onPress={handlePress2}>
          <AntDesign name="arrowleft" size={30} color="yellow" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', paddingTop: 20 }}>Create Account</Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'normal', paddingBottom: 20 }}>Enter information below or login with social account to get started</Text>
        <TextInput
          label="Email"
          mode="flat"
          style={{ marginTop: 15, backgroundColor: 'black' }}
          theme={{ colors: { primary: 'white', placeholder: 'white', text: 'white', background: 'black' } }}
          right={<TextInput.Icon icon={"email-outline"} color="yellow" />}
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
          style={{ marginTop: 15, backgroundColor: 'black' }}
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
      </View>
      <Pressable onPress={handlePress} style={{ backgroundColor: "yellow", height: 40, width: "100%", borderRadius: 8, marginTop: 'auto', marginBottom: 15 }}>
        <Text style={{ textAlign: 'center', padding: 10 }}>Register</Text>
      </Pressable>
    </View>
  )
}

export default Page4;
