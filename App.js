import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import MyFavorites from './screens/MyFavorites';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home"  component={HomeScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="Favorites" component={MyFavorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
