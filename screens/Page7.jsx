import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { height, width } from "./Page5";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card"; 
import CardPopular from "../components/CardPopular";

export default function Page7({navigation})  {

  const [movie, setMovie] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([])

  // const navigation = useNavigation();

  // Sample list of cards
  // const cards = [
  //   { id: "1", title: "8.8", image: require("../assets/raya.jpg") },
  //   { id: "2", title: "9", image: require("../assets/theboy.jpg") },
  //   { id: "3", title: "6", image: require("../assets/wonka.jpg") },
  // ];

  // const cardsPopular = [
  //   { id: "1", title: "8.8", image: require("../assets/paddington.jpg") },
  //   { id: "2", title: "9", image: require("../assets/matilda.jpg") },
  //   { id: "3", title: "6", image: require("../assets/wonka.jpg") },
  // ];



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjg4NmIzYjUyMmU0ODYxNWY0ZGMwMWU1YzQ3Y2YyZiIsInN1YiI6IjY1ZDg2YzU1MWJmODc2MDE2NGJlY2M4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8d7YWsNnOta-nUkNxZYqXAG8MYcEOdvxht8x2a8YjRg'
    }
  };

  const FetchApi = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then((response) => {
      setMovie(response.results)
      // console.log(response)
    }
      )
    .catch(err => console.error(err));
  }
  
  

  const FetchTopRated = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then((response) => {
    setTopRated(response.results)
    // console.log(response)
  })
  .catch(err => console.error(err));
  }

  const FetchPopular = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then((response) =>{
    // console.log(response.results)
    setPopular(response.results)
  } )
  .catch(err => console.error(err));
  }




  useEffect(() => {
    FetchApi();
    FetchPopular();
    FetchTopRated();
  }, [])


  return (
    <View
      style={{
        backgroundColor: "#26282C",
        height: height,
        width: width,
        flexDirection: "column",
        paddingLeft: 15
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          height: 150,
          width: "100%",
          padding: 20,
          marginBottom: 10,
        }}
      >
        <Text>Logged In successfully </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image source={require("../assets/logo.jpg")} />
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              gap: 20,
              marginRight: 10,
            }}
          >
            <Entypo name="bookmark" size={25} color="white" mode="outlined" />
            <AntDesign name="bells" size={25} color="white" />
          </View>
        </View>
      <View style={{marginBottom:"3%", marginTop:"10%" }}>
        <ScrollView horizontal contentContainerStyle={{gap:50}} showsHorizontalScrollIndicator={false}>
          
          <Text style={{ color: "#E9AB17", fontWeight: "normal" }} onPress={()=> navigation.navigate('Page4')}>Featured</Text>
          <Text style={{ color: "white", fontWeight: "normal" }} onPress={()=> navigation.navigate('Page5')}>Series</Text>
          <Text style={{ color: "white", fontWeight: "normal" }} onPress={()=> navigation.navigate('Page2')}>Films</Text>
          <Text style={{ color: "white", fontWeight: "normal" }} onPress={()=> navigation.navigate('Page1')}>Origin</Text>
        </ScrollView>
        <View style={{backgroundColor:"#E9AB17", height:5, width:50, borderRadius:2, marginBottom:"3%", marginTop:"4%", marginLeft:5}}></View>
      </View>
      </View>
      <View style={{marginVertical:10}}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 20,
            justifyContent: "space-between",
            marginBottom: 10,
            
          }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={{
              width: 120,
              height: 40,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Popular Today
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Marvel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Fans Choice
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Star Wars
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ color: "white", fontWeight: "normal", fontSize: 20 }}>
            New Release
          </Text>
          <Text style={{ color: "grey", fontWeight: "normal", fontSize: 16 }}>
            View More
          </Text>
        </View>

        <FlatList
          data={movie}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={()=>navigation.navigate('Action', item)}>
              <Card title={item.vote_count} image={item.poster_path} />
            </Pressable>
            
          )}
          style={{ gap: 15 }}
          horizontal
        />

        <View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text
              style={{ color: "white", fontWeight: "normal", fontSize: 20 }}
            >
              Made for you
            </Text>
            <Text style={{ color: "grey", fontWeight: "normal", fontSize: 16 }}>
              View More
            </Text>
          </View>
          <FlatList
            data={topRated}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card title={item.vote_average} image={item.poster_path} />
            )}
            style={{ gap: 15 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text
              style={{ color: "white", fontWeight: "normal", fontSize: 20 }}
            >
              Popular Movies
            </Text>
            <Text style={{ color: "grey", fontWeight: "normal", fontSize: 16 }}>
              View More
            </Text>
          </View>
          <FlatList
            data={popular}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardPopular title={item.vote_average} image={item.poster_path} />
            )}
            style={{ gap: 15 }}
            horizontal
          />
        </View>
      </ScrollView>
      {/* <View style={{height:40}}>
            <Text onPress={navigation.navigate('Profile')} >Home</Text>
        </View> */}
    </View>
  );
};

// export default Page7;

