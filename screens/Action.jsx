import { View, Text, Image, Pressable, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { height, width } from "./Page5";
import { Feather } from "@expo/vector-icons";
import CardPopular from "../components/CardPopular";
import Card from "../components/Card";
import YoutubePlayer from "react-native-youtube-iframe";

const Action = ({ route, navigation }) => {
  const rout = route.params;
  console.log(rout);
  const [popular, setPopular] = useState([]);
  // const [videotrailer, setvideotrailer] = useState([]);
  const [videoPlay, setVideoPlay] = useState(" ");
  // const [playing, setPlaying] = useState(false);
  const [play, setPlay] = useState(false);

  const handlePlayVideo = () => {
    setPlay(true);
  };
  // fETCHING
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjg4NmIzYjUyMmU0ODYxNWY0ZGMwMWU1YzQ3Y2YyZiIsInN1YiI6IjY1ZDg2YzU1MWJmODc2MDE2NGJlY2M4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8d7YWsNnOta-nUkNxZYqXAG8MYcEOdvxht8x2a8YjRg",
    },
  };
  const FetchVidApi = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${rout.id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideoPlay(response.results[0].key);
        console.log(response.results[0].key);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${rout.id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results[0].key);
        setVideoPlay(response.results[0].key);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results)
        setPopular(response.results);
      })
      .catch((err) => console.error(err));
  }, []);
console.log(videoPlay)
  return (
    <>
      <View
        style={{
          backgroundColor: "#26282C",
          height: height,
          width: width,
          padding: 20,
          gap: 20,
        }}
      >
        <View style={{justifyContent:"center"}}>
        <View>
          <Pressable
            style={{ gap: 10, flexDirection: "row", marginTop: 10 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={30} color="#E9AB17" />
            <Text style={{ color: "white", fontSize: 20 }}>Action</Text>
          </Pressable>
        </View>
        <YoutubePlayer
          height={300}
          // play={videotrailer}
          videoId={videoPlay}
          onReady={handlePlayVideo}
          // onChangeState={onStateChange}
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          {rout.original_title}
        </Text>
        <Text style={{ color: "white", fontWeight: "normal", fontSize: 16 }}>
          {rout.overview}
        </Text>

        </View>
        <View
          style={{
            justifyContent: "center",
            gap: 20,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 7,
              backgroundColor: "#E9AB17",
              borderWidth: 1,
              width: 150,
              height: 40,
            }}
          >
            <Feather name="play" size={24} color="black" />
            <Text>Play</Text>
          </Pressable>
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "grey",
              width: 150,
              height: 40,
              borderRadius: 7,
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
            <Text style={{ color: "white" }}>My List</Text>
          </Pressable>
        </View>

        <View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              U.S Action Movies
            </Text>
          </View>

          <FlatList
            data={popular}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable onPress={() => navigation.navigate("Action", item)}>
                <Card title={item.vote_count} image={item.poster_path} />
              </Pressable>
            )}
            style={{ gap: 15 }}
            horizontal
          />
        </View>
      </View>
    </>
  );
};

export default Action;
