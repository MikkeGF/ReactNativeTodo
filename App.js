import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './DetailScreen';





export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: 'Todos'
          }}
        />
        <Stack.Screen name='Todo' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

