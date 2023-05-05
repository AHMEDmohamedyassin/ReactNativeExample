import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import BasketScreen from './screens/BasketScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ProductScreen' component={ProductScreen}/>
        <Stack.Screen name='BasketScreen' component={BasketScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
