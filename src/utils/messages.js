import {
    Alert
} from 'react-native';

/**
 * Function to show dismissible one button alert
 * @param {String} message 
 */
export const _showDismissAlert = (message) => {
    Alert.alert(
        "MIS",
        message,
        [
            {
                text: "Okay",
                onPress: () => console.log("Okay is pressed"),
                style: "default"
            }
        ],
        {
            cancelable: true,
        }
    )
}