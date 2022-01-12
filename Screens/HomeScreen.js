import React , {useState} from 'react'
import { SafeAreaView,FlatList, StyleSheet, Text, View , Dimensions , Image} from 'react-native'
import HomePageCard from '../Components/HomePageCard'
import tw from 'tailwind-react-native-classnames';
import Car from '../assets/Images/CAR.png'
import FOOD from '../assets/Images/Food.png'
import BIKE from '../assets/Images/bike.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const HomeScreen = ({navigation}) => {

    const [selectedID , setSelectedID] = useState(111);
    const fav = [{
        _id : 111,
        miles : 2.8,
        Name : "Quaidabad",
        Street : "6th avenue",
        Date : '28 December 2012',

    },
    {
        _id : 112,
        Name : "Fast univeristy",
        miles : 6.2,
        Street : "Nationa Highway 5",
        Date : '01 December 2012',

    },
    ];
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
                Title : "Uber Bike",
                description : "Feasibilty"
            },
    ]
    const renderItem = ({item})=>{
        
        return (<HomePageCard onPress={()=>{navigation.navigate(item.Name);}} Item={item} />)
    }
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingcontainer}>
        <Text style={[styles.title , tw`text-4xl text-center p-2 pt-4`]}>Careem </Text>
        <View style={{flexDirection: 'row' , justifyContent: "space-around"}}> 
          <Icon style={tw`pt-5 text-center pr-2 `} name="gift" size={25} color="#ebd934" light />
          <Text style={[styles.credits ,tw` text-center  pt-5 pr-2` ]}>289 pts </Text>
        </View>
      </View>
      <View style={[{ backgroundColor :'red' , height: 203 , borderBottomWidth : 2 , borderBottomColor : "green"} , tw``]}>
          <Image style={{width : "100%", height : 200}} source={require('../assets/Images/dummyoffer.jpg')} ></Image>
      </View>
      <View>
      <FlatList
            data = {DATA}
            numColumns ={3}
            renderItem={renderItem}
            keyExtractor = {item => item._id}
            extraData = {selectedID}
            />
      </View>

    </SafeAreaView>
      
    );
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "white",
    paddingTop : 30
  },
   headingcontainer :{
    borderBottomWidth : 1,
    borderBottomColor : 'gray',
    backgroundColor : "white",
    height : Dimensions.get('window').height*0.09,
    flexDirection : "row",
    flexWrap : 'wrap',
    justifyContent : 'space-between'
  },
  title :{color : '#1ba621'   },
  credits:{color : "#ebd934" , fontSize : 15}
})
