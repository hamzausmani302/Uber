import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity , Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const HomePageCard = (props) => {
    return (
       <TouchableOpacity style={tw`m-3  `} onPress={props.onPress}>
           <View style={tw `p-1  rounded-3xl` }>

                <Image
                    style={{width : 100 , height : 100 , color : 'black'}}
                    source={props.Item.Image}
                />
               <Text style={tw`text-center font-bold opacity-50 `} >{props.Item.Title}</Text>


           </View>
       </TouchableOpacity>
    )
}

export default HomePageCard;

const styles = StyleSheet.create({
    dabbay : {

    }

})
