import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';
import { Provider  } from 'react-redux';
import { store } from './store';
import HomeScreen from './Screens/HomeScreen';
import RideScreen from './Screens/RideScreen';
import FoodScreen from './Screens/FoodScreen';
import BikesScreen from './Screens/BikesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <View style={styles.container} >
      <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <stack.Navigator>
            <stack.Screen name="Home"  component={HomeScreen} />
            <stack.Screen name="RideScreen" component={RideScreen} />
            <stack.Screen name="FoodScreen" component={FoodScreen} />
            <stack.Screen name="BikeScreen" component={BikeScreen} />
        </stack.Navigator>
          
      
  </SafeAreaView>
      </Provider>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1}
});
