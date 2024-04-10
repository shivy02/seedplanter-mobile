import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity, useColorScheme} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';
import CatalogScreen from '../screens/CatalogScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatBotScreen from '../screens/ChatBotScreen';
import { DefaultTheme } from '@react-navigation/native';
import { useTheme, ThemeProvider } from 'styled-components/native';
import { styled } from 'styled-components/native';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View style={{
            width: 75,
            height: 75,
            borderRadius: 50,
            backgroundColor: '#1DB954',
            shadowColor: '#333',
            shadowOpacity: 0.4,
            shadowOffset: { width: 1, height: 1 },

        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    const theme = useTheme();

    return(
        <ThemeProvider theme={theme}>
        <Tab.Navigator 
            screenOptions={{ 
                tabBarShowLabel: false,
                tabBarStyle: {
                    flex: 1,
                    position: 'absolute',
                    height: 80,
                    borderRadius: 50,
                    elevation: 0,
                    paddingBottom: 15,
                    borderTopWidth: 0
                },
                tabBarBackground: () => (
                    <BlurView 
                        intensity={80} 
                        style={{ 
                            flex: 1, 
                            overflow: "hidden", 
                            backgroundColor: "transparent" 
                        }}>
                    </BlurView>
                ),
            }}>
            <Tab.Screen name="My Garden" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image source={require('../assets/home3.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1DB954' : theme.text
                            }}
                        />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: theme.navbar,
                    shadowColor: 'transparent',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 23, 
                    color: theme.text, 
                },
                headerTitleAlign: 'left',
            }}/>

            <Tab.Screen name="Journal" component={JournalScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image source={require('../assets/book6.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1DB954' : theme.text
                            }}
                        />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: theme.navbar,
                    shadowColor: 'transparent',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 23, 
                    color: theme.text, 
                },
                headerTitleAlign: 'left',
            }}/>

            <Tab.Screen name="AI Plantbot" component={ChatBotScreen} options={{
                tabBarIcon: ({focused}) => (
                    <Image source={require('../assets/chat6.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#1DB954' : theme.text
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton { ... props }/>
                ),
                headerStyle: {
                    backgroundColor: theme.navbar,
                    shadowColor: 'transparent',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 23, 
                    color: theme.text, 
                },
                headerTitleAlign: 'left',
            }}/>

            <Tab.Screen name="Search Plants" component={CatalogScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image source={require('../assets/search6.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1DB954' : theme.text
                            }}
                        />
                    </View>
                ),
                    headerStyle: {
                    backgroundColor: theme.navbar,
                    shadowColor: 'transparent',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 23, 
                    color: theme.text, 
                },
                headerTitleAlign: 'left',
            }}/>

            <Tab.Screen name="My Profile" component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image source={require('../assets/profile6.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1DB954' : theme.text
                            }}
                        />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: theme.navbar,
                    shadowColor: 'transparent',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 23, 
                    color: theme.text, 
                },
                headerTitleAlign: 'left',
            }}/>

        </Tab.Navigator>
        </ThemeProvider>
    );
}

export default Tabs;

const styles = StyleSheet.create({
    shadowing: {
        shadowColor: '#68b454',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 3,
    }
});