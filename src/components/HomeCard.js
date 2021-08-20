import React from 'react';
import { 
    StyleSheet, 
    Text, 
    Image,
    TouchableOpacity,
} from 'react-native';

import { FONTS, THEME } from '../config';
import { useColors } from '../hooks';
import { _gotoWebPage } from '../navigation/service';

const HomeCard = ({home_item, navigation}) => {

    const colors = useColors();

    // On Home Item Click
    const _onHomeItemClick = () => {
        _gotoWebPage(navigation, home_item);
    }

    return (
        <TouchableOpacity 
            onPress={_onHomeItemClick}
            style={styles._cardContainer}
        >
            <Image 
                source={{ uri: home_item.image }}
                resizeMode='cover'
                style={styles._icon}
            />
            <Text style={[styles._title, {color: colors.blackColor}]}>{home_item.title}</Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    _cardContainer:{
        width: '100%',
        height: THEME.HP('18%'),
        padding: THEME.THEMING.spacing_15,
        backgroundColor: 'white',
        shadowColor: 'black',
        borderRadius: THEME.THEMING.spacing_20,
        ...THEME.SHADOWS.shadow1,
        marginBottom: THEME.THEMING.spacing_15,
        justifyContent: 'center',
    },
    _icon:{
        width: THEME.WP('15%'),
        height: THEME.WP('15%'),
        borderRadius: THEME.THEMING.radius_20,
    },
    _title:{
        ...FONTS.body3_medium,
        marginTop: THEME.THEMING.spacing_10,
    },
});

export default HomeCard;
