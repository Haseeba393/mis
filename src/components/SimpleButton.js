import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity
} from 'react-native';
import { CONSTANTS, FONTS, THEME } from '../config';

const SimpleButton = ({ onPress, width, title, titleColor, buttonColor, buttonStyle }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[ styles._buttonContainer, { width, backgroundColor: buttonColor }, buttonStyle ]}
        >
            <Text style={[styles._title,{ color: titleColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    _buttonContainer:{
        height: CONSTANTS.INPUT_HEIGHT,
        borderRadius: THEME.THEMING.radius_20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: THEME.THEMING.spacing_15,
    },
    _title:{
        ...FONTS.body4_bold,
        textTransform: 'uppercase',
    },
});

export default SimpleButton;
