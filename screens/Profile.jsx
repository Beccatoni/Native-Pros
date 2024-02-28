import { View, Text } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Page7')}>Profile</Text>
    </View>
  )
}

export default Profile