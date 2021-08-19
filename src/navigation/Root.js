import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Splash,
} from '../screens';
import AuthStack from './AuthStack';

import { ROUTES } from './routes';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const Root = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'fade_from_bottom'
            }}
        >
            <Stack.Screen 
                name={ROUTES.SPLASH}
                component={Splash} 
            />
            <Stack.Screen 
                name={ROUTES.AUTH_STACK}
                component={AuthStack}
                
            />
            <Stack.Screen 
                name={ROUTES.DASHBOARD}
                component={BottomTabs}
            />
        </Stack.Navigator>
    );
}

export default Root;