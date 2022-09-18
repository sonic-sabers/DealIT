import React from 'react';
import { View, Text,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Home,
  MyCart,
  ProductInfo,
  Loginscreen,
  Formdetails,
  Options } from
  './components/screens';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
    
        <Stack.Screen name="Loginscreen" component={Loginscreen} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Formdetails" component={Formdetails} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
