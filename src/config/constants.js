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

export default {
    PLATFORM: Platform.OS,
    INPUT_HEIGHT: 45,
    ICON_SIZE: 24,
    HOME_LIST,
}
