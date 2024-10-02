import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './src/hooks/AppContext';
import HomeScreen from './src/screens/HomeScreen'; 
import { Provider as PaperProvider } from 'react-native-paper';



const Stack = createStackNavigator();

export default function App(){
  return (
    <AppProvider>
      <PaperProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}>
        
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </AppProvider>
  );
};
