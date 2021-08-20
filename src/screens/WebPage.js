import React, { useEffect, useState } from 'react';
import {
    StyleSheet, 
    View
} from 'react-native';
import { AppBar, OverlayLoader } from '../components';

import { FONTS, THEME } from '../config';
import { useColors } from '../hooks';
import WebView from 'react-native-webview';

const WebPage = ({navigation, route}) => {

    const { home_item } = route.params;
    const colors = useColors();
    const [isLoading, setLoading] = useState(false);

    // Effect to set header title
    useEffect(()=>{
        navigation.setOptions({
            headerTitle: home_item.title 
        });
    },[]);

    return (
        <View style={[styles._mainContainer, {backgroundColor: colors.whiteColor}]}>
            <AppBar 
                backgroundColor={colors.background}
                barType='light'
            />

            {
                isLoading && 
                <OverlayLoader 
                    width={THEME.WP('100%')}
                    height={THEME.HP('100%')}
                />
            }

            <WebView 
                source={{ uri: home_item.url }}
                style={styles._webView}
                onLoadStart={()=>{ setLoading(true) }}
                onLoadEnd={()=>{ setLoading(false) }}
            />
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
    },
    _webView:{
        width: THEME.WP('100%'),
        height: THEME.HP('100%'),
    },
});

export default WebPage;
