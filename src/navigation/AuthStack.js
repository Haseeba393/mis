import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Login,
    ForgotPassword,
} from '../screens';
import { ROUTES } from './routes';
import { useColors } from '../hooks';
import { FONTS } from '../config';

const Stack = createNativeStackNavigator();

const AuthStack = () => {

    const colors = useColors();

    return(
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                gestureEnabled: false,
                headerTintColor: colors.whiteColor,
                headerTitleStyle:{
                    ...FONTS.body3_medium,
                },
                headerBackTitleVisible: false,
                animation:'fade_from_bottom',
            }}
        >
            <Stack.Screen 
                name={ROUTES.LOGIN}
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name={ROUTES.FORGOT_PASSWORD}
                component={ForgotPassword}
                options={{
                    headerTitle: 'Reset your password',
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthStack;