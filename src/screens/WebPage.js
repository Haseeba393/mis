import React from 'react';
import {
    StyleSheet, 
    Text, 
    View
} from 'react-native';

import { FONTS } from '../config';
import { useColors } from '../hooks';

const WebPage = () => {

    const colors = useColors();

    return (
        <View style={styles._mainContainer}>
            <Text style={[styles._info, {color: colors.text}]}>WebPage</Text>
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

export default WebPage;
