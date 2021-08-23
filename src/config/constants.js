import {
    Platform,
} from 'react-native';

const HOME_LIST = [
    {
        key: '1',
        title: 'Bookings Till Date',
        image: 'https://image.flaticon.com/icons/png/128/751/751663.png',
        url: 'http://13.88.187.74/BookingsTillDate.html'
    },
    {
        key: '2',
        title: 'Commision Receivable Till Date',
        image: 'https://image.flaticon.com/icons/png/128/2450/2450245.png',
        url: 'http://13.88.187.74/CommisionTillDate.html'
    },
    {
        key: '3',
        title: 'Due Commision Of Staff',
        image: 'https://image.flaticon.com/icons/png/128/2699/2699287.png',
        url: 'http://13.88.187.74/DueCommisionOfStaff.html'
    },
    {
        key: '4',
        title: 'Due Commision Of Agents',
        image: 'https://image.flaticon.com/icons/png/128/3286/3286751.png',
        url: 'http://13.88.187.74/DueCommisionOfAgents.html'
    },
    {
        key: '5',
        title: 'Pending Letters',
        image: 'https://image.flaticon.com/icons/png/128/1033/1033943.png',
        url: 'http://13.88.187.74/PendingLetters.html'
    },
    {
        key: '6',
        title: 'Pending Slips',
        image: 'https://image.flaticon.com/icons/png/128/1571/1571031.png',
        url: 'http://13.88.187.74/PendingSlips.html'
    }
];

// Fingerprint modal Config
const FINGERPRINT_CONFIG = {
    title: 'MIS', // Android
    imageColor: 'rgba(255,255,255,0.1)', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Authentication is failed. Try again', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

export default {
    PLATFORM: Platform.OS,
    INPUT_HEIGHT: 45,
    ICON_SIZE: 24,
    HOME_LIST,
    FINGERPRINT_CONFIG,
    
}
