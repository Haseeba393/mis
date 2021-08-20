/*
    File contains all functions related to Firebase
*/

import auth from '@react-native-firebase/auth';

/**
 * Function to do login using firebase
 * @param {String} email 
 * @param {String} password 
 * @returns 
 */
export const _loginUser = (email, password) => {
    return new Promise(async(resolve, reject)=>{
        await auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            resolve();
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

/**
 * Function to send password reset link
 * @param {String} email 
 * @returns 
 */
 export const _sendPasswordResetLink = (email) => {
    return new Promise(async(resolve, reject)=>{
        await auth().sendPasswordResetEmail(email)
        .then(()=>{
            resolve();
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

/**
 * Function to logout user from app
 * @returns 
 */
 export const _logoutUser = () => {
    return new Promise(async(resolve, reject)=>{
        await auth().signOut()
        .then(()=>{
            resolve();
        })
        .catch((err)=>{
            reject(err)
        })
    })
}