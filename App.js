import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import Cat from "./components/Cat";

import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import Page4 from "./screens/Page4";
import Page5 from "./screens/Page5";
import Page6 from "./screens/Page4";
import Mytabs from "./screens/Mytabs";
import Action from "./screens/Action";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
      <Text>This is good!</Text>
      <StatusBar style="auto" />
    </View>
    <ScrollView>
        <Text>This is good!</Text>
        <View>
          <Text>This is good!</Text>
          <Image source={{
            uri:'https://reactnative.dev/docs/assets/p_cat2.png'
            
          }}
          style={{width:200, height:200}}/>
        </View>
        <TextInput 
        style={{height:40,
        width:400, 
        borderColor:'#f0e68c',
        borderWidth:1, margin:10, borderRadius:20}}
        placeholder='You can type in me...'/>


        <Cat name='Max' fname='Becca' sName='Jane' />
    </ScrollView> */}
      {/* <View style={{flex:1, backgroundColor:'black'}}>
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>

</View> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Page1"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name="Page2" component={Page2} />
          <Stack.Screen name="Page3" component={Page3} />
          <Stack.Screen name="Page4" component={Page4} />
          <Stack.Screen name="Page5" component={Page5} />
          <Stack.Screen name="Page6" component={Page6} />
          <Stack.Screen name="Mytabs" component={Mytabs} />
          <Stack.Screen name="Action" component={Action} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
