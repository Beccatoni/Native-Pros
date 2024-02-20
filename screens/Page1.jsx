import React from 'react'
import {Text, TextInput, Image, Button, View} from 'react-native'

const Page1 = () => {
  return (
    <>
    <View  style={{flex:1, flexDirection:'row', alignItems:'center', marginLeft:150}}>
    <Button title="M" color="#ffd700" style={{fontSize:20, fontWeight:'bold'}} ></Button>
    <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Muvi</Text>
  </View>
    </>
  )
}

export default Page1