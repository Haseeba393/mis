import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Splash,
    WebPage,
} from '../screens';
import AuthStack from './AuthStack';

import { ROUTES } from './routes';
import BottomTabs from './BottomTabs';
import { useColors } from '../hooks';
import { FONTS } from '../config';

const Stack = createNativeStackNavigator();

const Root = () => {

    const colors = useColors();

    return(
        <Stack.Navigator
            initialRouteName={ROUTES.SPLASH}
            screenOptions={{
                gestureEnabled: false,
                headerTintColor: colors.whiteColor,
                headerStyle:{
                    backgroundColor: colors.background
                },
                headerTitleStyle:{
                    ...FONTS.body3_medium,
                },
                headerBackTitleVisible: false,
                animation:'fade_from_bottom',
            }}
        >
            <Stack.Screen 
                name={ROUTES.SPLASH}
                component={Splash} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name={ROUTES.AUTH_STACK}
                component={AuthStack}
                options={{
                    headerShown: false,
                }}
                
            />
            <Stack.Screen 
                name={ROUTES.DASHBOARD}
                component={BottomTabs}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name={ROUTES.WEBPAGE}
                component={WebPage}
            />
        </Stack.Navigator>
    );
}

export default Root;