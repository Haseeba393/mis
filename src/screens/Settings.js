import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Switch,
    Text,
} from 'react-native';

import TouchID from 'react-native-touch-id';
import { AppBar, OverlayLoader, SimpleButton } from '../components';
import { FONTS, THEME } from '../config';
import { _logoutUser } from '../firebase/firebase';
import { useColors } from '../hooks';
import { _gotoAuth } from '../navigation/service';
import { _showDismissAlert } from '../utils/messages';
import { _getAsync, _setAsync } from '../utils/async';
import { FINGERPRINT_CONFIG, PLATFORM } from '../config/constants';
import { useLayoutEffect } from 'react';

const Settings = ({navigation}) => {

    const [isFingerprint, setFingerprint] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const colors = useColors();

    const _toggleFingerprint = async (value) => {

        //Checking is senser available
        await TouchID.isSupported()
        .then(async(biometryType)=>{
            if(PLATFORM === 'ios'){
                if(biometryType == "TouchID"){

                    if(value == false){
                        await _setAsync('fingerprint', 'false');
                        setFingerprint(value);
                    }
                    else{
                        TouchID.authenticate('Instant authentication using Touch Sensor',FINGERPRINT_CONFIG)
                        .then(async()=>{
                            await _setAsync('fingerprint', 'true');
                            setFingerprint(value);
                        })
                        .catch((err)=>{
                            if(PLATFORM == 'ios' && err.name == 'LAErrorUserCancel')
                                console.log("User cancel the auth");
                            else
                                _showDismissAlert(err.message);
                        })
                    }
                }
                else{
                    setFingerprint(false);
                    _showDismissAlert("Touch ID is not supported on your device or not enrolled yet");
                }
            }
            else{
                if(biometryType){
                    if(value == false){
                        await _setAsync('fingerprint', 'false');
                        setFingerprint(value);
                    }
                    else{
                        TouchID.authenticate('Instant authentication using Touch Sensor',FINGERPRINT_CONFIG)
                        .then(async()=>{
                            await _setAsync('fingerprint', 'true');
                            setFingerprint(value);
                        })
                        .catch((err)=>{
                            if(err.code == 'USER_CANCELED' || err.code == 'AUTHENTICATION_CANCELED')
                                console.log("User cancel the auth");
                            else
                                _showDismissAlert(err.message);
                        })
                    }
                }
                else{
                    setFingerprint(false);
                    _showDismissAlert("Touch ID is not supported on your device or not enrolled yet");
                }
            } 
        })
        .catch((err)=>{
            console.log(err);
            _showDismissAlert(err);
        })
    }

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

    // Checking for fingerprint value
    useLayoutEffect(()=>{
        const _checkFingerprint = async () => {
            await _getAsync('fingerprint')
            .then((value)=>{
                console.log(value);
                if(value != null && value != undefined && value == 'true')
                    setFingerprint(true);
                else
                    setFingerprint(false);
            })
            .catch((err)=>{
                _showDismissAlert(err.message);
            })
        }
        _checkFingerprint();
    },[])

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

            <View style={styles._row}>
                <Text style={[styles._label,{ color: colors.blackColor }]}>Fingerprint</Text>
                <Switch
                    trackColor={{ false: colors.blackColor, true: colors.primary }}
                    thumbColor={isFingerprint ? colors.whiteColor : colors.background}
                    ios_backgroundColor={colors.whiteColor}
                    onValueChange={_toggleFingerprint}
                    value={isFingerprint}
                />
            </View>

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
    _row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: THEME.THEMING.spacing_15,
    },
    _label:{
        ...FONTS.body4_medium,
    },
});

export default Settings;
