import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { height, width } from './Page5';
import { authenticate } from './Page4';
import { sendPasswordResetEmail } from 'firebase/auth';

const Resetpass = async () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async ()=> {
      try {
      const sendLink = await sendPasswordResetEmail(authenticate, email)
      console.log(sendLink)
      if (sendLink){
        console.log('A reset password link has been sent', sendLink);
      }
        // const link = await authenticate.generatePasswordResetLink(email, actionCodeSettings)
    } catch (error) {
        console.error('An error occured while generating a reset password link', error);
    }}
  return (
    <View style={{justifyContent:"center", flexDirection:"column",  backgroundColor: "#26282C",
    height: height,
    width: width,
    padding: 20,
    gap: 15,}}>
        <View style={{justifyContent:"center", flexDirection:"column",}}>
      <Image source={require('../assets/logo.jpg')} />
      <Text style={{alignSelf:"flex-start", color:"white", fontSize:23, fontWeight:"bold"}}>Reset Your Password</Text>
      </View>
    
      {/* <Text>Resetpass</Text> */}
      
      <Text style={{color:"white", textAlign:"left"}}>Email: </Text>
      <TextInput
          placeholder="e.g johndoe@gmail.com"
          mode="outlined"
          textColor="white"
          style={{ backgroundColor: "transparent", width:300 }}
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
        <TouchableOpacity style={{backgroundColor:"#E9AB17", borderRadius:6, height: 50,
    width: 250,
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: "center"}} onPress={handleSubmit}>
            <Text style={{ color:"black", fontWeight: "normal", textAlign:"center" }}>Reset Password</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Resetpass