import { View, Text, Image, FlatList } from 'react-native'
import React, {useState} from 'react'
import CardPopular from '../components/CardPopular'

const Mylist = () => {
    const [popular, setPopular] = useState([]);



    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjg4NmIzYjUyMmU0ODYxNWY0ZGMwMWU1YzQ3Y2YyZiIsInN1YiI6IjY1ZDg2YzU1MWJmODc2MDE2NGJlY2M4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8d7YWsNnOta-nUkNxZYqXAG8MYcEOdvxht8x2a8YjRg'
        }
      };


      const FetchPopular = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then((response) =>{
        // console.log(response.results)
        setPopular(response.results)
      } )
      .catch(err => console.error(err));
      }
  return (
    <>
    <View style={{backgroundColor:"#26282C"}}>
        <View style={{flexDirection:"column", backgroundColor:"black"}} >
        <View>
            <Image source={require("../assets/logo.jpg")} style={{height:85, width:270}} />
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={{color:"#E9AB17"}}>My List</Text>
        <Text style={{color:"white"}}>Downloaded</Text>
        </View>

        <FlatList
            data={popular}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardPopular title={item.vote_average} image={item.poster_path} />
            )}
            style={{ gap: 15 }}
            vertical
          />
        
        </View>        

      
    </View>
    </>
  )
}

export default Mylist