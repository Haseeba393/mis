/*
    File contains all functions related to Firebase
*/

import auth from '@react-native-firebase/auth';

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
