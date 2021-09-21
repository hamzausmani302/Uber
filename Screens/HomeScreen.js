import React , {useState} from 'react'
import { SafeAreaView,FlatList, StyleSheet, Text, View } from 'react-native'
import HomePageCard from '../Components/HomePageCard'
import tw from 'tailwind-react-native-classnames';
import Car from '../assets/Images/CAR.png'
import FOOD from '../assets/Images/Food.png'
import BIKE from '../assets/Images/bike.png'
const HomeScreen = ({navigation}) => {

    const [selectedID , setSelectedID] = useState(111);
    const DATA = [
            {
                _id:"222",
                Name : 'RideScreen',
                Image : Car,
                Title : "Get A Ride",
                description : "Ride with us"
            }
            ,
            {
                _id : "111"
                ,Name : "FoodScreen", 
                Image : FOOD,
                Title : "Order Food",
                description : "We will deliver you food"
            },
            {
                _id : "112",
                Name : "BikeScreen", 
                Image : BIKE,
                Title : "Order Food",
                description : "We will deliver you food"
            },
    ]
    const renderItem = ({item})=>{
        
        return (<HomePageCard onPress={()=>{navigation.navigate(item.Name);}} Item={item} />)
    }
    return (
        <View style={tw`p-1`}>
            <Text style={tw`text-4xl pb-5 pt-5 pl-5`}>Uber</Text>
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
