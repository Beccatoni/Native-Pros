import React from 'react'
import { Button, Text , View, Image, Pressable} from 'react-native'


const Page3 = () => {
    const image = {uri:'../assets/tube.PNG'}
  return (
    <>
    <View style={{alignItems:'center'}}>
    <Image source={image} style={{width:100, height:100}}></Image>
  <View style={{flexDirection:'column', marginBottom:70,}}>
    <Text style={{color:'white', fontWeight:'normal', fontSize:30, textAlign:'center'}} >Welcome To MUVI</Text>
    <Text style={{color:'white'}}>Browse Through our collections and discover hundreds of movies
    and series that you'll love!
  </Text>
  </View>
  <View style={{alignItems:'baseline', marginTop:400}}>
  <Pressable style={{backgroundColor:'yellow', height:30, width:300, paddingLeft:95,  borderRadius:8, marginBottom:20}} >
  <Text style={{paddingTop:5}}>Watch Movie</Text>
</Pressable>
<Pressable style={{paddingLeft:100, color:'white'}} >
  <Text>SignIn</Text>
</Pressable>
</View>
</View>

    </>
  )
}

export default Page3