import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
} from 'react-native';
import { AppBar, PasswordInput, SimpleInput, SimpleButton, OverlayLoader } from '../components';
import { FONTS, IMAGES, THEME } from '../config';
import { _loginUser } from '../firebase/firebase';
import { useColors } from '../hooks';
import { _gotoDashboard, _gotoForgetPassword } from '../navigation/service';
import { _showDismissAlert } from '../utils/messages';
import { _validateEmail } from '../utils/validation';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            .then(()=>{
                // Login Successfull
                _gotoDashboard(navigation);

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
                    marginTop: THEME.HP(THEME.THEMING.spacing_15),
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
});

export default Login;
