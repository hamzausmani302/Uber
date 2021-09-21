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
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container} >
      <Provider store={store}>
      {/* <StatusBar style="auto" /> */}
      {/* <SafeAreaView>
         */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"  component={HomeScreen} header={null}  />
            <Stack.Screen name="RideScreen" component={RideScreen} />
            <Stack.Screen name="FoodScreen" component={FoodScreen} />
            <Stack.Screen name="BikeScreen" component={BikeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
          
      
  {/* </SafeAreaView> */}
      </Provider>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1}
});
