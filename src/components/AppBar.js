import React from 'react';
import {
    StatusBar
} from 'react-native';

const AppBar = ({ backgroundColor, barType }) => {
    return(
        <StatusBar 
            backgroundColor={backgroundColor}
            barStyle={barType == 'light' ? 'light-content' : 'dark-content'}
        />
    );
}

export default AppBar;