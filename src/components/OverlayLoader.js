import React from 'react';
import { 
    StyleSheet, 
    ActivityIndicator, 
    View
} from 'react-native';
import { useColors } from '../hooks';

const OverlayLoader = ({width, height}) => {

    const colors = useColors();

    return (
        <View style={[styles._overlayContainer, { width, height }]}>
            <ActivityIndicator 
                size='large'
                color={colors.whiteColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    _overlayContainer:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 100,
    }
});

export default OverlayLoader;
