import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';
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
    
    <NavigationContainer >
    <View style={styles.container} >
      <Provider store={store}>
      {/* <StatusBar style="auto" /> */}
      {/* <SafeAreaView>
         */}
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen style={{backgroundColor:'black'}} name="Home"  component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="RideScreen" component={RideScreen} options={{headerShown: false}} />
            <Stack.Screen name="FoodScreen" component={FoodScreen}  options={{headerShown: false}}/>
            <Stack.Screen name="BikeScreen" component={BikeScreen}  options={{headerShown: false}}/>
          </Stack.Navigator>
        
          
      
  {/* </SafeAreaView> */}
      </Provider>

    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {flex:1 }
});
