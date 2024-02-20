import React from 'react'
import { Button, ImageBackground, Text , View, Pressable} from 'react-native'
import { Feather } from '@expo/vector-icons';

const Page2 = () => {
    const image = {uri: 'https://legacy.reactjs.org/logo-og.png'}
  return (
    <>
    <ImageBackground source={require('../assets/joker.png')} style={{ flex:1, alignItems:'center', width:'100%', height:'100%'}}>
  <View style={{alignItems:'center',}}>
    <Text style={{color:'white', fontWeight:'normal', fontSize:30}} >Enjoy your favorite movie everywhere</Text>
    <Text style={{color:'white'}}>Browse Through our collections and discover hundreds of movies
    and series that you'll love!
  </Text>
  <Feather name="more-horizontal" size={24} color="black" />
  </View>
  <View style={{alignItems:'baseline', marginTop:563}}>
  <Pressable style={{backgroundColor:'yellow', height:30, width:300, paddingLeft:95, borderRadius:8}} >
  <Text style={{paddingTop:5}}>Get Started</Text>
</Pressable>
</View>
    </ImageBackground>
    </>
  )
}

export default Page2