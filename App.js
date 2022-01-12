import { StatusBar  } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, View, Dimensions } from 'react-native';
import { Provider  } from 'react-redux';
import { store } from './store';
import HomeScreen from './Screens/HomeScreen';
import RideScreen from './Screens/RideScreen';
import FoodScreen from './Screens/FoodScreen';
import BikeScreen from './Screens/BikeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
   
    <View style={styles.container} >
     
      <Provider store={store}>
      {/* <StatusBar style="auto" /> */}
      {/* <SafeAreaView>
         */}
       <NavigationContainer >
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen style={{backgroundColor:'white'}} name="Home"  component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="RideScreen" component={RideScreen} options={{headerShown: false}} />
            <Stack.Screen name="FoodScreen" component={FoodScreen}  options={{headerShown: false}}/>
            <Stack.Screen name="BikeScreen" component={BikeScreen}  options={{headerShown: false}}/>
          </Stack.Navigator>
        
          </NavigationContainer>    
      
  {/* </SafeAreaView> */}
      </Provider>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:'white' , height : 600 }
});
