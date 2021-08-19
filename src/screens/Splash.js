import React, { useEffect } from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';

import { AppBar } from '../components';
import { IMAGES, THEME } from '../config';
import { useColors } from '../hooks';
import { _gotoAuth } from '../navigation/service';

export const Splash = ({navigation}) => {

    const colors = useColors();

    useEffect(()=>{
        setTimeout(() => {
            _gotoAuth(navigation);
        }, 2000);
    },[])

    return(
        <View style={styles._mainContainer}>

            <AppBar 
                backgroundColor={colors.background}
                barType={'light'}
            />

            <Image 
                source={IMAGES.LOGO_IMAGE}
                resizeMode='contain'
                style={{
                    width: THEME.WP('70%'),
                    height: THEME.HP('20%')
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Splash;