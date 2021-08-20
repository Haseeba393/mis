import React, { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { AppBar, OverlayLoader, SimpleButton } from '../components';

import { THEME } from '../config';
import { _logoutUser } from '../firebase/firebase';
import { useColors } from '../hooks';
import { _gotoAuth } from '../navigation/service';
import { _showDismissAlert } from '../utils/messages';

const Settings = ({navigation}) => {

    const [isLoading, setLoading] = useState(false);
    const colors = useColors();

    // Function to logout user
    const _onLogoutClick = async () => {
        setLoading(true);
        await _logoutUser()
        .then(()=>{
            _gotoAuth(navigation);
        })
        .catch((err)=>{
            _showDismissAlert(err.message);
        });
        setLoading(false);
    }

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

            <SimpleButton 
                onPress={_onLogoutClick}
                title='Logout'
                titleColor={colors.whiteColor}
                buttonColor={colors.primary}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    _mainContainer: {
        flex: 1,
        padding: THEME.THEMING.spacing_20,
    },
});

export default Settings;
