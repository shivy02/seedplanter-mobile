import { StyleSheet, Text, View, Appearance, useColorScheme} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from './navigation/tabs';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { ThemeProvider } from 'styled-components/native';
// import { Appearance } from 'react-native-appearance';

const Stack = createNativeStackNavigator();

export const lightTheme = {
  background: '#e8ecf4',
  gardenCard: '#FFFFFF',
  gardenBackground: '#FFFFFF',
  text: '#000000',
  navbar: 'white',

  // Welcome and Login
  welcomeBG: ["#91f086", "#11823b", "#02231c"],
  loginBG: ["#FFFFFF", "#378B29"],

  //Unfilled progress bar color and planter point color
  progUnfill: '#D7EED8'
};

export const darkTheme = {
  background: '#000000',
  gardenCard: '#212121',
  gardenBackground: '#000000',
  text: '#FFFFFF',
  navbar: '#000000',

  // Welcome and Login 
  welcomeBG: ["#4cbf4c", "#0a5228", "#002112"],
  loginBG: ["#000000", "#1B4514"],

  //Unfilled progress bar color and planter point color
  progUnfill: '#313b32'
};

const App = () => {

  const colorScheme = useColorScheme() || 'light';

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" 
          screenOptions={{
            headerBackVisible: false,
            headerShown: false,
          }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
