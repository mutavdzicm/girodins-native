import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

import TicketsIcon from '../assets/images/icons/tickets.svg';
import MatchesIcon from '../assets/images/icons/matches.svg';
import ShopIcon from '../assets/images/icons/shop.svg';
import MenuIcon from '../assets/images/icons/menu.svg';

import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';
const iconsStyle = (focused) => ({
    height: 23,
    width: 23,
    color: focused ? Colors.white : Colors.tabIconDefault
});

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            tabBarOptions={{
                activeTintColor: Colors.tintColor,
                header: null,
                style: {
                    height: 75,
                    backgroundColor: Colors.main,
                    paddingBottom: 10
                }
            }}
        >
            <BottomTab.Screen
                name="Tickets"
                component={HomeScreen}
                options={{
                    title: 'Billets',
                    tabBarIcon: ({ focused }) => (
                        <TicketsIcon style={iconsStyle(focused)} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Matchs"
                component={LinksScreen}
                options={{
                    title: 'Matchs',
                    tabBarIcon: ({ focused }) => (
                        <MatchesIcon style={iconsStyle(focused)} />
                    )
                }}
            />
            <BottomTab.Screen
                name=" "
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/images/brand.png')}
                            style={{
                                width: 55,
                                height: 65,
                                marginTop: -15,
                                resizeMode: 'contain'
                            }}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="Shop"
                component={HomeScreen}
                options={{
                    title: 'Boutique',
                    tabBarIcon: ({ focused }) => (
                        <ShopIcon style={iconsStyle(focused)} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Menu"
                component={LinksScreen}
                options={{
                    title: 'Menu',
                    tabBarIcon: ({ focused }) => (
                        <MenuIcon style={iconsStyle(focused)} />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
}
