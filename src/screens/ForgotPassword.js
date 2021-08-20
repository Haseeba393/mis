import React, { useState } from 'react';
import {
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import { AppBar, OverlayLoader, SimpleButton, SimpleInput } from '../components';
import { FONTS, THEME } from '../config';
import { _sendPasswordResetLink } from '../firebase/firebase';
import { useColors } from '../hooks';
import { _showDismissAlert } from '../utils/messages';
import { _validateEmail } from '../utils/validation';

const ForgotPassword = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);
    const colors = useColors();

    // Function to send email to email
    const _onSendBtnClick = async () => {
        if(email.length == 0)
            _showDismissAlert("Email is required");
        else if(!_validateEmail(email))
            _showDismissAlert("Email is invalid. Please try again with valid Email e.g. abc@abc.abc");
        else{

            setLoading(true);
            await _sendPasswordResetLink(email.trim().toLowerCase())
            .then(()=>{
                _showDismissAlert("Link has been sent successfully");
                setEmail('');
                navigation.goBack();
            })
            .catch((err)=>{
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

            <Text style={[styles._info, { color: colors.text }]}>Please enter your registered email. A password reset link will be sent to your email.</Text>
            <SimpleInput 
                placeholder='Registered Email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={{ marginVertical: THEME.THEMING.spacing_15 }}
            />
            <SimpleButton 
                onPress={_onSendBtnClick}
                title='Send Link'
                titleColor={colors.whiteColor}
                buttonColor={colors.primary}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    _mainContainer: {
        flex: 1,
        padding: THEME.THEMING.spacing_15,
    },
    _info:{
        ...FONTS.body4_regular,
        marginTop: THEME.HP(THEME.THEMING.spacing_10),
    },
});

export default ForgotPassword;
