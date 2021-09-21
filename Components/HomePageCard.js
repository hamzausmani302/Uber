import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity , Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const HomePageCard = (props) => {
    return (
       <TouchableOpacity style={tw`m-4`} onPress={()=>{console.log(props.Item)}}>
           <View style={tw`p-2 bg-gray-100`}>

                <Image
                    style={{width : 100 , height : 100}}
                    source={props.Item.Image}
                />
               <Text style={tw`text-center `} >{props.Item.Title}</Text>


           </View>
       </TouchableOpacity>
    )
}

export default HomePageCard;

const styles = StyleSheet.create({
    dabbay : {

    }

})
