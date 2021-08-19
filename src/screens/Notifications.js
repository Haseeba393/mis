import React from 'react';
import {
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { AppBar } from '../components';

import { FONTS } from '../config';
import { useColors } from '../hooks';

const Notifications = () => {

    const colors = useColors();

    return (
        <View style={[styles._mainContainer, {backgroundColor: colors.whiteColor}]}>
            <AppBar 
                backgroundColor={colors.background}
                barType='light'
            />
            <Text style={[styles._info, {color: colors.background}]}>Notifications</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    _mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    _info:{
        ...FONTS.body3_bold,
        textTransform: 'uppercase'
    }
});

export default Notifications;
