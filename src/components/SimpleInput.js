import React from 'react';
import { 
    StyleSheet, 
    TextInput,
} from 'react-native';
import { CONSTANTS, FONTS, THEME } from '../config';
import { useColors } from '../hooks';

const SimpleInput = ({width, placeholder, value, onChangeText, style}) => {

    const colors = useColors();

    return (
        <TextInput 
            style={[styles._mainContainer, style,{ width, color: colors.text }]}
            placeholder={placeholder}
            placeholderTextColor={'rgba(255,255,255,0.5)'}
            selectionColor={'rgba(255,255,255,1)'}
            value={value}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    _mainContainer:{
        height: CONSTANTS.INPUT_HEIGHT,
        borderRadius: THEME.THEMING.radius_20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: THEME.THEMING.spacing_15,
        ...FONTS.body4_medium,
    }
});

export default SimpleInput;
