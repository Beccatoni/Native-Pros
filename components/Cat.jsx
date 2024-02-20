import React from 'react'
import {Text, Image} from 'react-native'


const getFullName = (fName,sName) => {
      return `${fName} ${sName}`
}
const Cat = (props ) => {
    const [isHungry, setIsHungry] = useState(true);
    return (
        <>
            <Text style={{color:'#ff6347'}}>I am a cat!</Text>
            <Text>My name is {props.name}</Text>
            <Text>Hello {props.name}, my name is {getFullName(props.fname, props.sName)} 😸</Text>
            
            <Text>I am {isHungry ? 'hungry' : 'full'}!</Text>
            <Button onPress={ () => {
                setIsHungry(false)
            }}
            disabled={!isHungry}
            title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}/>
            <Image  source={{uri:'https://reactnative.dev/docs/assets/p_cat1.png' }} style={{width:100, height:100}}/>


        </>
    )
}


export default Cat