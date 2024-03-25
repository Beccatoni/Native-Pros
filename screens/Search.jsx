import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import Card from "../components/Card";
import { height, width } from "./Page5";
import { Entypo } from "@expo/vector-icons";

export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovie] = useState([]);
  const [showStaticImage, setShowStaticImage] = useState(true);

  // fetching
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjg4NmIzYjUyMmU0ODYxNWY0ZGMwMWU1YzQ3Y2YyZiIsInN1YiI6IjY1ZDg2YzU1MWJmODc2MDE2NGJlY2M4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8d7YWsNnOta-nUkNxZYqXAG8MYcEOdvxht8x2a8YjRg",
    },
  };

  const SearchFetch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=true&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovie(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (searchText.trim() !== "") {
      setShowStaticImage(false);
      SearchFetch();
    } else {
      setShowStaticImage(true);
      setMovie([]);
    }
    // SearchFetch();
  }, [searchText]);

  const cards = [
    { id: "1", title: "8.8", image: require("../assets/raya.jpg") },
    { id: "2", title: "9", image: require("../assets/theboy.jpg") },
    { id: "3", title: "6", image: require("../assets/wonka.jpg") },
  ];
  const handleCardPress = (item) => {
    navigation.navigate( "Action", {movie: item});
  };

  // const handleCardPress = (item) => {
  //   navigation.navigate("Mytabs", { screen: "Action", params: { movie: item } });
  // }
  return (
    <>
      <View
        style={{ backgroundColor: "#26282C", height: height, width: width, justifyContent:"flex-start",  }}
      >
        <View>
          <TextInput
            placeholder="Search Movie Title"
            onChangeText={setSearchText}
            textColor="white"
            theme={{
              colors: {
                primary: "white",
              },
            }}
            style={{ backgroundColor: "black", color: "white", width: width, height:90 }}
            right={<TextInput.Icon icon={"magnify"} color="#E9AB17" />}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap:50, height:60, width:width, flexDirection:"row", backgroundColor:"black", justifyContent:"space-between", alignItems:"center" }}>
            <TouchableOpacity>
              <Text style={{ color: "white", fontWeight: "normal" }}>All Results</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "white", fontWeight: "normal" }}>Series</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "white", fontWeight: "normal" }}>Films</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "white", fontWeight: "normal" }}>Original</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View>
          {showStaticImage ? (
            <>
              <Image
                source={require("../assets/search.png")}
                style={{ width: 200, height: 200, alignSelf: "center" }}
              />
              <Text style={{ fontWeight: "bold", color:"white", textAlign:"center" }}>Find your movie</Text>
              <Text style={{color:"white", textAlign:"center" }}>Search movie, series, Originals, as you like!😎</Text>
            </>
          ) : (
            <FlatList
              data={movies}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={handleCardPress}>
                <Card title={item.title} image={item.poster_path} />
                </TouchableOpacity>
              )}
              style={{ gap: 15 }}
              vertical
            />
          )}
        </View>
        {/* <View>
            <Text onPress={navigation.navigate('Page7')} ></Text>
    </View> */}
      </View>
    </>
  );
}
