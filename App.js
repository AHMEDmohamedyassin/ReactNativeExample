import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import BasketScreen from './screens/BasketScreen';
import LoadingScreen from './screens/LoadingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='HomeScreen'
      >
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ProductScreen' component={ProductScreen}/>
        <Stack.Screen name='BasketScreen' component={BasketScreen}/>
        <Stack.Screen name='LoadingScreen' component={LoadingScreen}/>
        <Stack.Screen name='DeliveryScreen' component={DeliveryScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
