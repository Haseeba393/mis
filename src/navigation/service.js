/*
    File contains functions related to navigation
*/

import { ROUTES } from "./routes";

/**
 * Function that takes user to auth stack
 * @param {Object} navigation 
 */
export const _gotoAuth = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.AUTH_STACK }]
    });
}

/**
 * Function that takes user to forgot password
 * @param {Object} navigation 
 */
export const _gotoForgetPassword = (navigation) => {
    navigation.navigate(ROUTES.FORGOT_PASSWORD);
}

/**
 * Function that takes user to dashboard screen
 * @param {Object} navigation 
 */
 export const _gotoDashboard = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.DASHBOARD }]
    });
}

/**
 * Function that takes user to web page
 * @param {Object} navigation 
 * @param {Object} home_item
 */
 export const _gotoWebPage = (navigation, home_item) => {
    navigation.navigate(ROUTES.WEBPAGE, {home_item});
}