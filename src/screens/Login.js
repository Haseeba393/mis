import React, { useEffect, useState, useLayoutEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
} from 'react-native';

import TouchID from 'react-native-touch-id';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { AppBar, PasswordInput, SimpleInput, SimpleButton, OverlayLoader } from '../components';
import { CONSTANTS, FONTS, IMAGES, THEME } from '../config';
import { _loginUser } from '../firebase/firebase';
import { useColors } from '../hooks';
import { _gotoDashboard, _gotoForgetPassword } from '../navigation/service';
import { _getAsync, _setAsync } from '../utils/async';
import { _showDismissAlert } from '../utils/messages';
import { _validateEmail } from '../utils/validation';
import { FINGERPRINT_CONFIG, PLATFORM } from '../config/constants';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFingerprintAvailable, setFinerprintAviable] = useState('');
    const [isLoading, setLoading] = useState(false);
    const colors = useColors();

    // Login Button press
    const _onLoginClick = async () => {
        if(email.length == 0)
            _showDismissAlert("Email is required");
        else if(!_validateEmail(email))
            _showDismissAlert("Email is invalid. Please try again with valid Email e.g. abc@abc.abc");
        else if(password.length == 0)
            _showDismissAlert("Password is required");
        else if(password.length < 4)
            _showDismissAlert("Password should contain at least 4 characters");
        else{

            setLoading(true);

            // Calling firebase login function to login
            await _loginUser(email.toLowerCase().trim(), password.trim())
            .then(async()=>{
                // Login Successfull
                _gotoDashboard(navigation);

                // Saving Email and password in async storage
                await _setAsync('email', email.trim().toLowerCase());
                await _setAsync('password', password.trim());

                // Clearing fields
                setEmail('');
                setPassword('');
            })
            .catch((err)=>{
                // Login Unsuccessfull
                _showDismissAlert(err.message);
            });

            setLoading(false);
        }
    }

    // When user will click on finger print icon
    const _onFingerprintClick = async () => {
        
        // Checking is senser available
        await TouchID.isSupported()
        .then(async(biometryType)=>{
            if(PLATFORM === 'ios'){
                
                if(biometryType == "TouchID"){
                    
                    TouchID.authenticate('Instant authentication using Touch Sensor',FINGERPRINT_CONFIG)
                    .then(async()=>{
                        const userEmail = await _getAsync('email');
                        const userPassword = await _getAsync('password');

                        setLoading(true);

                        // Calling firebase login function to login
                        await _loginUser(userEmail.toLowerCase().trim(), userPassword.trim())
                        .then(()=>{
                            // Login Successfull
                            _gotoDashboard(navigation);
                        })
                        .catch((err)=>{
                            // Login Unsuccessfull
                            _showDismissAlert(err.message);
                        });

                        setLoading(false);
                    })
                    .catch((err)=>{
                        if(err.code == 'USER_CANCELED' || err.code == 'AUTHENTICATION_CANCELED')
                            console.log("User cancel the auth");
                        else
                            _showDismissAlert(err.message);
                    })
                    
                }
                else{
                    setFingerprint(false);
                    _showDismissAlert("Touch ID is not supported on your device or not enrolled yet");
                }
            }
            else{
                if(biometryType){
                    TouchID.authenticate('Instant authentication using Touch Sensor',FINGERPRINT_CONFIG)
                    .then(async()=>{
                        const userEmail = await _getAsync('email');
                        const userPassword = await _getAsync('password');

                        setLoading(true);

                        // Calling firebase login function to login
                        await _loginUser(userEmail.toLowerCase().trim(), userPassword.trim())
                        .then(()=>{
                            // Login Successfull
                            _gotoDashboard(navigation);
                        })
                        .catch((err)=>{
                            // Login Unsuccessfull
                            _showDismissAlert(err.message);
                        });

                        setLoading(false);
                    })
                    .catch((err)=>{
                        console.log(err);
                        if(err.code == 'USER_CANCELED' || err.code == 'AUTHENTICATION_CANCELED')
                            console.log("User cancel the auth");
                        else
                            _showDismissAlert(err);
                    })
                }
                else{
                    setFingerprint(false);
                    _showDismissAlert("Touch ID is not supported on your device or not enrolled yet");
                }
            } 
        })
        .catch((err)=>{
            console.log(err);
            _showDismissAlert(err.message);
        });
    }

    // Effect to check is finger print available
    useLayoutEffect(()=>{
        const _checkFingerprint = async () => {
            await _getAsync('fingerprint')
            .then((value)=>{
                setFinerprintAviable(value);
            })
            .catch((err)=>{
                _showDismissAlert(err.message);
            })
        }
        _checkFingerprint();
    },[])

    // Effect to get last logged in email
    useEffect(()=>{
        const _getLastLoggedInEmail = async () => {
            await _getAsync('email')
            .then((value)=>{
                setEmail(value);
            })
            .catch((err)=>{
                _showDismissAlert(err.message);
            })
        }
        _getLastLoggedInEmail();
    },[]);

    return (
        <View style={styles._mainContainer}>
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

            <Image 
                source={IMAGES.LOGO_IMAGE}
                resizeMode='contain'
                style={{
                    width: THEME.WP('70%'),
                    height: THEME.HP('20%'),
                    marginTop: THEME.HP(THEME.THEMING.spacing_10),
                }}
            />

            <Text style={[styles._heading, { color: colors.text }]}>Log in to Continue</Text>

            <View style={styles._inputView}>
                <SimpleInput 
                    width='100%'
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <PasswordInput 
                    width='100%'
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={{
                        marginTop: THEME.THEMING.spacing_10,
                    }}
                />
                <Text onPress={()=>{ _gotoForgetPassword(navigation) }} style={[styles._forgotPassword, { color: colors.text } ]}>Forgot Password?</Text>

                <SimpleButton 
                    onPress={()=>{
                        _onLoginClick();
                    }}
                    title='Login'
                    titleColor={colors.whiteColor}
                    buttonColor={colors.primary}
                    buttonStyle={{ marginTop: THEME.THEMING.spacing_20 * 2 }}
                />

                {
                    isFingerprintAvailable == 'true' &&
                    <View style={styles._fingerprintView}>
                        <Text style={[styles._label, {color: colors.border} ]}>or login with</Text>
                        <MatIcon 
                            onPress={_onFingerprintClick}
                            name='fingerprint'
                            size={CONSTANTS.ICON_SIZE * 3}
                            color={colors.whiteColor}
                        />
                    </View>
                    
                }
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    _mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    _heading:{
        marginTop: THEME.THEMING.spacing_20 * 2,
        ...FONTS.body1_bold,
    },
    _inputView:{
        width: THEME.WP('90%'),
        marginTop: THEME.THEMING.spacing_20 * 2,
    },
    _forgotPassword:{
        ...FONTS.body5_medium,
        textDecorationLine: 'underline',
        alignSelf: 'flex-end',
        marginTop: THEME.THEMING.spacing_10 / 2,
    },
    _fingerprintView:{
        alignItems: 'center',
    },
    _label:{
        ...FONTS.body5_regular,
        marginVertical: THEME.THEMING.spacing_15,
    },
});

export default Login;
