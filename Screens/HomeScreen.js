import React , {useState} from 'react'
import { SafeAreaView,FlatList, StyleSheet, Text, View } from 'react-native'
import HomePageCard from '../Components/HomePageCard'
import tw from 'tailwind-react-native-classnames';
import Car from '../assets/Images/CAR.png'
import FOOD from '../assets/Images/Food.png'
import BIKE from '../assets/Images/bike.png'
const HomeScreen = () => {
    const [selectedID , setSelectedID] = useState(111);
    const DATA = [
            {
                _id:222,
                Image : Car,
                Title : "Get A Ride",
                description : "Ride with us"
            }
            ,
            {
                _id : 111,
                Image : FOOD,
                Title : "Order Food",
                description : "We will deliver you food"
            },
            {
                _id : 112,
                Image : BIKE,
                Title : "Order Food",
                description : "We will deliver you food"
            },
    ]
    const renderItem = ({item})=>{
        
        return (<HomePageCard onPress={()=>{setSelectedID(item)}} Item={item} />)
    }
    return (
        <View style={tw`p-1`}>
            <Text style={tw`text-4xl pb-10 pt-20 pl-5`}>Uber</Text>
            <FlatList
            data = {DATA}
            horizontal = {true}
            renderItem={renderItem}
            keyExtractor = {item => item._id}
            extraData = {selectedID}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
