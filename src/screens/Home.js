import React,{ useEffect } from 'react';
import {
    StyleSheet, 
    View,
    FlatList,
    Animated,
} from 'react-native';

import { AppBar, HomeCard } from '../components';
import { CONSTANTS, THEME } from '../config';
import { useColors } from '../hooks';



const Home = ({navigation}) => {

    // For animation
    const slidingValue = new Animated.Value(1500);
    // Interploting the animation value
    const slide = slidingValue.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 100],
    });

    const colors = useColors();

    // Effect to perform animation on list
    useEffect(() => {
        Animated.spring(slidingValue,{
            toValue: 1,
            damping: 50,
            useNativeDriver: true,
        }).start();
    }, [])

    return (
        <View style={[styles._mainContainer, {backgroundColor: colors.whiteColor}]}>
            <AppBar 
                backgroundColor={colors.background}
                barType='light'
            />
            
            <Animated.View style={{ flex: 1, transform: [{ translateY: slide }] }}>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={CONSTANTS.HOME_LIST}
                    style={{
                        flex: 1,
                    }}
                    contentContainerStyle={styles._scrollContainer}
                    keyExtractor={item => item.key}
                    renderItem={({item, index})=>(
                        <HomeCard 
                            navigation={navigation}
                            home_item={item}
                        />
                    )}
                />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    _mainContainer: {
        flex: 1,
    },
    _scrollContainer:{
        padding: THEME.THEMING.spacing_15,
        backgroundColor: 'white',
        paddingBottom: '20%'
    },
});

export default Home;
