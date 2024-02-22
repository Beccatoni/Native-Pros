import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable} from 'react-native'
import Cat from './components/Cat'
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';

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
<View style={{flex:1, backgroundColor:'black'}}>
    {/* <Page1/> */}
    {/* <Page2/> */}
    {/* <Page3/> */}
    <Page4/>

</View>

</>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
