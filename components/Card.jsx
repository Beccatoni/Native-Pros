import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = ({image, title}) => {
  return (
    <View style={{marginVertical:14}}>
      <View style={{}}>
    <ImageBackground source={image} resizeMode='cover' style={{height:190, width:230, marginRight:20 }} borderRadius={7} >
       <TouchableOpacity style={{backgroundColor:"#E9AB17", height:20, width:40, alignSelf:"flex-end", borderRadius:8, margin:2}}>
        <View>
        <Text style={{ color:"black", fontWeight:"normal", textAlign:"center"}}>{title}</Text>
        </View> 
       </TouchableOpacity>
      </ImageBackground>
      </View>
      </View>
      )
}

export default Card

