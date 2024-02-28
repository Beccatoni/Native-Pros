import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card from '../components/Card';

const Search = ({navigation}) => {

  const cards = [
    { id: "1", title: "8.8", image: require("../assets/raya.jpg") },
    { id: "2", title: "9", image: require("../assets/theboy.jpg") },
    { id: "3", title: "6", image: require("../assets/wonka.jpg") },
  ];

  return (
    <>
    <View>
      <Text>Search</Text>
    </View>
    <View>
      <FlatList
            data={cards}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card title={item.title} image={item.image} />
            )}
            style={{ gap: 15 }}
            vertical
          />
    </View>
    <View>
            <Text onPress={navigation.navigate('Profile')} >Search</Text>
    </View>

    </>
  )
}

export default Search