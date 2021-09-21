import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity , Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const HomePageCard = (props) => {
    return (
       <TouchableOpacity style={tw`m-4`} onPress={props.onPress}>
           <View style={tw`p-2 bg-gray-100`}>

                <Image
                    style={{width : 150 , height : 150}}
                    source={props.Item.Image}
                />
               <Text style={tw`text-center font-bold opacity-75 `} >{props.Item.Title}</Text>


           </View>
       </TouchableOpacity>
    )
}

export default HomePageCard;

const styles = StyleSheet.create({
    dabbay : {

    }

})
