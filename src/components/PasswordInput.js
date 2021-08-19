import React, { useState } from 'react';
import { 
    StyleSheet, 
    TextInput,
    View,
} from 'react-native';

import { CONSTANTS, FONTS, THEME } from '../config';
import { useColors } from '../hooks';
import FeatherIcon from 'react-native-vector-icons/Feather';

const PasswordInput = ({width, placeholder, value, onChangeText, style}) => {

    const colors = useColors();
    const [isSecure, setSecure] = useState(true);

    return (
        <View style={[ styles._mainContainer, style, { width } ]}>
            <TextInput 
                secureTextEntry={isSecure}
                style={[styles._input, { color: colors.text }]}
                placeholder={placeholder}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
                selectionColor={'rgba(255,255,255,1)'}
                value={value}
                onChangeText={onChangeText}
            />
            <FeatherIcon 
                onPress={()=>{ setSecure(!isSecure) }}
                name={ isSecure ? 'eye-off' : 'eye' }
                size={CONSTANTS.ICON_SIZE}
                color={'rgba(255,255,255,0.5)'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    _mainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: CONSTANTS.INPUT_HEIGHT,
        borderRadius: THEME.THEMING.radius_20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: THEME.THEMING.spacing_15,
    },
    _input:{
        width: '88%',
        height: '100%',
        ...FONTS.body4_medium,
    },
});

export default PasswordInput;
