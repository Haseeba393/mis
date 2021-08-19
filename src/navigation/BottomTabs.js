import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    Home,
    Notifications,
    Settings
} from '../screens';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { ROUTES } from '../navigation/routes';
import { useColors } from '../hooks';
import { FONTS } from '../config';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {

    const colors = useColors();

    return (
        <Tabs.Navigator
            screenOptions={{
                gestureEnabled: false,
                headerTintColor: colors.whiteColor,
                headerStyle:{
                    backgroundColor: colors.background,
                },
                headerTitleStyle:{
                    ...FONTS.body3_medium,
                    color: colors.text
                },
                headerBackTitleVisible: false,
                animation:'fade_from_bottom',
                tabBarLabelStyle:{
                    ...FONTS.body5_medium,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: 'rgba(0,0,0,0.5)',
            }}
        >
            <Tabs.Screen
                name={ROUTES.HOME_TAB}
                component={Home}
                options={{
                    headerTitle: 'Home',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <FeatherIcon 
                            name='home'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name={ROUTES.NOTIFICATION_TAB}
                component={Notifications}
                options={{
                    headerTitle: 'Notifications',
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({color, size}) => (
                        <FeatherIcon 
                            name='bell'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name={ROUTES.SETTINGS_TAB}
                component={Settings}
                options={{
                    headerTitle: 'Settings',
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({color, size}) => (
                        <FeatherIcon 
                            name='settings'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    )
}

export default BottomTabs;
